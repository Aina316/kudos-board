import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import SearchBox from "./components/SearchBox.jsx";
import BoardList from "./components/BoardList.jsx";
import Boarddata from "./data/data.js";
import Modal from "./components/Modal.jsx";

function App() {
  const [onModal, setOnModal] = useState(false);

  // const [searchInput, setSearchInput] = useState("");
  // const [query, setQuery] = useState("");
  // const deleteBoard = async (boardId) => {
  //   setBoards((prevBoards) =>
  //     prevBoards.filter((board) => board.id !== boardId)
  //   );
  //   loadBoards();
  //   console.log("23456", Boarddata);
  // };

  // const loadBoards = () => {
  //   useEffect(() => {
  //     const queryParams = new URLSearchParams({
  //       ...(filters.type && { type: filters.type }),
  //       ...(filters.ageMin && { age_min: filters.ageMin }),
  //       ...(filters.ageMax && { age_max: filters.ageMax }),
  //     }).toString();

  //     fetch(`http://localhost:3000/boards?${queryParams}`)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Response failed");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setBoards(data);
  //       })
  //       .catch((error) => {
  //         console.error(
  //           "There was a problem with your fetch operation:",
  //           error
  //         );
  //         setError("Failed to fetch boards. Please try again later.");
  //       });
  //   }, [boards]);
  // };
  //   let filteredBoards = Boarddata;

  //   return filteredBoards.map((board) => (
  //     <div key={board.id} className="board-component">
  //       <img src={board.Image} alt={board.title} />
  //       <h3>{board.title}</h3>
  //       <p>{board.category}</p>
  //       <div className="view-delete-btn">
  //         <button>View Board</button>
  //         <button
  //           className="delete-btn"
  //           onClick={() => deleteBoard(board.board_id)}
  //         >
  //           Delete Board
  //         </button>
  //       </div>
  //     </div>
  //   ));
  // };
  // const searchBoards = () => {
  //   if (searchInput.trim()) {
  //     setQuery(searchInput.trim());
  //   }
  // };

  // const clearSearch = () => {
  //   setSearchInput("");
  //   setQuery("");
  // };
  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     searchBoards();
  //   }
  // };

  // // useEffect(() => {
  // //   loadBoards(true);
  // // }, [query]);

  const handleCreateSuccess = () => {
    setOnModal(false);
    loadBoards();
  };
  const toggleForm = () => {
    setOnModal((prev) => !prev);
  };

  // if (error) return <div>Error: {error}</div>;
  return (
    <div className="App">
      <Header />
      <SearchBox />
      <div className="create-btn">
        <button onClick={toggleForm}>Create New Board</button>
        {onModal && (
          <Modal onClose={toggleForm} createBoard={handleCreateSuccess} />
        )}
      </div>
      <BoardList />
      <Footer />
    </div>
  );
}
export default App;
