import React from "react";
import { Link } from "react-router-dom";
import { CardGroup, Card, Button } from "react-bootstrap";

function ViewRecipes(props) {
  if (!props.recipes || props.recipes.length === 0) {
    return <div>No recipes available.</div>;
  }

  return (
    <div className="d-flex">
      <CardGroup>
        {props.recipes.map((recipe) => {
          const imageUrl = `/images/${recipe.image}`;
          return (
            <Card key={recipe._id} id={recipe._id}>
              <Card.Img
                variant="top"
                src={imageUrl}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>{recipe.description}</Card.Text>
                <Card.Text>{recipe.ingredients}</Card.Text>
                <Card.Text>{recipe.directions}</Card.Text>
                <Button onClick={() => props.onRemoveRecipe(recipe)}>Remove</Button>
              </Card.Body>
            </Card>
          );
        })}
      </CardGroup>
      <Link to="/add_recipe">Add Recipe</Link>
    </div>
  );
}

export default ViewRecipes;