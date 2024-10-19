import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import React from "react";

/**
 * Navigation Bar containing <Link> to home page, team page, and recipe pages.
 *
 */
function NavigationBar({ cookingMode }) {
  if (cookingMode) {
    return null;
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/ourteam" className="nav-link">
              Our Team
            </Link>
            <Link to="/groceries" className="nav-link">
              Grocery List
            </Link>
            <Link to="/recipeform" className="nav-link">
              Recipe Form
            </Link>
            <NavDropdown title="Top Recipes" id="basic-nav-dropdown">
              <Link to="/recipe1" className="dropdown-item">
                Recipe 1
              </Link>
              <Link to="/recipe2" className="dropdown-item">
                Recipe 2
              </Link>
              <Link to="/recipe3" className="dropdown-item">
                Recipe 3
              </Link>
              <Link to="/recipe4" className="dropdown-item">
                Recipe 4
              </Link>
              <Link to="/recipe5" className="dropdown-item">
                Recipe 5
              </Link>
              <Link to="/recipe6" className="dropdown-item">
                Recipe 6
              </Link>
              <Link to="/recipe7" className="dropdown-item">
                Recipe 7
              </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#NOTWORKING">
                View All Recipes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
