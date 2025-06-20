import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import BoardPage from "./components/BoardPage";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const mode = darkMode ? "dark" : "light";
    localStorage.setItem("theme", mode);
    document.body.className = mode;
  }, [darkMode]);

  return (
    <Router>
      <div>
        <header
          className="theme-toggle"
          style={{ padding: "1rem", backgroundColor: "#3f318e" }}
        >
          <button onClick={() => setDarkMode((prev) => !prev)}>
            Switch to {darkMode ? "Light" : "Dark"} Mode
          </button>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/boards/:boardId" element={<BoardPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
