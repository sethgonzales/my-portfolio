//ProjectList.js
import React, { useState } from 'react';
import './ProjectList.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';

const ProjectList = ({ projects, onSelectProject }) => {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);

  const handleProjectClick = (projectId) => {
    onSelectProject(projectId);
    setSelectedProjectId(projectId);
  };

  return (
    <div className="projects-container">
      <div className="projects-list-column">
        <AnimationOnScroll animateIn='animate__fadeInDown' animateOnce='true'>
          <h1>Projects</h1>
        </AnimationOnScroll>
        <div className="project-list">
          <h2>personal</h2>
          <ul>
            {projects.map((project) => (
              project.personalProject ? (
                <li
                  key={project.id}
                  onClick={() => handleProjectClick(project.id)}
                  className={selectedProjectId === project.id ? 'selected' : ''}
                >
                  {project.title}
                </li>
              ) : null
            ))}
          </ul>
        </div>
        <div className="project-list">
          <h2>professional</h2>
          <ul>
            {projects.map((project) => (
              !project.personalProject ? (
                <li
                  key={project.id}
                  onClick={() => handleProjectClick(project.id)}
                  className={selectedProjectId === project.id ? 'selected' : ''}
                >
                  {project.title}
                </li>
              ) : null
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
