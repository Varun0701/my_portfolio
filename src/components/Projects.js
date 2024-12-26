import React, { useState } from 'react';
import '../styles/Projects.css'; // Import the updated projects CSS

function Projects() {
  const projects = [
    {
      title: 'Python Automation',
      // description: 'Developed a dashboard, that display the QC checks of the weekly and monthly reports, along with refreshing the reports ',
      details: {
        description: 'Developed a dashboard, that display the QC checks of the weekly and monthly reports, along with refreshing the reports ',
        type: 'Solo Project',
        languages: 'Python, Flask(Backend) Streamlit(Frontend)',
        additional: 'Other details about Project 1.'
      },
       link: '#',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Neurovascular Crisis Prediction',
       // description: 'Developed a Machine Learning model, that predicts the early detection of brain stroke and helps in taking the early precautions',
      details: {
        description: 'Developed a Machine Learning model, that predicts the early detection of brain stroke and helps in taking the early precautions',
        type: 'Solo Project',
        languages: 'Python, Flask',
        additional: 'The link for the published Journal.',
        link : 'https://www.afjbs.com/uploads/paper/2ccc474a23aa243635657549dc3eff32.pdf'
      },
      link: '#',
      image: 'https://via.placeholder.com/150'
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section className="projects-section fadeIn">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => handleProjectClick(project)}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link">
                  View Project Details
                </a>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div className="project-details">
            <h3>Project Details</h3>
            <p><strong>Name:</strong> {selectedProject.title}</p>
            <p><strong>Type:</strong> {selectedProject.details.type}</p>
            <p><strong>Languages:</strong> {selectedProject.details.languages}</p>
            <p><strong>Description:</strong> {selectedProject.details.description}</p>
            <p><strong>Additional Info:</strong> {selectedProject.details.additional}</p>
            <a href= {selectedProject.details.link}>
              {selectedProject.details.link}
            </a>
            <br></br><br></br>
            <button onClick={() => setSelectedProject(null)} className="close-details">
              Close Details
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
