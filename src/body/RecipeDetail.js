import React from "react";
import { useParams } from "react-router-dom";
import RecipesData from "../Lists/ListData.json";

const RecipeDetail = () => {
  let { id } = useParams();
  const recipe = RecipesData[id];

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-detail">
      <img src={process.env.PUBLIC_URL + recipe.image} alt={recipe.text} />
      <h2>{recipe.text}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
