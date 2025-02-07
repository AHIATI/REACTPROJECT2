import React, { useState } from "react";
import './ImageSlider.css';
const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 4; 

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - imagesPerPage : prevIndex - imagesPerPage
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + imagesPerPage >= slides.length ? 0 : prevIndex + imagesPerPage
    );
  };

  return (
    <div className="slider">
      {/* Left Arrow */}
      <div className="arrow left" onClick={goToPrevious}>
        ❰
      </div>

      <div className="image-container">
        {slides.slice(currentIndex, currentIndex + imagesPerPage).map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} className="slide-image" />
        ))}
      </div>

      <div className="arrow right" onClick={goToNext}>
        ❱
      </div>
    </div>
  );
};

export default ImageSlider;
