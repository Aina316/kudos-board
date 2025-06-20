import { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import SearchBox from "./SearchBox.jsx";
import BoardList from "./BoardList.jsx";
import Modal from "./Modal.jsx";

function HomePage() {
  const [onModal, setOnModal] = useState(false);
  const [boards, setBoards] = useState([]);
  const [filter, setFilter] = useState({ category: "", type: "All" });
  const [searchInput, setSearchInput] = useState("");
  const [inputValue, setInputValue] = useState("");
  const baseUrl = import.meta.env.VITE_API_URL;
  const filterBoards = () => {
    let filtered = [...boards];
    if (filter.type === "recent") {
      filtered = filtered
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 6);
    } else if (filter.type === "category") {
      filtered = filtered.filter(
        (board) =>
          board.category?.toLowerCase() === filter.category.toLowerCase()
      );
    }

    if (searchInput.trim() !== "") {
      filtered = filtered.filter((board) =>
        board.title.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    return filtered;
  };
  const fetchBoards = async () => {
    try {
      const response = await fetch(`${baseUrl}/boards`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Data is here", data);
      setBoards(data);
    } catch (error) {
      console.error("Failed to fetch boards", error);
    }
  };

  useEffect(() => {
    fetchBoards();
  }, []);
  const handleCreateSuccess = () => {
    setOnModal(false);
    fetchBoards();
  };
  const toggleForm = () => {
    setOnModal((prev) => !prev);
  };

  return (
    <div className="App">
      <Header />
      <SearchBox
        setFilter={setFilter}
        setInputValue={setInputValue}
        setSearchInput={setSearchInput}
        inputValue={inputValue}
      />
      <div className="create-btn">
        <button onClick={toggleForm}>Create New Board</button>
        {onModal && (
          <Modal onClose={toggleForm} createBoard={handleCreateSuccess} />
        )}
      </div>
      <BoardList boards={filterBoards()} onDelete={handleCreateSuccess} />
      <Footer />
    </div>
  );
}
export default HomePage;
