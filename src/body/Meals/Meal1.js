import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide1 from "../Recipes/SpaghettiBolognese.jpg";
import slide2 from "../Recipes/GrilledSalmon.jpg";
import slide3 from "../Recipes/ChickenStirFry.jpg";
import "./carousel.css";
import { Link } from "react-router-dom";

const Meal1 = () => {
  const slides = [
    { image: slide1, caption: "Spaghetti Bolognese" },
    { image: slide2, caption: "Grilled Salmon" },
    { image: slide3, caption: "Chicken Stir Fry" },
  ];
  const slideProperties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="slide-container1">
      <Slide {...slideProperties}>
        {slides.map((slide, index) => (
          <Link to={`/image/Meal/${index + 12}`} key={index}>
            <div className="each-slide" key={index}>
              <div
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 500,
                  height: "300px",
                  width: "500px",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <span>{slide.caption}</span>
              </div>
            </div>
          </Link>
        ))}
      </Slide>
    </div>
  );
};

export default Meal1;
