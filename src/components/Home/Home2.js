import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/PK.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillGooglePlusCircle
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const yearCalculator = () => {
  var userinput = "2018-04-01";
  var dob = new Date(userinput);
  var dobYear = dob.getFullYear();  // getFullYear instead of getYear for accuracy
  var dobMonth = dob.getMonth();
  var dobDate = dob.getDate();

  let now = new Date();
  var currentYear = now.getFullYear();  // getFullYear instead of getYear
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

function Home2() {
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
              I'm a software developer 💻 acquired more than <b className="purple">{yearCalculator()}</b> years of
              experience by delivering quality work to the companies I've worked with i.e.,
              </p>
              <div style={{ textAlign: "left" }}>
                <b>
                  <br /><b className="purple">Capgemini</b> as Full Stack Developer
                  <br /><b className="purple">Koenig</b> as Full Stack Developer
                  <br /><b className="purple">RSS Infotech</b> as Software Developer
                </b>
              </div>
              <br />
              I have a proven track record in diverse domains such as: 
              <br/> <i style={{ fontFamily: "arial", color: "#a588c0" }}>"E-Commerce, Finance, Education and Logistics"</i>
              {/* <br /> I have a experience with Modern Javascript Library and Frameworks tools. */}
              <br />    
              <br />
              <b> Tech Stack : </b>
              <b className="" style={{ fontFamily: "arial", color: "#a588c0" }}>
              JavaScript | ReactJs | Node.js | HTML5 | CSS3 | jQuery | Bootstrap | Web API | GraphQL | WCF | MS SQL Server | MongoDB | Git | TFS | Azure </b>
              <br /><br />
              I am proficient in code optimization to improve the performance of applications.
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
              Feel free to <a href="https://www.linkedin.com/in/pkukreti"
                target="_blank"
                rel="noreferrer"
                className="purple">connect </a>!
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
