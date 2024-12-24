import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <section className="banner">
        <div className="banner-content">
          <h1>Welcome to My World</h1>
          <ul>
            <li>
              I am a recent graduate and a data enthusiast passionate about leveraging technology to solve real-world problems. With hands-on experience in Python, SQL, and Java, I have cultivated a strong foundation in programming and data manipulation.
            </li>
            <li>
              As a Data Analyst Intern at IQVIA, I worked on analyzing complex datasets, optimizing processes, and delivering actionable insights. My technical toolkit includes Python, SQL, and Java, along with emerging skills in React and C#.
            </li>
          </ul>
        </div>
        <div className="banner-image">
          <img
            src="https://via.placeholder.com/180"
            alt="Profile"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        {/* Highlights Section */}
        <div className="highlights">
          <div className="highlight-card">
            <h3>Education</h3>
            <ul>
              <li>B.Tech in Computer Science, MITS College (CGPA: 8.5)</li>
              <li>Intermediate, Narayana College (CGPA: 9.5)</li>
              <li>SSC, Laxmi High School (CGPA: 10)</li>
            </ul>
          </div>
          <div className="highlight-card">
            <h3>Experience</h3>
            <ul>
              <li>Data Analyst Intern at IQVIA</li>
              <li>Freelance Web Developer</li>
            </ul>
          </div>
          <div className="highlight-card">
            <h3>Projects</h3>
            <ul>
              <li>Neurovascular Crisis Prediction using ML</li>
              <li>WebGL 3D Design Application</li>
              <li>React and Node.js Full-Stack App</li>
            </ul>
          </div>
        </div>

        {/* Other Details */}
        <div className="extras">
          <div>
            <h3>Achievements</h3>
            <ul>
              <li>Top 5% in Hackathon 2023</li>
              <li>Certified Python Professional</li>
              <li>Best Final Year Project Award</li>
            </ul>
          </div>
          <div>
            <h3>Hobbies</h3>
            <ul>
              <li>Reading Tech Blogs</li>
              <li>Traveling</li>
              <li>Playing Chess</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
