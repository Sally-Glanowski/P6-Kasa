import React, { useState, useRef } from "react";

function Caroussel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carrouselImageRef = useRef(null);

  const imageSize = () => {
    const carrouselImage = carrouselImageRef.current;

    if (!carrouselImage) return 0;
    return carrouselImage.width;
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

  const singleImage = images.length === 1;

  return (
    <div className="carrousel">
      <div
        className="carrousel-container"
        style={{ transform: `translateX(-${currentImageIndex * imageSize()}px)` }}
      >
        {images.map((image, index) => (
          <img
            className="carrousel-image"
            src={image}
            key={index}
            alt="Logement"
            ref={carrouselImageRef}
          />
        ))}
      </div>
      <div className="carrousel-navigation">
        {!singleImage && (
          <button className="carrousel-button" onClick={previousImage}>
            &lt;
          </button>
        )}
        <span className="carrousel-counter">
          {`${currentImageIndex + 1} / ${images.length}`}
        </span>
        {!singleImage && (
          <button className="carrousel-button" onClick={nextImage}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
}

export default Caroussel;
