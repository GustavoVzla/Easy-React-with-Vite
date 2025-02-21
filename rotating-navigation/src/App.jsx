import { useState } from "react";
import CircleButton from "./components/CircleButton";
import Content from "./components/Content";
import Navigation from "./components/Navigation";
import "./styles/App.css";

const App = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className={`container ${showNav ? "show-nav" : ""}`}>
        <CircleButton toggleNav={toggleNav} showNav={showNav} />
        <Content />
      </div>
      <Navigation />
    </>
  );
};

export default App;
