const Card = ({ card, onDelete }) => {
  const { id, title, description, gif } = card;

  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={gif} alt="GIF" />
      <button className="upvote-button">Upvote</button>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Card;
