import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="banner">
        <img src="/src/assets/images/kudoboard_logo.jpg" alt="Kudoboard Logo" />
      </header>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Boards..."
          className="search-bar"
        />
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
      <div>
        <button>Create New Board</button>
      </div>
    </div>
  );
}
export default App;
