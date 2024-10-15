import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/PK.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillGooglePlusCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const yearCalculator = () => {
    var userinput = "2018-04-01";
    var dob = new Date(userinput);
    var dobYear = dob.getFullYear(); // getFullYear instead of getYear for accuracy
    var dobMonth = dob.getMonth();
    var dobDate = dob.getDate();
  
    let now = new Date();
    var currentYear = now.getFullYear(); // getFullYear instead of getYear
    var currentMonth = now.getMonth();
    var currentDate = now.getDate();
  
    var age = {};
    var ageString = "";
  
    let yearAge = currentYear - dobYear;
  
    let monthAge, dateAge; // Declare monthAge and dateAge with let outside the blocks
  
    if (currentMonth >= dobMonth) {
      monthAge = currentMonth - dobMonth;
    } else {
      yearAge--;
      monthAge = 12 + currentMonth - dobMonth;
    }
  
    if (currentDate >= dobDate) {
      dateAge = currentDate - dobDate;
    } else {
      monthAge--;
      dateAge = 31 + currentDate - dobDate;
  
      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }
  
    age = {
      years: yearAge,
      months: monthAge,
      days: dateAge,
    };
  
    if (age.years > 0 && age.months > 0 && age.days > 0) {
      ageString = age.years + "." + age.months;
    } else if (age.years === 0 && age.months === 0 && age.days > 0) {
      ageString = "" + age.days + "";
    } else if (age.years > 0 && age.months === 0 && age.days === 0) {
      ageString = age.years + ".";
    } else if (age.years > 0 && age.months > 0 && age.days === 0) {
      ageString = age.years + "." + age.months;
    } else if (age.years === 0 && age.months > 0 && age.days > 0) {
      ageString = age.months + "." + age.days;
    } else if (age.years > 0 && age.months === 0 && age.days > 0) {
      ageString = age.years + "." + age.days;
    } else if (age.years === 0 && age.months > 0 && age.days === 0) {
      ageString = age.months;
    }
  
    return ageString;
  };
  
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <p style={{ textAlign: "left" }}>
                With more than <b className="purple">{yearCalculator()}</b>{" "}
                years of practical experience in software development utilizing
                agile and scrum methodologies, I have consistently delivered
                high-quality web applications that enhance user experience and
                fulfill business objectives.
              </p>
              <div style={{ textAlign: "left" }}>
                Experienced in delivering quality work to the companies I've
                worked with i.e.,
                <b>
                  <br />
                  <a href="https://www.egnyte.com" target="_blank" className="text-decoration-none"><b className="purple">Egnyte</b></a> as Frontend Engineer
                  <br />
                  <a href="https://www.capgemini.com" target="_blank" className="text-decoration-none"><b className="purple">Capgemini</b></a> as Full Stack Developer
                  <br />
                  <a href="https://www.koenig-solutions.com" target="_blank" className="text-decoration-none"><b className="purple">Koenig Solutions</b></a> as Full Stack
                  Developer
                  <br />
                  <a href="https://www.rssindia.com/" target="_blank" className="text-decoration-none"><b className="purple">Rss Infotech</b></a> as Software Developer
                </b>
              </div>
              <br />
              I have worked across variety of domains, such as:
              <br />{" "}
              <i style={{ fontFamily: "arial", color: "#a588c0" }}>
                "Logistics, Education, Finance, E-Commerce, Data Management,
                Enterprise Software"
              </i>
              {/* <br /> I have a experience with Modern Javascript Library and Frameworks tools. */}
              <br />
              <br />
              <b> Tech Stack : </b>
              <b className="" style={{ fontFamily: "arial", color: "#a588c0" }}>
                ReactJs | Redux | JavaScript | HTML5 | CSS3 | Typescript |
                Node | Next.js | A11y | Bootstrap | Rest Api | GraphQL |
                Socket.IO | Material UI | jQuery | Sql | MongoDB | Git | Figma |
                Jira | Jest | Jenkins | CI/CD | | Confluence{" "}
              </b>
              <br />
              <br />
              I have a strong proficiency in code optimization, and improving
              the performance of applications.
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to{" "}
              <a
                href="https://www.linkedin.com/in/pkukreti"
                target="_blank"
                rel="noreferrer"
                className="purple"
              >
                connect{" "}
              </a>
              !
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/pushpendrakukreti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:kukretipushpendra@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGooglePlusCircle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pkukreti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
