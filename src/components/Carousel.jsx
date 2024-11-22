import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const images = [
  "/bg0.jpg",
  "/bg1.jpg",
  "/bg2.jpg",
  "/bg3.jpg",
  "/bg4.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setTimeout(goToNext, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-72 lg:w-2/3 sm:h-96 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
      {/* Left Arrow */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-2 sm:left-4">
        <button
          onClick={goToPrevious}
          className="bg-gray-700 text-white rounded-full p-3 sm:p-4"
        >
          &#9664;
        </button>
      </div>
      {/* Right Arrow */}
      <div className="absolute top-1/2 transform -translate-y-1/2 right-2 sm:right-4">
        <button
          onClick={goToNext}
          className="bg-gray-700 text-white rounded-full p-3 sm:p-4"
        >
          &#9654;
        </button>
      </div>
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentIndex === index ? "bg-blue-500 scale-110" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
