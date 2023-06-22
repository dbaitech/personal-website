import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <div className="banner-content">
          <div>
            <h1>Hi, I'm Diana!</h1>
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
            <img src="../assets/linkedin.svg" alt="" />
            <img src="../assets/github.svg" alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Banner;
