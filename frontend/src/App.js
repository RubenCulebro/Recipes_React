import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewRecipes from "./ViewRecipes.js";
import AddRecipe from "./AddRecipe.js";
import NavBar from "./NavBar.js";

function App() {
  const [recipesCollection, setRecipesCollection] = useState([]);

useEffect(() => {
    fetch("/recipes.json")
        .then((res) => res.json())
        .then((data) => setRecipesCollection(data))
        .catch((err) => console.error("Error loading recipes:", err));
}, []);

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<ViewRecipes />} />
                <Route path="/add_recipe" element={<AddRecipe />} />
            </Routes>
        </Router>
    );
}

export default App;