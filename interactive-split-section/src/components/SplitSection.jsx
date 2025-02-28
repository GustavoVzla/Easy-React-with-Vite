import { useState } from "react";
import "../styles/SplitSection.css";

const SplitSection = () => {
  const [hoverState, setHoverState] = useState("");

  const handleMuoseEnter = (side) => {
    setHoverState(side);
  };

  const handleMouseLeave = () => {
    setHoverState("");
  };

  return (
    <div className={`container ${hoverState}`}>
      <div
        className="split left"
        onMouseEnter={() => handleMuoseEnter("hover-left")}
        onMouseLeave={handleMouseLeave}
      >
        <h1>Playstation 5</h1>
        <a href="#" className="btn">
          Buy Now
        </a>
      </div>
      <div
        className="split right"
        onMouseEnter={() => handleMuoseEnter("hover-right")}
        onMouseLeave={handleMouseLeave}
      >
        <h1>Xbox Series X</h1>
        <a href="#" className="btn">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default SplitSection;
