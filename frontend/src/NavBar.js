import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Recipes Collection</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Link to="/">Recipes</Link>
        <span style={{width: "20px"}}></span>
          <Link to="/add_recipe">Add Recipe</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;