import "../App.css";
const SearchBox = ({ setFilter }) => {
  const handleFilter = (type, category = "") => {
    setFilter({ type, category });
  };

  return (
    <div className="search-filter">
      <div className="search-box">
        <div className="input-form">
          <input
            type="text"
            placeholder="Search Boards..."
            className="search-bar"
            // Future: onChange to support keyword search
          />
          <div className="search-box-button">
            <button>Search</button>
            <button onClick={() => handleFilter("all")}>Clear</button>
          </div>
        </div>
      </div>

      <div className="tags">
        <button onClick={() => handleFilter("all")}>All</button>
        <button onClick={() => handleFilter("recent")}>Recent</button>
        <button onClick={() => handleFilter("category", "Celebration")}>
          Celebration
        </button>
        <button onClick={() => handleFilter("category", "Thank You")}>
          Thank you
        </button>
        <button onClick={() => handleFilter("category", "Inspiration")}>
          Inspiration
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
