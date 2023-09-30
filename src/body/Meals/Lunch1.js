import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide1 from "../Recipes/ChickenSalad.jpg";
import slide2 from "../Recipes/QuinoaSalad.jpg";
import slide3 from "../Recipes/VeggieWrap.jpg";
import "./carousel.css";
import { Link } from "react-router-dom";

const Lunch1 = () => {
  const slides = [
    { image: slide1, caption: "Chicken Salad" },
    { image: slide2, caption: "Quinoa Salad" },
    { image: slide3, caption: "Veggie Wrap" },
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
          <Link to={`/image/Meal/${index + 6}`} key={index}>
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

export default Lunch1;
