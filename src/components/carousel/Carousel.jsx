import { useState } from "react";

import "./Carousel.scss";

const Carousel = ({ logement }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    let newIndex = index + 1;
    if (newIndex > logement.pictures.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };

  const previousImage = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = logement.pictures.length - 1;
    }
    setIndex(newIndex);
  };
  return (
    <div className="carouselImageContainer">
      <img className="carouselImage" src={logement.pictures[index]} />
      {logement.pictures.length > 1 && (
        <>
          <div className="carouselCounter">
            {index + 1}/{logement.pictures.length}
          </div>
          <i
            className="fa-solid fa-chevron-left carouselPreviousButton "
            onClick={previousImage}
          ></i>
          <i
            className="fa-solid fa-chevron-right carouselNextButton"
            onClick={nextImage}
          ></i>
        </>
      )}
    </div>
  );
};

export default Carousel;
