import React, { useState } from "react";

function AddRecipe(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("");
  const [directions, setDirections] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      name: name,
      description: description,
      ingredients: ingredients,
      image: image,
      directions: directions
    };
    props.onAddRecipe(newRecipe);
    

    setName("");
    setDescription("");
    setIngredients("");
    setImage("");
    setDirections("");
  };

  return (
    <div className="add-recipe-container">
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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

        <label htmlFor="image">Image Filename</label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          placeholder="e.g. image.jpg"
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