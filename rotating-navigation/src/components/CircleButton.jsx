import "../styles/CircleButton.css";

const CircleButton = ({ toggleNav, showNav }) => {
  return (
    <div className="circle-container">
      <div className="circle">
        <button
          className={showNav ? "active" : ""}
          id="close"
          title="Close"
          onClick={toggleNav}
        >
          <i className="fas fa-times"></i>
        </button>
        <button
          className={!showNav ? "active" : ""}
          id="open"
          title="Open"
          onClick={toggleNav}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

export default CircleButton;
