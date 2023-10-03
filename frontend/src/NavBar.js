import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <h1>Recipes Collection</h1>
      <div>
        <Link to="/">Recipes</Link>
        <span> | </span>
        <Link to="/add_recipe">Add Recipe</Link>
      </div>
    </div>
  );
}

export default NavBar;
