import React, { useState } from "react";

function AddRecipe(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("");
  const [directions, setDirections] = useState("");

  return (
    <div className="add-recipe-container">
      <h2>Add Recipe</h2>
      <form
        method="post"
        action="/api/addRecipe"
        encType="multipart/form-data"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />

        <label htmlFor="ingredients">Ingredients</label>
        <input
          type="text"
          id="ingredients"
          name="ingredients"
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
          required
        />

        <label htmlFor="image">Image URL</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={(event) => setImage(event.target.value)}
          required
        />

        <label htmlFor="directions">Directions</label>
        <input
          type="text"
          id="directions"
          name="directions"
          value={directions}
          onChange={(event) => setDirections(event.target.value)}
          required
        />

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;