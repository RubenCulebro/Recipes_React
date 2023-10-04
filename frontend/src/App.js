import { useEffect, useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewRecipes from "./ViewRecipes.js";
import AddRecipe from "./AddRecipe.js";
import NavBar from "./NavBar.js";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [recipesCollection, setRecipesCollection] = useState([]);

  useEffect(() => {
    fetch("/api/recipesData")
      .then((res) => res.json())
      .then(setRecipesCollection)
      .catch((err) => console.log(err));
  }, []);

  const removeRecipe = (recipeToRemove) => {
    fetch(`/api/deleteRecipe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ _id: recipeToRemove._id })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert(data.message);
        
        const updatedRecipes = recipesCollection.filter(recipe => recipe._id !== recipeToRemove._id);
        setRecipesCollection(updatedRecipes);
      } else {
        console.error("Error removing recipe:", data.message);
        alert(data.message);
      }
    })
    .catch(err => {
      console.error("Error sending delete request:", err);
      alert("Error occurred while trying to delete the recipe.");
    });
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
          element={<AddRecipe recipes={recipesCollection} />}
        />
      </Routes>
    </Router>
  );
}

export default App;