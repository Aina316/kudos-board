import "../style/Modal.css";

const Modal = () => {
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
