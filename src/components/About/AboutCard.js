import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi Everyone, I am <span className="purple">Kerthikrosan M </span>   
    from <span className="purple">Bangalore, India.</span>
    <br />
    I am a passionate Full-Stack Developer, Machine Learning Enthusiast, and Data Analyst.
    <br />
    I graduated with a BE in Computer Science and Engineering from Sathyabama University, Chennai (2023).
    <br />
    I’ve built dynamic web applications using the MERN stack, optimized backend workflows, and created real-time data dashboards using Apache Superset and Tableau.
    <br />
    My recent work includes developing a mental health monitoring platform using ML, and building responsive travel and design websites.
    <br />
    <br />
    Apart from coding, here are a few things I enjoy in my free time:
  </p>

  <ul>
    <li className="about-activity">
      <ImPointRight /> Playing Games
    </li>
    <li className="about-activity">
      <ImPointRight /> Gyming
    </li>
    <li className="about-activity">
      <ImPointRight /> Travelling
    </li>
    <li className="about-activity">
      <ImPointRight /> Cooding
    </li>
  </ul>

  <p style={{ color: "rgb(155 126 172)" }}>
    "Strive to build scalable tech that solves real-world problems."{" "}
  </p>
  <footer className="blockquote-footer">Kerthikrosan M</footer>
</blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
