import { useRef, useEffect, useState } from "react";
import "../styles/Box.css";

const Box = ({ content }) => {
  const boxRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkBoxes = () => {
      const triggerBotton = (window.innerHeight / 5) * 4;
      const boxTop = boxRef.current.getBoundingClientRect().top;
      if (boxTop < triggerBotton) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", checkBoxes);
    checkBoxes();

    return () => window.removeEventListener("scroll", checkBoxes);
  }, []);

  return (
    <div ref={boxRef} className={`box ${show ? "show" : ""}`}>
      <h2>{content}</h2>
    </div>
  );
};

export default Box;
