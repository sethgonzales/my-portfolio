//ProjectDetails.js
import React, { useState, useEffect } from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.image.length);
    }, 4000); //image change interval

    return () => clearInterval(interval);
  }, [project.image.length]);

  return (
    <div className='project-details-container'>
      <div className='project-details-left-column'>
        <div className='proj-details-img'>
          {project.image.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={project.title}
              className={currentImageIndex === index ? 'active' : ''}
            />
          ))}
        </div>

        <div className='code-used'>
          {project.code.map((code, index) => (
            <div key={index} className='code-tag'>
              {code}
            </div>
          ))}
        </div>

      </div>
      <div className="project-details-right-column">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className='project-links'>
          {project.hostingURL && (
            <a href={project.hostingURL} className='project-link' target="_blank">
              Open Application
            </a>
          )}
          {project.github && (
            <a href={project.github} className='project-link' target="_blank">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div >
  );
};

export default ProjectDetails;
