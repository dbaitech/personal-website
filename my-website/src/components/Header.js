import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const updateActiveLink = (value) => {
    setActiveLink(value);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar className={scrolled ? "scrolled" : ""} bg="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/personal-website">
              <Nav.Link
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => updateActiveLink("home")}
              >
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/personal-website/about">
              <Nav.Link
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => updateActiveLink("about")}
              >
                About
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/personal-website/projects">
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
