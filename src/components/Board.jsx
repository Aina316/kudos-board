import "../style/Board.css";

const Board = () => {
  return (
    <div className="board-component">
      <img src="/src/assets/images/kudoboard_logo.jpg" alt="Kudoboard Logo" />
      <h2>Board Title</h2>
      <h3>Celebration</h3>
      <div className="view-delete-btn">
        <button>View Board</button>
        <button className="delete-btn">Delete Board</button>
      </div>
    </div>
  );
};
export default Board;
