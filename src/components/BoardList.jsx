import Board from "./Board";
import "../style/BoardList.css";
const BoardList = ({ boards }) => {
  if (!boards || boards.length === 0) {
    return <p>No Boards Added</p>;
  }
  return (
    <div className="board-list">
      {boards.map((board) => (
        <Board key={board.id} board={board} />
      ))}
    </div>
  );
};

export default BoardList;
