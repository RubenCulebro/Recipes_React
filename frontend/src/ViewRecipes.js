import React from "react";
import { Link } from "react-router-dom";

function ViewRecipes(props) {
  if (!props.recipes || props.recipes.length === 0) {
    return <div>No recipes available.</div>;
  }

  return (
    <div>
      {props.recipes.map((recipe) => {
        const imageUrl = `/images/${recipe.image}`;
        return (
          <div key={recipe.id} id={recipe.id}>
            <img src={imageUrl} alt={recipe.name}/>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.directions}</p>
            <button onClick={() => props.onRemoveRecipe(recipe)}>Remove</button>
          </div>
        );
      })}
      <Link to="/add_recipe">Add Recipe</Link>
    </div>
  );
}

export default ViewRecipes;