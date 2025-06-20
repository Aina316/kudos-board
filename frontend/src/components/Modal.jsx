import "../style/Modal.css";
import { useState } from "react";
const Modal = ({ createBoard, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
  });
  const getRandomImage = () => {
    const keywords = [
      "src/assets/images/background.jpeg",
      "src/assets/images/background.jpeg",
      "src/assets/images/background.jpeg",
      "src/assets/images/background.jpeg",
      "src/assets/images/background.jpeg",
      "src/assets/images/background.jpeg",
      "src/assets/images/background.jpeg",
      "src/assets/images/background.jpeg",
      "src/assets/images/background.jpeg",
      "src/assets/images/background.jpeg",
    ];
    const keyword = keywords[Math.floor(Math.random() * keywords.length)];
    console.log("20200", keyword);
    return keyword;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://kudos-board-4f8j.onrender.com/boards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        image: getRandomImage(),

        createdAt: new Date().toISOString(),
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("Failed to add board.");
      })
      .then((data) => {
        console.log("Success:", data);
        createBoard();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
          name="title"
          value={FormData.title}
          onChange={handleChange}
          required
        />

        <label>Category</label>
        <select
          value={formData.category}
          name="category"
          onChange={handleChange}
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
          name="author"
          value={FormData.author}
          onChange={handleChange}
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Create Board
        </button>
      </div>
    </div>
  );
};

export default Modal;
