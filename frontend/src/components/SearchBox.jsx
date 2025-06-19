import "../App.css";
const SearchBox = ({
  setFilter,
  setSearchInput,
  inputValue,
  setInputValue,
}) => {
  const handleFilter = (type, category = "") => {
    setFilter({ type, category });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchInput(inputValue);

    setFilter({ type: "search" });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClear = () => {
    setInputValue("");
    setSearchInput("");
    setFilter({ type: "all" });
  };

  return (
    <div className="search-filter">
      <div className="search-box">
        <div className="input-form">
          <input
            type="text"
            placeholder="Search Boards..."
            className="search-bar"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <div className="search-box-button">
            <button onClick={handleSearch}>Search</button>
            <button onClick={handleClear}>Clear</button>
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
          Thank You
        </button>
        <button onClick={() => handleFilter("category", "Inspiration")}>
          Inspiration
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
