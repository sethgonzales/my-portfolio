import React from 'react';

const ProjectList = ({ projects, onSelectProject }) => {
  const handleProjectClick = (projectId) => {
    onSelectProject(projectId);
  };

  return (
    <div className="projects-container">
      <div className="projects-column">
        <h2>Projects</h2>
        <div className="project-list">
          <ul>
            {projects.map((project) => (
              <li key={project.id} onClick={() => handleProjectClick(project.id)}>
                {project.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="project-details">
        {/* Project details content */}
      </div>
    </div>
  );
};

export default ProjectList;
