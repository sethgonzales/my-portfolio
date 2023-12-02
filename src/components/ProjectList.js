import React, { useState } from 'react';

const ProjectList = ({ projects, onSelectProject }) => {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);

  const handleProjectClick = (projectId) => {
    onSelectProject(projectId);
    setSelectedProjectId(projectId);
  };

  return (
    <div className="projects-container">
      <div className="projects-list-column">
        <h1>Projects</h1>
        <div className="project-list">
          <ul>
            {projects.map((project) => (
              <li
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                className={selectedProjectId === project.id ? 'selected' : ''}
              >
                {project.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
