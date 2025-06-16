import Board from "./Board";
import "../style/BoardList.css";
const BoardList = ({ card }) => {
  return (
    <div className="board-list">
      <Board />
      <Board />
      <Board />
      <Board />
      <Board />
    </div>
  );
};

export default BoardList;
