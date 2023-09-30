import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../Lists/ListData.json";
import "./lists.css";

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
            <Link to={`/recipe/${item.id}`}>
              {" "}
              <img
                src={process.env.PUBLIC_URL + "/img" + item.image}
                alt={item.text}
              />
              <div className="SearchDisc">
                <p className="SearchHeading">{item.text}</p>
                <div className="SearchInst">
                  {item.instructions.slice(0, 1)}...
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}

export default List;
