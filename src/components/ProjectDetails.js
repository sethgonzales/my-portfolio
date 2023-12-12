import React from 'react';
import './ProjectDetails.css';


const ProjectDetails = ({ project }) => {
  return (
    <div className='project-details-container'>
        <div className='project-details-left-column'>
          <img src={project.image} alt={project.title} />
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
          <a href={project.hostingURL} className='project-link'>
            Open Application
          </a>
          <a href={project.github} className='project-link'>
            GitHub
          </a>
        </div>
      </div>
    </div >
  );
};

export default ProjectDetails;
