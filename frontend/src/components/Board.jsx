import "../App.css";
import { Link } from "react-router-dom";
import image from "/src/assets/images/background.jpeg";
const Board = ({ id, title, category, author, onDelete }) => {
  const deleteBoard = () => {
    fetch(`https://kudos-board-4f8j.onrender.com/boards/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (!res.ok) throw new Error("Delete failed");
      onDelete();
    });
  };
  return (
    <div className="board-card">
      <img src={image} alt={title} className="board-image" />
      <h3>{title}</h3>
      <p>{category}</p>
      <p>{author}</p>
      <div className="view-delete-btn">
        <button>
          <Link to={`/boards/${id}`} className="view-board">
            View Board
          </Link>{" "}
        </button>
        <button className="delete-btn" onClick={deleteBoard}>
          Delete Board
        </button>
      </div>
    </div>
  );
};

export default Board;
