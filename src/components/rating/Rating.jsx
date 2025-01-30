import React, { useEffect, useState } from "react";
import "./rating.scss";

const Rating = ({ rating }) => {
  const [stars, setStars] = useState([]);
  useEffect(() => {
    let starsArray = [];
    for (let i = 0; i < 5; i++) {
      if (rating > i) {
        starsArray.push("active");
      } else {
        starsArray.push("inactive");
      }
    }
    setStars(starsArray);
  }, []);
  return (
      <div>
        {stars.map((star, index) =>
          star === "active" ? (
            <i key={index} className="fa-solid fa-star fullStar"></i>
          ) : (
            <i  key={index} className="fa-solid fa-star emptyStar"></i>
          )
        )}
      </div>
  );
};

export default Rating;
