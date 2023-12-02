import React from 'react';

const ProjectDetails = ({ project }) => {
  return (
<div className={project.className}>
      <div className="project-details-container">
        <div className="project-details-left-column">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-details-right-column">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {/* Other project details */}
        </div>
      </div>
    </div>
    
  );
};

export default ProjectDetails;
