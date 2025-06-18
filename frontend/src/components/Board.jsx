import "../App.css";
const Board = ({ id, title, image, category, author, onDelete }) => {
  const deleteBoard = () => {
    fetch(`http://localhost:3000/boards/${id}`, {
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
        <button>View Board</button>
        <button className="delete-btn" onClick={deleteBoard}>
          Delete Board
        </button>
      </div>
    </div>
  );
};

export default Board;
