import "../style/Modal.css";
import React, { useState } from "react";
const Modal = ({ creatBoard, onClose }) => {
  const [newBoardTitle, setNewBoardTitle] = useState("");
  const [newBoardCategory, setNewBoardCategory] = useState("");
  const [newBoardAuthor, setNewBoardAuthor] = useState("");
  const createNewBoard = async () => {
    try {
      if (!newBoardTitle || !newBoardCategory) {
        alert("Please fill out the Title and Category fields");
        return;
      }

      await axios.post(
        "https://site-kudos-board-exemplar-backend.onrender.com/boards",
        {
          title: newBoardTitle,
          category: newBoardCategory,
          owner: newBoardAuthor || "Anonymous",
        }
      );

      onSuccess();

      setNewBoardTitle("");
      setNewBoardCategory("");
      setNewBoardAuthor("");

      onClose();
    } catch (error) {
      console.error("Error creating a new board:", error);
    }
  }; // Pr

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="new-board" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Create a New Board</h2>
        <label>Title</label>
        <input type="text" required />
        <label>Category</label>
        <select required>
          <option value="">Select a category</option>
          <option value="Celebration">Celebration</option>
          <option value="Thank You">Thank You</option>
          <option value="Inspiration">Inspiration</option>
        </select>
        <label>Author</label>
        <input type="text" />
        <button type="submit">Create Board</button>
      </div>
    </div>
  );
};

export default Modal;
