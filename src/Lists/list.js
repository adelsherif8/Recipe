import React, { useState, useEffect } from "react";
import data from "./ListData.json";
import "../Lists/lists.css";

function List(props) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  const filteredRecipes = recipes.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.text.toLowerCase().includes(props.input);
    }
  });

  return props.input !== "" ? (
    <div className="listRecipe">
      <ul>
        {filteredRecipes.map((item) => (
          <li className="SearchFull" key={item.id}>
            <img
              src={process.env.PUBLIC_URL + "/img" + item.image}
              alt={item.text}
            />
            <div class="SearchDisc">
              <p class="SearchHeading">{item.text}</p>
              <text className="SearchInst">
                {item.instructions.slice(0, 1)}...
              </text>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}

export default List;
