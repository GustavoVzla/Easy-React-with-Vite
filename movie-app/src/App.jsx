import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { getPopularMovies, searchMovies } from "./services/apiService";
import "./styles/App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Cargar películas iniciales
  useEffect(() => {
    loadPopularMovies(1, true);
  }, []);

  // Función para cargar películas populares
  const loadPopularMovies = async (page = 1, reset = false) => {
    setIsLoading(true);
    const popularMovies = await getPopularMovies(page);
    
    if (reset) {
      setMovies(popularMovies);
    } else {
      setMovies(prevMovies => [...prevMovies, ...popularMovies]);
    }
    
    setCurrentPage(page);
    setIsSearching(false);
    setSearchTerm("");
    setIsLoading(false);
  };

  // Manejar la búsqueda
  const handleSearch = async (query) => {
    setSearchTerm(query);
    
    if (query) {
      setIsLoading(true);
      setIsSearching(true);
      const searchResults = await searchMovies(query, 1);
      setMovies(searchResults);
      setCurrentPage(1);
      setIsLoading(false);
    } else {
      // En lugar de recargar la página, volvemos a cargar las películas populares
      loadPopularMovies(1, true);
    }
  };

  // Cargar más películas
  const loadMoreMovies = async () => {
    const nextPage = currentPage + 1;
    
    if (isSearching) {
      setIsLoading(true);
      const moreResults = await searchMovies(searchTerm, nextPage);
      setMovies(prevMovies => [...prevMovies, ...moreResults]);
      setCurrentPage(nextPage);
      setIsLoading(false);
    } else {
      loadPopularMovies(nextPage, false);
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
            <button className="back-button" onClick={() => loadPopularMovies(1, true)}>
              Back to Popular Movies
            </button>
          )}
        </div>
        <MovieList movies={movies} />
        
        {movies.length > 0 && (
          <div className="load-more-container">
            <button 
              className="load-more-button" 
              onClick={loadMoreMovies}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Load More Movies"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
