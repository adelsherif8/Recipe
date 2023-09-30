import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide1 from "../Recipes/MushroomRisotto.jpg";
import slide2 from "../Recipes/ChickpeaSalad.jpg";
import slide3 from "../Recipes/CapreseSalad.jpg";
import "./carousel.css";
import { Link } from "react-router-dom";

const Lunch2 = () => {
  const slides = [
    { image: slide1, caption: "Mushroom Risotto" },
    { image: slide2, caption: "Chick pea Salad" },
    { image: slide3, caption: "Caprese Salad" },
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
          <Link to={`/image/Meal/${index + 9}`} key={index}>
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

export default Lunch2;
