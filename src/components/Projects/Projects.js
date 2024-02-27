import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import flatm from "../../Assets/Projects/flat management.png";
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
              imgPath={flatm}
              isBlog={false}
              title="Flat Management System(React)"
              description ="Developed a user-friendly Flat Management System using React.js, enabling seamless communication and efficient task management for residential communities. Leveraged React components, Hooks, and Router for intuitive user interfaces and responsive design, ensuring accessibility across devices. Demonstrated expertise in React.js while prioritizing functionality and user experience"
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
