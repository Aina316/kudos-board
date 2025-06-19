import { useEffect, useState } from "react";
import Board from "./Board";
const BoardList = ({ boards, onDelete }) => {
  console.log("4", boards);
  return (
    <main className="board-list-component">
      <div className="board-list">
        {boards.map((board) => (
          <Board
            key={board.id}
            id={board.id}
            title={board.title}
            image={board.image}
            category={board.category}
            author={board.author}
            onDelete={onDelete}
          />
        ))}
      </div>
    </main>
  );
};

export default BoardList;
