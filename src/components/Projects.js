import React, { useState } from 'react';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import EOL from './../img/eol-chat.png'
import ChemEdSimulations from './../img/chemed.png'
import './Projects.css';


const Projects = () => {
  const projects = [
    // Your project data
    {
      id: 1,
      className: 'ChemEd',
      title: 'ChemEd Simulations',
      image: ChemEdSimulations,
      description: 'ChemEd Simulations is an educational platform for students to access science related simulations. This is a full stack application using React, Firestore, JavaScript, CSS, and HTML',
      github: 'https://github.com/sethgonzales/capstone', //update capstone github name
      hostingURL: 'https://chemed-6a31a.web.app/'
    },
    {
      id: 2,
      className: 'EOL',
      title: 'EOL - Epicodus Online',
      image: EOL,
      description: "Epicodus Online is a recreation of AOL's Instant Messanger. This MVC application is built with Identity,  employing JavaScript for front-end logic and C# and SQL for back-end logic and database. SignalR is used for real-time messaging functionality in public and private chat rooms",
      github: 'https://github.com/sethgonzales/Eol.Solution',
      hostingURL: '' //update this link

    },
    // Add more projects...
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleSelectProject = (projectId) => {
    const project = projects.find((proj) => proj.id === projectId);
    setSelectedProject(project);
  };


  return (
    <div id="projects" className="projects projects-container">
      <ProjectList projects={projects} onSelectProject={handleSelectProject} />
      <div className='project-details'>
        {selectedProject && (
          <ProjectDetails project={selectedProject} />
        )}
      </div>
    </div>
  );
};


export default Projects;
