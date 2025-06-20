import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import NewCardForm from "./NewCardForm";
import Card from "./Card";
const BoardPage = () => {
  const { boardId } = useParams();
  const [boardTitle, setBoardTitle] = useState("");
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchCards();
    fetchBoardData();
  }, [boardId]);

  const fetchCards = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/cards/${boardId}`
      );
      console.log("2025", response.data);
      setCards(response.data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const fetchBoardData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/boards/${boardId}`
      );
      const title = response.data.title;
      setBoardTitle(title);
    } catch (error) {
      console.error("Error fetching board data:", error);
    }
  };

  const handleDelete = async (cardId) => {
    try {
      console.log("Deleting card with ID: ", cardId);
      await axios.delete(`http://localhost:3000/cards/${cardId}`);
      fetchCards();
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleCreateSuccess = (newCard) => {
    if (newCard && newCard.id) {
      fetchCards();
      setShowForm(false);
    } else {
      console.error("Invalid card data received:", newCard);
    }
  };

  return (
    <div>
      <Link to="/">
        <span className="back-arrow"></span>
      </Link>
      <Header />
      <h2> {boardTitle}</h2>
      <div className="center-create-button">
        <button className="create-card-btn" onClick={toggleForm}>
          Create a Card
        </button>
        {showForm && (
          <NewCardForm
            boardId={boardId}
            onSuccess={handleCreateSuccess}
            onClose={toggleForm}
          />
        )}
      </div>

      <div className="card-list">
        {cards.map((card) => (
          <div key={card.id} className="card-preview">
            <Card card={card} onDelete={handleDelete} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BoardPage;
