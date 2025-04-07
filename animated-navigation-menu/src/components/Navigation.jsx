import { useState } from "react";
import "../styles/Navigation.css";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  // Manejar el evento de alternancia
  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <nav className={`nav ${isActive ? "active" : ""}`}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Works</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button className="icon" onClick={handleToggle}>
        <div className="line line1"></div>
        <div className="line line2"></div>
      </button>
    </nav>
  );
};

export default Navigation;
