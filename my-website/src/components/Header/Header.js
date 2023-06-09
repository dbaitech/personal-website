import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header() {
  const [activeLink, setActiveLink] = useState("home");

  const updateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar bg="light" expand="lg" className={"header"}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand
            className={
              activeLink === "projects" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => updateActiveLink("home")}
          >
            Home
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/projects">
              <Nav.Link
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => updateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/music">
              <Nav.Link
                className={
                  activeLink === "music" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => updateActiveLink("music")}
              >
                Music
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
