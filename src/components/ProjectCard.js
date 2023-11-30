import React from 'react';
import './ProjectCard.css'; // Create and import corresponding CSS file for styling

const ProjectCard = ({ projectName, imageUrl }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={projectName} />
      <div className="project-info">
        <p className="project-name">{projectName}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
