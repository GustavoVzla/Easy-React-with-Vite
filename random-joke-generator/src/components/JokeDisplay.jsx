import { useState, useEffect } from "react";
import { fetchJoke } from "../services/apiService";
import "../styles/JokeDisplay.css";

const JokeDisplay = () => {
  const [joke, setJoke] = useState("");

  // Función para obtener un nuevo chiste
  const handleGetJoke = async () => {
    const newJoke = await fetchJoke();
    setJoke(newJoke);
  };

  // Cargar un chiste inicial cuando el componente se monta
  useEffect(() => {
    handleGetJoke(); // Llama a la función para obtener un chiste
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  return (
    <div className="container">
      <h3>Don't Laugh Challenge</h3>
      <div className="joke">{joke}</div>
      <button className="btn" onClick={handleGetJoke}>
        Get Another Joke
      </button>
    </div>
  );
};

export default JokeDisplay;
