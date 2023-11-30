import React, { useState } from 'react';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import './Projects.css';


const Projects = () => {
  const projects = [
    // Your project data
    {
      id: 1,
      title: 'Project 1',
      image: 'path/to/image1.jpg',
      description: 'Description of Project 1',
      // Other details...
    },
    {
      id: 2,
      title: 'Project 2',
      image: 'path/to/image2.jpg',
      description: 'Description of Project 2',
      // Other details...
    },
    // Add more projects...
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]); 

  const handleSelectProject = (projectId) => {
    const project = projects.find((proj) => proj.id === projectId);
    setSelectedProject(project);
  };


  return (
    <div id="projects" className="projects-container">
      <ProjectList projects={projects} onSelectProject={handleSelectProject} />
      <div className="project-details-container">
        {selectedProject && (
          <ProjectDetails project={selectedProject} />
        )}
      </div>
    </div>
  );
};


export default Projects;
