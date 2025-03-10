import { useState, useEffect } from "react";
import KeyInfo from "./components/KeyInfo";
import "./styles/App.css";

// Función para generar un color aleatorio
const getRandomColor = () => {
  // Generamos colores más oscuros para que el texto blanco sea legible
  const r = Math.floor(Math.random() * 150);
  const g = Math.floor(Math.random() * 150);
  const b = Math.floor(Math.random() * 150);
  return `rgb(${r}, ${g}, ${b})`;
};

const App = () => {
  const [keyData, setKeyData] = useState({
    key: "Press any key to get the keyCode",
    keyCode: "",
    code: "",
  });
  
  const [mouseData, setMouseData] = useState({
    type: "",
    x: "",
    y: "",
  });
  
  // Estado para controlar si se ha presionado una tecla o usado el mouse
  const [eventTriggered, setEventTriggered] = useState(false);
  const [eventType, setEventType] = useState("keyboard"); // "keyboard" o "mouse"
  
  // Estado para los colores
  const [colors, setColors] = useState({
    key: "#2b2b2b",
    keyCode: "#2b2b2b",
    code: "#2b2b2b",
    type: "#2b2b2b",
    x: "#2b2b2b",
    y: "#2b2b2b",
  });

  // Manejar el evento keydown
  const handleKeyDown = (event) => {
    const { key, keyCode, code } = event;
    setKeyData({
      key: key === " " ? "Space" : key,
      keyCode: keyCode,
      code: code,
    });
    setEventTriggered(true);
    setEventType("keyboard");
    
    // Generar nuevos colores aleatorios
    setColors({
      ...colors,
      key: getRandomColor(),
      keyCode: getRandomColor(),
      code: getRandomColor(),
    });
  };
  
  // Manejar eventos de mouse
  const handleMouseEvent = (event) => {
    // Ignorar clics en el botón de reset
    if (event.target.className === "reset-button") {
      return;
    }
    
    const { type, clientX, clientY } = event;
    setMouseData({
      type: type,
      x: clientX,
      y: clientY,
    });
    setEventTriggered(true);
    setEventType("mouse");
    
    // Generar nuevos colores aleatorios
    setColors({
      ...colors,
      type: getRandomColor(),
      x: getRandomColor(),
      y: getRandomColor(),
    });
  };
  
  // Función para reiniciar el estado
  const handleReset = (event) => {
    // Detener la propagación del evento para evitar que sea capturado por handleMouseEvent
    event.stopPropagation();
    
    setEventTriggered(false);
    setKeyData({
      key: "Press any key to get the keyCode",
      keyCode: "",
      code: "",
    });
    setMouseData({
      type: "",
      x: "",
      y: "",
    });
    
    // Restablecer colores
    setColors({
      key: "#2b2b2b",
      keyCode: "#2b2b2b",
      code: "#2b2b2b",
      type: "#2b2b2b",
      x: "#2b2b2b",
      y: "#2b2b2b",
    });
  };

  // Agregar eventos globales al montar el componente
  useEffect(() => {
    // Forzar el foco en la ventana del navegador
    window.focus();

    // Agregar listeners para eventos
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleMouseEvent);
    window.addEventListener("dblclick", handleMouseEvent);
    window.addEventListener("contextmenu", handleMouseEvent);

    // Limpiar eventos al desmontar el componente
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleMouseEvent);
      window.removeEventListener("dblclick", handleMouseEvent);
      window.removeEventListener("contextmenu", handleMouseEvent);
    };
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  return (
    <div className="container">
      <h1>Event Codes</h1>
      <div className="key-container">
        {!eventTriggered ? (
          <KeyInfo 
            label="" 
            value="Press any key or use mouse to get event info" 
          />
        ) : eventType === "keyboard" ? (
          <>
            <KeyInfo 
              label="event.key" 
              value={keyData.key} 
              backgroundColor={colors.key} 
            />
            <KeyInfo 
              label="event.keyCode" 
              value={keyData.keyCode} 
              backgroundColor={colors.keyCode} 
            />
            <KeyInfo 
              label="event.code" 
              value={keyData.code} 
              backgroundColor={colors.code} 
            />
          </>
        ) : (
          <>
            <KeyInfo 
              label="event.type" 
              value={mouseData.type} 
              backgroundColor={colors.type} 
            />
            <KeyInfo 
              label="event.clientX" 
              value={mouseData.x} 
              backgroundColor={colors.x} 
            />
            <KeyInfo 
              label="event.clientY" 
              value={mouseData.y} 
              backgroundColor={colors.y} 
            />
          </>
        )}
      </div>
      
      {eventTriggered && (
        <button 
          className="reset-button" 
          onClick={handleReset}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default App;
