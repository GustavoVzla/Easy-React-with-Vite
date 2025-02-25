import { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const [isActive, setIsAvtive] = useState(false);

  const toggleSearch = () => {
    setIsAvtive(!isActive);
  };
  return (
    <div className={`search ${isActive ? "active" : ""}`}>
      <input
        type="text"
        className="input"
        placeholder="Search..."
        onFocus={() => setIsAvtive(true)}
        onBlur={() => setIsAvtive(false)}
      />
      <button className="btn" onClick={toggleSearch}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};
export default SearchBar;
