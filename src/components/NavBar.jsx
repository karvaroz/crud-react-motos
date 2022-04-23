import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>MOTOS ELECTRICAS</Navbar.Brand>
        <Nav>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </Nav>
        <Nav>
          <Link className="nav-link" to="/new">
            Agregar
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
