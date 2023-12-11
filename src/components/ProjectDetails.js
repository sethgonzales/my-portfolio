import React from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ project }) => {
  return (
      <div>
        <div className="project-details-container">
          <div className="project-details-left-column">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-details-right-column">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className='project-links'>
              <a href={project.hostingURL} className='project-link'>
                Open Application
              </a>
              <a href={project.github} className='project-link'>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProjectDetails;
