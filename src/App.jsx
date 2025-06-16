import React, { useState, useEffect } from "react";
import "./App.css";
import BoardList from "./components/BoardList";
import Modal from "./components/Modal";

function App() {
  const [onModal, setOnModal] = useState(false);

  const toggleForm = () => {
    setOnModal((prev) => !prev);
  };
  return (
    <div className="App">
      <header className="banner">
        <img src="/src/assets/images/kudoboard_logo.jpg" alt="Kudoboard Logo" />
      </header>
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
        {onModal && <Modal onClose={toggleForm} />}
      </div>

      <main className="board-list-component">
        <BoardList />
      </main>

      <footer className="app-footer">
        <b>Copyright &copy; 2025 | All Rights Reserved</b>
      </footer>
    </div>
  );
}
export default App;
