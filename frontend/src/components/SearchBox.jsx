const SearchBox = () => {
  <div className="search-box">
    <div className="input-form">
      <input
        type="text"
        placeholder="Search Boards..."
        className="search-bar"
      />
    </div>
    <div>
      <button>Search</button>
      <button>Clear</button>
    </div>
    <div className="tags">
      <button>All</button>
      <button>Recent</button>
      <button>Celebration</button>
      <button>Thank you</button>
      <button>inspiration</button>
    </div>
  </div>;
};
export default SearchBox;
