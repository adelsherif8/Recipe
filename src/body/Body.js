import React, { useState } from "react";
import "./body.css";
import Breakfast1 from "./Meals/Breakfast1";
import Breakfast2 from "./Meals/Breakfast2";
import Meal1 from "./Meals/Meal1";
import Meal2 from "./Meals/Meal2";
import Lunch1 from "./Meals/Lunch1";
import Lunch2 from "./Meals/Lunch2";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("meal");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="FullBody">
      <div className="category-container">
        <div
          className={`category ${
            selectedCategory === "breakfast" ? "selected" : ""
          }`}
          onClick={() => handleCategoryClick("breakfast")}
        >
          <h2>Breakfast</h2>
        </div>
        <div
          className={`category ${
            selectedCategory === "meal" ? "selected" : ""
          }`}
          onClick={() => handleCategoryClick("meal")}
        >
          <h2>Meal</h2>
        </div>
        <div
          className={`category ${
            selectedCategory === "Lunch" ? "selected" : ""
          }`}
          onClick={() => handleCategoryClick("Lunch")}
        >
          <h2>Lunch</h2>
        </div>
      </div>
      {selectedCategory && (
        <div className="card">
          <div className="option">
            <h3>
              {selectedCategory === "breakfast" ? (
                <Breakfast1 />
              ) : selectedCategory === "Lunch" ? (
                <Lunch1 />
              ) : (
                <Meal1 />
              )}
            </h3>
          </div>
          <div className="option">
            <h3>
              {selectedCategory === "breakfast" ? (
                <Breakfast2 />
              ) : selectedCategory === "Lunch" ? (
                <Lunch2 />
              ) : (
                <Meal2 />
              )}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
