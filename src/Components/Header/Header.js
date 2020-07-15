import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "../../App.css";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navbar">
        <Navbar.Brand className="logo">Shoe Store</Navbar.Brand>
        <Navbar.Toggle
          style={{ backgroundColor: "white" }}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink className="nav" to="/">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="nav" to="/store">
                Store
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <NavLink className="nav" to="/login">
                Login
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="nav" to="/signup">
                Sign Up
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
