import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { getPopularMovies, searchMovies } from "./services/apiService";
import "./styles/App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Load initial movies
  useEffect(() => {
    loadPopularMovies();
  }, []);

  // Function to load popular movies
  const loadPopularMovies = async () => {
    const popularMovies = await getPopularMovies();
    setMovies(popularMovies);
    setIsSearching(false);
    setSearchTerm(""); // Clear search term when returning to popular movies
  };

  // Handle search
  const handleSearch = async (query) => {
    setSearchTerm(query);
    
    if (query) {
      setIsSearching(true);
      const searchResults = await searchMovies(query);
      setMovies(searchResults);
    } else {
      // Instead of reloading the page, we load popular movies
      loadPopularMovies();
    }
  };

  return (
    <div className="app">
      <header>
        <SearchBar onSearch={handleSearch} initialValue={searchTerm} />
      </header>
      <main>
        <div className="results-header">
          <h2>{isSearching ? `Results for: "${searchTerm}"` : "Popular Movies"}</h2>
          {isSearching && (
            <button className="back-button" onClick={loadPopularMovies}>
              Back to Popular Movies
            </button>
          )}
        </div>
        <MovieList movies={movies} />
      </main>
    </div>
  );
};

export default App;
