import { useState, useEffect } from "react";
import "../styles/WaterTracker.css";

const WaterTracker = () => {
  const [fullCups, setFullCups] = useState(0);
  const totalCups = 8;
  const smallCupSize = 0.25; // Litros
  const goalLiters = 2; // Litros

  useEffect(() => {
    // Inicializar el estado desde localStorage si existe
    const savedCups = localStorage.getItem("fullCups");
    if (savedCups !== null) {
      setFullCups(parseInt(savedCups));
    }
  }, []);

  useEffect(() => {
    // Guardar el estado en localStorage
    localStorage.setItem("fullCups", fullCups);
  }, [fullCups]);

  const handleCupClick = (idx) => {
    // Si el vaso clickeado ya está lleno y el siguiente está vacío, vaciar el actual
    if (idx === fullCups - 1 && idx === fullCups - 1) {
      setFullCups(fullCups - 1);
    } 
    // Si el vaso clickeado está lleno y no es el último lleno, llenar hasta ese vaso
    else if (idx < fullCups) {
      setFullCups(idx + 1);
    } 
    // Si el vaso clickeado está vacío, llenar hasta ese vaso
    else {
      setFullCups(idx + 1);
    }
  };

  // Función para resetear el contador
  const resetTracker = () => {
    setFullCups(0);
    localStorage.removeItem("fullCups");
  };

  // Calcular el porcentaje de llenado
  const percentage = Math.round((fullCups / totalCups) * 100);
  
  // Calcular litros restantes con precisión
  const remainedLiters = goalLiters - (fullCups * smallCupSize);
  
  // Calcular altura del porcentaje
  const percentageHeight = percentage === 0 ? 0 : `${percentage}%`;
  
  // Calcular altura del remained
  const remainedHeight = percentage === 100 ? 0 : `${100 - percentage}%`;

  return (
    <>
      <h1>Water Tracker</h1>
      <h3>Goal: {goalLiters} Liters</h3>

      <div className="cup">
        {percentage < 100 && (
          <div className="remained" style={{ height: remainedHeight }}>
            <span>{remainedLiters.toFixed(2)}L</span>
            <small>Remained</small>
          </div>
        )}
        
        {percentage > 0 && (
          <div 
            className="percentage" 
            style={{ height: percentageHeight }}
          >
            {percentage}%
          </div>
        )}
      </div>

      <p className="text">Select how many glasses of water you've drunk</p>
      
      <div className="cups">
        {Array.from({ length: totalCups }).map((_, idx) => (
          <div
            key={idx}
            className={`cup cup-small ${idx < fullCups ? "full" : ""}`}
            onClick={() => handleCupClick(idx)}
          >
            {smallCupSize * 1000}ml
          </div>
        ))}
      </div>
      
      <button className="reset-button" onClick={resetTracker}>
        Reset Tracker
      </button>
    </>
  );
};

export default WaterTracker;
