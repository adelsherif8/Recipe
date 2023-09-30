import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide1 from "../Recipes/GreekYogurtParfait.jpg";
import slide2 from "../Recipes/EggandCheeseBreakfastQuesadilla.jpg";
import slide3 from "../Recipes/FruitSmoothieBowl.jpg";
import "./carousel.css";
import { Link } from "react-router-dom";

const Breakfast2 = () => {
  const slides = [
    { image: slide1, caption: "Greek Yogurt Parfait" },
    { image: slide2, caption: "Egg and Cheese Breakfast Quesadilla" },
    { image: slide3, caption: "Fruit Smoothie Bowl" },
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
          <Link to={`/image/breakfast/${index + 3}`} key={index}>
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

export default Breakfast2;
