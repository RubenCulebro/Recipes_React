import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewRecipes from "./ViewRecipes.js";
import AddRecipe from "./AddRecipe.js";
import NavBar from "./NavBar.js";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [recipesCollection, setRecipesCollection] = useState([]);

useEffect(() => {
    fetch("/recipes.json")
        .then((res) => res.json())
        .then((data) => setRecipesCollection(data))
        .catch((err) => console.error("Error loading recipes:", err));
}, []);

const addNewRecipe = (newRecipe) => {
  setRecipesCollection(prevRecipes => [...prevRecipes, newRecipe]);
};

const removeRecipe = (recipeToRemove) => {
  const updatedRecipes = recipesCollection.filter(recipe => recipe.id !== recipeToRemove.id);
  setRecipesCollection(updatedRecipes);
};

return (
  <Router>
    <NavBar />
    <Routes>
      <Route
        exact
        path="/"
        element={<ViewRecipes recipes={recipesCollection} onRemoveRecipe={removeRecipe} />}
      />
      <Route
        path="/add_recipe"
        element={<AddRecipe recipes={recipesCollection} onAddRecipe={addNewRecipe} />}
      />
    </Routes>
  </Router>
);
}

export default App;