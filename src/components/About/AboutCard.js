import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey There, I am <span className="purple">Pushpendra Kukreti </span>
            from <span className="purple"> Delhi, India.</span>
            <br /> <br />
            I am a software engineer specializing in building and designing
            exceptional digital experiences. I am passionate about creativity
            and innovation in the digital landscape.
            <br /> <br />
            My interest in web development began in 2017 when I created a
            prototype for a Fitness web app as part of my college
            project. This experience taught me a great deal about ReactJs, HTML, CSS, and
            JavaScript, Semantic & Material UI.
            <br /> <br />I feel privileged to work with Capgemini, one of the
            top technology companies in the world. Additionally, I have
            contributed to Koenig’s in-house project, which is an IT training
            company with multiple centers worldwide, and I have gained valuable
            experience at RSS Infotech, a tech startup. Currently, my primary
            focus is to dive deeper into blockchain technology.
            <br /> <br /> Apart from coding, some other activities that I love
            to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Trading
            </li>
            <li className="about-activity">
              <ImPointRight /> Open Source Contribution
            </li>
          </ul>
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pushpendra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
