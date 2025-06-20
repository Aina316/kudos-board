import { useState } from "react";
import axios from "axios";

const Card = ({ card, onDelete }) => {
  const { id, title, description, gif, votes: defaultVotes } = card;
  const [votes, setVotes] = useState(defaultVotes || 0);

  const handleUpvote = async () => {
    try {
      const res = await axios.patch(`http://localhost:3000/cards/${id}/votes`);

      setVotes(res.data.votes);
    } catch (error) {
      console.error("Error upvoting card:", error);
    }
  };
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={gif} alt="GIF" />
      <button className="upvote-button" onClick={handleUpvote}>
        Upvote: {votes}
      </button>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Card;
