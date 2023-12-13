import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import EOL from './../img/eol-chat.png'
import ChemEdSimulations from './../img/chemed.png'
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      className: 'ChemEd',
      title: 'ChemEd Simulations',
      image: ChemEdSimulations,
      description: 'Inspired by my time in the classroom, ChemEd is an educational platform for students to interact with simulations that explore scientific phenomenon.',
      github: 'https://github.com/sethgonzales/ChemEd_Simulations', //update capstone github name
      hostingURL: 'https://chemed-6a31a.web.app/',
      code: ["JS", "React", "Firestore", "CSS", "HTML"]
    },
    {
      id: 2,
      className: 'EOL',
      title: 'EOL - Epicodus Online',
      image: EOL,
      description: "Epicodus Online is a recreation of AOL's Instant Messenger. SignalR is used for real-time messaging functionality in public and private chat rooms.",
      github: 'https://github.com/sethgonzales/Eol.Solution',
      hostingURL: 'https://eol-app.onrender.com',
      code: ["C#", "SignalR", "ASP.NET", "CSS", "HTML"]

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
        <SwitchTransition>
          <CSSTransition
            key={selectedProject.id}
            classNames='fade'
            timeout={500}
          >
            <div className='project-details'>
              {selectedProject && (
                <ProjectDetails project={selectedProject} />
              )}
            </div>
          </CSSTransition>
        </SwitchTransition>
    </div>
  );
};


export default Projects;
