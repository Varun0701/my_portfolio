import React, { useState } from 'react';
import '../styles/Skills.css'; // Importing the updated styles

function Skills() {
  const skills = [
    {
      name: 'Python',
      rating: 5,
      description: 'Proficient in Python with experience in data analysis, machine learning, and web development.',
      certifications: ['Python for Data Science (Coursera)', 'Advanced Python Programming (Udemy)']
    },
    {
      name: 'SQL',
      rating: 4,
      description: 'Strong skills in writing complex queries, optimizing database performance, and using tools like PostgreSQL and Oracle.',
      certifications: ['SQL Fundamentals (Datacamp)', 'Advanced SQL Techniques (Edureka)']
    },
    {
      name: 'Java',
      rating: 3,
      description: 'Experienced in object-oriented programming, building small applications, and debugging Java code.',
      certifications: ['Java Basics (Codecademy)']
    },
    {
      name: 'React',
      rating: 4,
      description: 'Skilled in building dynamic web applications, using hooks, and managing state effectively.',
      certifications: ['React Development Bootcamp (Scrimba)']
    },
    {
      name: 'C#',
      rating: 3,
      description: 'Familiar with C# for desktop applications and basic game development in Unity.',
      certifications: []
    }
  ];

  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <section className="skills-section fadeIn">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill"
              onClick={() => handleSkillClick(skill)}
            >
              <h3>{skill.name}</h3>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`star ${i < skill.rating ? 'filled' : ''}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedSkill && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h3>{selectedSkill.name}</h3>
            <p>{selectedSkill.description}</p>
            {selectedSkill.certifications.length > 0 ? (
              <>
                <h4>Certifications:</h4>
                <ul>
                  {selectedSkill.certifications.map((cert, i) => (
                    <li key={i}>{cert}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p>No certifications available.</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Skills;
