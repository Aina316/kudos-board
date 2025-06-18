import "../App.css";

const SearchBox = () => {
  return (
    <div className="search-filter">
      <div className="search-box">
        <div className="input-form">
          <input
            type="text"
            placeholder="Search Boards..."
            className="search-bar"
          />
        </div>
        <div className="search-box-button">
          <button>Search</button>
          <button>Clear</button>
        </div>
      </div>
      <div className="tags">
        <button>All</button>
        <button>Recent</button>
        <button>Celebration</button>
        <button>Thank you</button>
        <button>Inspiration</button>
      </div>
    </div>
  );
};
export default SearchBox;
