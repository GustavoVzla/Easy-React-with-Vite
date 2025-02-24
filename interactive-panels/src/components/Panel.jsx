import "../styles/Panel.css";

const Panel = ({ title, background, isActive, onClick }) => {
  return (
    <div
      className={`panel ${isActive ? "active" : ""}`}
      style={{ backgroundImage: `url(${background})` }}
      onClick={onClick}
    >
      <h2>{title}</h2>
    </div>
  );
};

export default Panel;
