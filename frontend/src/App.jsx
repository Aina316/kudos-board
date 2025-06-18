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

  const fetchBoards = async () => {
    try {
      const response = await fetch("http://localhost:3000/boards");
      const data = await response.json();
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
      <SearchBox />
      <div className="create-btn">
        <button onClick={toggleForm}>Create New Board</button>
        {onModal && (
          <Modal onClose={toggleForm} createBoard={handleCreateSuccess} />
        )}
      </div>
      <BoardList boards={boards} onDelete={handleCreateSuccess} />
      <Footer />
    </div>
  );
}
export default App;
