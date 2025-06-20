import "../App.css";
import { Link } from "react-router-dom";

const Board = ({ id, title, image, category, author, onDelete }) => {
  const deleteBoard = () => {
    fetch(`https://kudos-board-vgqk.onrender.com/boards/${id}`, {
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
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Author:</strong> {author}
      </p>
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
