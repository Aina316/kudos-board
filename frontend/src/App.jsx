import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import SearchBox from "./components/SearchBox.jsx";
import BoardList from "./components/BoardList.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  const [onModal, setOnModal] = useState(false);
  const [boards, setBoards] = useState([]);
  const [filter, setFilter] = useState({ category: "", type: "All" });

  const filterBoards = () => {
    if (filter.type === "recent") {
      console.log("1", boards);
      return boards
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 6);
    }
    if (filter.category) {
      console.log("2", boards);

      return boards.filter((board) => board.category === filter.category);
    }
    console.log("3", boards);

    return boards;
  };
  const fetchBoards = async () => {
    try {
      const response = await fetch("http://localhost:3000/boards");
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

  // if (error) return <div>Error: {error}</div>;
  return (
    <div className="App">
      <Header />
      <SearchBox setFilter={setFilter} />
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
export default App;
