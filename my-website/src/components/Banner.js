import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <div className="banner-content">
          <div>
            <h1>Hi, I'm Diana</h1>
            <p>
              I'm a 3rd student <b>Computer Science</b> student at the
              <b> University of Waterloo</b> passionate about machine learning
              and cryptography.
            </p>

            <p>
              <a href="/about">Learn more about me →</a>
            </p>
            <p>
              <a href="/projects">View my projects →</a>
            </p>
          </div>
          <div className="connect">
            <h3>Let's Connect</h3>

            <div className="logos">
              <div className="logo">
                <a href="https://www.linkedin.com/in/diana-brebeanu">
                  <img src={linkedin} alt="Linkedin" />
                </a>
              </div>

              <div className="logo">
                <a href="https://github.com/dbaitech">
                  <img src={github} alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Banner;
