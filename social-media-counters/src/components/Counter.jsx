import { useState, useEffect } from "react";
import "../styles/Counter.css";

const Counter = ({ icon, target, label }) => {
  const [count, setCount] = useState(0);

  // Actualizar el contador
  useEffect(() => {
    const totalTime = 5000; // 5 segundos en milisegundos
    const steps = 200; // Número de pasos para suavizar la animación
    const increment = target / steps; // Incremento por paso
    const intervalTime = totalTime / steps; // Tiempo entre cada paso

    let interval = null;

    if (count < target) {
      interval = setInterval(() => {
        setCount((prevCount) => {
          const newCount = Math.ceil(prevCount + increment);
          return newCount > target ? target : newCount; // Evitar exceder el objetivo
        });
      }, intervalTime);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [count, target]);

  return (
    <div className="counter-container">
      <i className={`${icon} fa-3x`}></i>
      <div className="counter">{count}</div>
      <span>{label}</span>
    </div>
  );
};

export default Counter;
