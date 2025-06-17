import "../style/Board.css";

const Board = ({ board, viewCards, onDelete }) => {
  console.log("222", board);
  return (
    <div className="board-component">
      <img src={board.Image} alt="Kudoboard Logo" />
      <h2>{board.title}</h2>
      <h3>{board.category}</h3>
      <div className="view-delete-btn">
        <button onClick={viewCards}>View Board</button>
        <button className="delete-btn" onClick={onDelete}>
          Delete Board
        </button>
      </div>
    </div>
  );
};

export default Board;
