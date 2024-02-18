import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/chatify.png";
import portfolio from "../../Assets/Projects/portfolio.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="QR Code Generator"
              description="The objective of this Flutter project is to create a QR code generator application that allows users to easily generate QR codes for various purposes. As the developer, my goal is to design a user-friendly interface using Flutter's framework, enabling users to input text, URLs, or other data and generate corresponding QR codes instantly. I aim to implement features such as customization options for QR code colors and sizes, as well as the ability to save generated QR codes to the device's gallery. Additionally, I will ensure cross-platform compatibility to reach a wider audience of Android and iOS users, making QR code generation convenient and accessible for diverse use cases. Through this project, I seek to provide a valuable tool for users to generate QR codes efficiently while gaining proficiency in Flutter app development techniques and best practices.."
              ghLink="https://github.com/kerthikrosan"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="AI Based Smart Voting System"
              description="The goal of this project is to develop an AI-based Online Smart Voting System that revolutionizes the traditional voting process by integrating cutting-edge technologies. As the front-end developer using React, my objective is to create an intuitive and visually appealing user interface that simplifies the voting process for users while ensuring transparency, security, and accessibility. By leveraging React's capabilities, I aim to design a seamless voting experience that enhances user engagement, provides real-time updates on voting progress, and fosters trust in the integrity of the electoral system. Through collaboration with the backend team and adherence to best practices in UI/UX design, I seek to contribute to the development of a robust and reliable voting platform that empowers citizens to participate in democratic processes effectively and securely, paving the way for a more inclusive and democratic society."
              ghLink="https://github.com/kerthikrosan/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="React-Portfolio"
              description="Develop a cutting-edge React portfolio to present my professional expertise, projects, and accomplishments in an engaging and interactive format. By leveraging React.js, I aim to create a visually captivating and user-friendly platform that highlights my skills, showcases my portfolio projects with detailed descriptions and demos, and effectively communicates my unique value proposition to recruiters, clients, and industry peers. Through this portfolio, I seek to establish a strong online presence, showcase my capabilities, and unlock new career opportunities in the ever-evolving tech landscape."
              ghLink="https://github.com/kerthikrosan/Editor.io"
              demoLink="https://kerthikrosan.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
