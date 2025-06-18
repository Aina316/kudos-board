import "../App.css";
const Board = ({ title, image, category, author }) => {
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
        <button
          className="delete-btn"
          onClick={() => deleteBoard(board.board_id)}
        >
          Delete Board
        </button>
      </div>
    </div>
  );
};

export default Board;
