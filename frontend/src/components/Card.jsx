import { useState } from "react";
import axios from "axios";
import Comment from "./Comment";
import "../style/Card.css";
const Card = ({ card, onDelete, onPin }) => {
  const { id, title, description, gif, pinned, votes: defaultVotes } = card;
  const [votes, setVotes] = useState(defaultVotes || 0);
  const [showComment, setShowComment] = useState(false);
  const handleUpvote = async () => {
    try {
      const res = await axios.patch(
        `https://kudos-board-4f8j.onrender.com/cards/${id}/votes`
      );

      setVotes(res.data.votes);
    } catch (error) {
      console.error("Error upvoting card:", error);
    }
  };
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className={`card ${pinned ? "pinned-card" : "card"}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={gif} alt="GIF" />
      <div className="card-btns">
        <button onClick={() => onPin(card.id)}>
          {card.pinned ? "📌 Unpin" : "📍 Pin"}
        </button>
        <button className="upvote-button" onClick={handleUpvote}>
          Upvote: {votes}
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
        <button onClick={() => setShowComment(true)}>Comments</button>
      </div>
      {showComment && (
        <Comment card={card} onClose={() => setShowComment(false)} />
      )}
    </div>
  );
};
export default Card;
