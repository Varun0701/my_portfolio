// Projects.js

import React from 'react';
import '../styles/Projects.css'; // Import the updated projects CSS

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      link: '#',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      link: '#',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3.',
      link: '#',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <section className="projects-section fadeIn">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
