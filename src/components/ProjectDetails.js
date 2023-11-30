import React from 'react';

const ProjectDetails = ({ project }) => {
  return (
    <div>
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      {/* Other project details */}
    </div>
  );
};

export default ProjectDetails;
