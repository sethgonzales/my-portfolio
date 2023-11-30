import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  // Sample data for projects
  const projectsData = [
    { projectName: 'Project 1', imageUrl: 'project1.jpg' },
    { projectName: 'Project 2', imageUrl: 'project2.jpg' },
    // Add more project objects
  ];

  return (
    <div id="projects" className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.projectName}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
