import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GitHubIcon from '@mui/icons-material/GitHub';
import todo from "../../Assets/Projects/todo.png";
import chatroom from "../../Assets/Projects/chatroom.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import blog from "../../Assets/Projects/blog.png";
import expense from "../../Assets/Projects/expense-tracker.png";
import cardmanager from "../../Assets/Projects/cardmanager.png";
import exchangeProto from "../../Assets/Projects/exchangeProto.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatroom}
              isBlog={false}
              title="ChatRoom"
              description="This is the chatroom app where people can join any room and chat within that room. Tech Stack : React.js, React-Redux, Node.js, socket.io, HTML-5 , CSS-3, Bootstrap. Have features which allows user for realtime messaging."
              link="https://github.com/pushpendrakukreti/Chat-Room"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description="This is an expense tracking app where any user can calculate his expense by entering all the income and expense sources, this app will show the final result accordingly. Tech Stack : React.js, React-Redux, Node.js, HTML-5 , CSS-3, Bootstrap."
              link="https://github.com/pushpendrakukreti/Expense-Tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exchangeProto}
              isBlog={false}
              title="Exchange Proto"
              description="This is the exchange proto web-app which allow user to provide real time of stock market graph. Tech Stack : React.js, React-Redux, HTML-5 , CSS-3, material ui."
              link="https://github.com/pushpendrakukreti/exchange-proto"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Dev Portfolio"
              description="This is my personal portfolio which is build on react.js. Here i've shown my bunch of work which i've been worked on over the years."
              link="https://github.com/pushpendrakukreti/dev-portfolio"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo List"
              description="This list of things that one wants to get done or that need to get done. Tech Stack : HTML, CSS, REACT-JS, REDUX, JSON, JAVASCRIPT, ES6."
              link="https://github.com/pushpendrakukreti/ReactJs-To-do-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog"
              description="This is blog page build with MERN technology for database i've use mongodb for backend i've use node and frontend i've use react framework with redux middleware by using this app we can add content also we con update and delete content."
              // link="https://github.com/priyajoshipj/Blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cardmanager}
              isBlog={false}
              title="Card manager"
              description="This is the card manager app where user can add card manage card and do add sub task of any category. Tech Stack : React.js, React-Redux, Node.js, socket.io, HTML-5 , CSS-3, Bootstrap."
              // link="https://github.com/priyajoshipj/CardManager"
            />
          </Col>

        </Row>
        <Row>
          <Col md={12} style={{ color: "white", fontSize: "large" }}>  For more projects click on icon below
          <br></br>
          <Button href="https://github.com/pushpendrakukreti"><GitHubIcon></GitHubIcon></Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;