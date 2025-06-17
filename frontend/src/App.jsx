import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Boarddata from "./data/data.js";
import Modal from "./components/Modal.jsx";

function App() {
  const [onModal, setOnModal] = useState(false);
  const [boards, setBoards] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");

  const loadBoards = () => {
    let filteredBoards = Boarddata;

    return filteredBoards.map((board) => (
      <div key={board.id} className="board-component">
        <img src={board.Image} alt={board.title} />
        <h3>{board.title}</h3>
        <p>{board.category}</p>
        <div className="view-delete-btn">
          <button>View Board</button>
          <button
            className="delete-btn"
            onClick={() => deleteBoard(board.board_id)}
          >
            Delete Board
          </button>
        </div>
      </div>
    ));
  };
  const searchBoards = () => {
    if (searchInput.trim()) {
      setQuery(searchInput.trim());
    }
  };

  const clearSearch = () => {
    setSearchInput("");
    setQuery("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchBoards();
    }
  };

  // useEffect(() => {
  //   loadBoards(true);
  // }, [query]);

  // const handleCreateSuccess = () => {
  //   setBoards([]);
  //   loadBoards();
  //   setOnModal(false);
  // };
  const toggleForm = () => {
    setOnModal((prev) => !prev);
  };
  return (
    <div className="App">
      <Header />
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Boards..."
          className="search-bar"
        />
        <button>Search</button>
        <button>Clear</button>
      </div>
      <div className="tags">
        <button>All</button>
        <button>Recent</button>
        <button>Celebration</button>
        <button>Thank you</button>
        <button>inspiration</button>
      </div>
      <div className="create-btn">
        <button onClick={toggleForm}>Create New Board</button>
        {onModal && (
          <Modal onClose={toggleForm} createBoard={handleCreateSuccess} />
        )}
      </div>
      <main className="board-list-component">
        <section className="board-list">{loadBoards()}</section>
      </main>
      <Footer />
    </div>
  );
}
export default App;
