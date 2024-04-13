import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import Skills from "./Skills";
import profile from "../assets/profile.jpg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

function AboutBanner() {
  return (
    <section className="about-banner" id="about">
      <Container>
        <div className="about-banner-content">
          <div>
            <h1>About</h1>
            <Row>
              <Col>
                <div className="about-text">
                  <p>
                    I'm a 3rd year student studying Computer Science at the
                    University of Waterloo with a:
                  </p>
                  <ul>
                    <li>Specialization in Artificial Intelligence</li>
                    <li>Minor in Combinatorics and Optimization</li>
                  </ul>
                  <p>
                    In my spare time, you can find me playing the piano,
                    watching astronomy documentaries or on the tennis courts.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="d-flex justify-content-center align-items-center">
                  <img className="profile-image" src={profile} alt="Profile" />
                </div>
                <div className="logos">
                  <a href="https://www.linkedin.com/in/diana-brebeanu">
                    <img src={linkedin} alt="Linkedin" />
                  </a>

                  <a href="https://github.com/dbaitech">
                    <img src={github} alt="GitHub" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Skills />
            </Row>
            <Row>
              <div className="resume">
                <p>
                  <b>
                    <a href="/resume">View my resume →</a>
                  </b>
                </p>
              </div>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutBanner;
