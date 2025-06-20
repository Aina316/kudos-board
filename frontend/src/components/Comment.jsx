import { useState, useEffect } from "react";
import "../style/Comment.css";
import "../App.css";

const Comment = ({ card, onClose }) => {
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch(`https://kudos-board-4f8j.onrender.com/comments/card/${card.id}`)
      .then((res) => res.json())
      .then(setComments);
  }, [card]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    await fetch(
      `https://kudos-board-4f8j.onrender.com/comments/card/${card.id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, author }),
      }
    );

    setMessage("");
    setAuthor("");
    const updated = await fetch(
      `https://kudos-board-4f8j.onrender.com/comments/card/${card.id}`
    );
    setComments(await updated.json());
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        <img src={card.gif} alt={card.title} style={{ maxWidth: "100%" }} />

        <h3>Comments</h3>
        <ul>
          {comments.map((c) => (
            <li key={c.id}>
              <strong>{c.author || "Anonymous"}:</strong> {c.message}
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Write a comment..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <input
            placeholder="Your name (optional)"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </div>
  );
};

export default Comment;
