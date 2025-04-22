import { useState, useEffect } from "react";
import "../styles/ImageNavigator.css";

const getRandomImageUrl = () => {
  const width = 1200; // Ancho de la imagen
  const height = 800; // Alto de la imagen
  return `https://picsum.photos/${width}/${height}?random=${Math.random()}`;
};

const ImageNavigator = () => {
  const [images, setImages] = useState([getRandomImageUrl()]); // Lista de imágenes
  const [currentIndex, setCurrentIndex] = useState(0); // Índice de la imagen actual

  // Establecer la imagen de fondo del body
  useEffect(() => {
    document.body.style.backgroundImage = `url(${images[currentIndex]})`;
    return () => {
      document.body.style.backgroundImage = '';
    };
  }, [currentIndex, images]);

  // Cargar la siguiente imagen
  const handleNext = () => {
    const newImage = getRandomImageUrl();
    setImages((prevImages) => [...prevImages, newImage]);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Retroceder a la imagen anterior
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="image-navigator">
      <div className="image-container">
        <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
      </div>

      <div className="controls">
        <button
          className="nav-button prev-button"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="nav-button next-button" onClick={handleNext}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ImageNavigator;
