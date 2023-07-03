import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit
} from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";

import { SiMicrosoftsqlserver,SiCss3,SiBootstrap,SiDotNet,SiJquery,SiGraphql,SiRedux,SiAmazonaws,SiAzuredevops } from "react-icons/si";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
     <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>    
    </Row>
  );
}

export default Techstack;
