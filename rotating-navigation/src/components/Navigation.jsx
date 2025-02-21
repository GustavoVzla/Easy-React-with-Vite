import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <i className="fas fa-home"></i>
          <a href="#">Home</a>
        </li>
        <li>
          <i className="fas fa-user-alt"></i>
          <a href="#">About</a>
        </li>
        <li>
          <i className="fas fa-envelope"></i>
          <a href="#">Contct</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
