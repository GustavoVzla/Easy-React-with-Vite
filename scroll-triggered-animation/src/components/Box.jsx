import { useRef, useEffect, useState } from "react";
import "../styles/Box.css";

const Box = ({ content }) => {
  const boxRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkBoxes = () => {
      // Usar una proporción más adecuada para móviles
      const triggerBottom = window.innerHeight * 0.8;
      
      if (boxRef.current) {
        const boxTop = boxRef.current.getBoundingClientRect().top;
        
        if (boxTop < triggerBottom) {
          setShow(true);
        } else {
          setShow(false);
        }
      }
    };

    // Usar passive: true para mejorar el rendimiento en móviles
    window.addEventListener("scroll", checkBoxes, { passive: true });
    
    // Verificar también al cambiar el tamaño de la ventana
    window.addEventListener("resize", checkBoxes, { passive: true });
    
    // Verificar al cargar para elementos ya visibles
    checkBoxes();

    return () => {
      window.removeEventListener("scroll", checkBoxes);
      window.removeEventListener("resize", checkBoxes);
    };
  }, []);

  return (
    <div ref={boxRef} className={`box ${show ? "show" : ""}`}>
      <h2>{content}</h2>
    </div>
  );
};

export default Box;
