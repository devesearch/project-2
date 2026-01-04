import { useState } from "react";
import "../styles/carousel.css";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="carousel animate-fade-up">
      {/* Slides */}
      <div className="carousel-slides">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === current ? "active" : ""
            }`}
          >
            <img src={img} alt={`slide-${index}`} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>

      {/* Pagination dots */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
