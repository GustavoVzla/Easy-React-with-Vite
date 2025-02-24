import { useEffect, useState } from "react";
import "../styles/BlurryLoading.css";

const BlurryLoading = () => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad((prevLoad) => {
        if (prevLoad >= 100) {
          clearInterval(interval);
          return prevLoad;
        }
        return prevLoad + 1;
      });
    }, 30);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  const opacity = scale(load, 0, 100, 1, 0);
  const blur = scale(load, 0, 100, 30, 0);

  return (
    <>
      <section className="bg" style={{ filter: `blur(${blur}px)` }}></section>
      <div className="loading-text" style={{ opacity }}>
        {`${load}%`}
      </div>
    </>
  );
};

export default BlurryLoading;
