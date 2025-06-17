import "../style/Modal.css";
import React, { useState } from "react";
import Boarddata from "../data/data.js";

const Modal = ({ createBoard, onClose }) => {
  const [newBoardTitle, setNewBoardTitle] = useState("");
  const [newBoardCategory, setNewBoardCategory] = useState("");
  const [newBoardAuthor, setNewBoardAuthor] = useState("");
  const createNewBoard = async () => {
    try {
      if (!newBoardTitle || !newBoardCategory) {
        alert("Please fill out the Title and Category fields");
        return;
      }

      const data = Boarddata;
      Boarddata.push({
        id: Boarddata.length + 1,
        title: newBoardTitle,
        category: newBoardCategory,
        Image: "/src/assets/images/background.jpeg",
        Author: newBoardAuthor,
        cards: [],
      });

      createBoard();

      setNewBoardTitle("");
      setNewBoardCategory("");
      setNewBoardAuthor("");

      onClose();
    } catch (error) {
      console.error("Error creating a new board:", error);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="new-board" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Create a New Board</h2>
        <label>Title</label>
        <input
          type="text"
          value={newBoardTitle}
          onChange={(e) => setNewBoardTitle(e.target.value)}
          required
        />
        <label>Category</label>
        <select
          value={newBoardCategory}
          onChange={(e) => setNewBoardCategory(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          <option value="Celebration">Celebration</option>
          <option value="Thank You">Thank You</option>
          <option value="Inspiration">Inspiration</option>
        </select>
        <label>Author</label>
        <input
          type="text"
          value={newBoardAuthor}
          onChange={(e) => setNewBoardAuthor(e.target.value)}
        />
        <button type="submit" onClick={createNewBoard}>
          Create Board
        </button>
      </div>
    </div>
  );
};

export default Modal;
