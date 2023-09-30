import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide1 from "../Recipes/VegetarianChili.jpg";
import slide2 from "../Recipes/VegetableStirFry.jpg";
import slide3 from "../Recipes/BeefStew.jpg";
import "./carousel.css";
import { Link } from "react-router-dom";

const Meal2 = () => {
  const slides = [
    { image: slide1, caption: "Vegetarian Chili" },
    { image: slide2, caption: "Vegetable Stir Fry" },
    { image: slide3, caption: "Beef Stew" },
  ];
  const slideProperties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="slide-container2">
      <Slide {...slideProperties}>
        {slides.map((slide, index) => (
          <Link to={`/image/Meal/${index + 15}`} key={index}>
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

export default Meal2;
