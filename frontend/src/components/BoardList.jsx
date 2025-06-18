import { useEffect, useState } from "react";
import Board from "./Board";

const BoardList = () => {
  const [boards, setBoards] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/boards")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        setBoards(data);
      })
      .catch((error) => {
        console.error("Error fetching boards:", error);
        setError("Could not load boards. Try again later.");
      });
  }, []);

  return (
    <main className="board-list-component">
      {/* {error && <p>{error}</p>} */}
      <div className="board-list">
        {boards.map((board) => (
          <Board
            key={board.id}
            title={board.title}
            image={board.image}
            category={board.category}
            author={board.author}
          />
        ))}
      </div>
    </main>
  );
};

export default BoardList;
