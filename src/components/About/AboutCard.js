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
           <br /> <br />I’m a software engineer specializing in building and designing exceptional digital experiences. I enjoy creative and innovate new things that exist on the internet. 
           <br /> <br />My interest in web development started back in 2017 when I decided to create prototype of environment clean web app  as my college project that project taught me a lot about HTML, CSS, JScript.
           <br /> <br />I'm so privileged to work with Capgemini one of the top tech companies in the world, secondly Koenig's in-house project i.e. an IT Training company having multiple worldwide centres available and last but not the least RSS Infotech a tech-startup company. My key focus these days is to get deep dive into Blockchain.
         <br />  <br /> Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading 
            </li>
            <li className="about-activity">
              <ImPointRight /> Stock Market 
            </li>
            <li className="about-activity">
              <ImPointRight /> Open Source Contribution
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
