import React, { useState, useRef } from "react";

function Caroussel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carousselImageRef = useRef(null);

  const imageSize = () => {
    const carousselImage = carousselImageRef.current;

    if (!carousselImage) {
      return 0;
    }

    return carousselImage.width;
  };

  function previousImage() {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  }

  function nextImage() {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  }

  if (images.length === 1) {
    return (
      <div className="caroussel">
        <img className="caroussel-image" src={images[0]} alt="Logement" />
      </div>
    );
  }

  return (
    <div className="caroussel">
      <div
        className="caroussel-container"
        style={{
          transform: `translateX(-${currentImageIndex * imageSize()}px)`,
        }}>
        {images.map((image, index) => (
          <img
            className="caroussel-image"
            src={image}
            key={index}
            alt="Logement"
            ref={carousselImageRef}
          />
        ))}
      </div>
      <div className="caroussel-navigation">
        <button className="caroussel-button" onClick={previousImage}>
          &lt;
        </button>
        <span className="caroussel-counter">{`${currentImageIndex + 1} / ${
          images.length
        }`}</span>
        <button className="caroussel-button" onClick={nextImage}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Caroussel;
