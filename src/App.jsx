import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Boarddata from "./data/data.js";
import BoardList from "./components/BoardList";
function App() {
  const [boards, setBoards] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");

  const loadBoards = async (isNewSearch = false) => {
    try {
      const data = Boarddata;
      const filteredData = data;

      setBoards((prevBoards) =>
        isNewSearch ? filteredData : [...prevBoards, ...filteredData]
      );
    } catch (err) {
      console.error("Failed to fetch Boards:", err);
      setBoards([]);
    } finally {
    }
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

  useEffect(() => {
    loadBoards(true);
  }, [query]);

  return (
    <div className="App">
      <Header />
      <main className="board-list-component">
        <BoardList boards={boards} />
      </main>
      <Footer />
    </div>
  );
}
export default App;
