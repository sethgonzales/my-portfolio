//Projects.js
import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import EOL from './../img/eolmock.jpeg';
import EOL2 from './../img/eolmock2.jpeg';
import EOLUse from './../img/eoluse.jpeg';
import EOLUse2 from './../img/eoluse2.jpeg';
import ChemEdSimulations from './../img/chemed.jpeg';
import ChemEdSimulations2 from './../img/chemed2.jpeg';
import ChemEdUse from './../img/chemeduse.jpeg';
import ChemEdUse2 from './../img/chemeduse2.jpeg';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      className: 'ChemEd',
      title: 'ChemEd Simulations',
      image: [ChemEdSimulations, ChemEdUse, ChemEdSimulations2, ChemEdUse2],
      description: 'Inspired by my time in the classroom, ChemEd Simulations is an educational platform for students to interact with models that explore scientific phenomenon.',
      github: 'https://github.com/sethgonzales/ChemEd_Simulations', 
      hostingURL: 'https://chemed-6a31a.web.app/',
      code: ["JS", "React", "Firestore", "CSS", "HTML"]
    },
    {
      id: 2,
      className: 'EOL',
      title: 'Epicodus Online',
      image: [EOL, EOLUse, EOL2, EOLUse2],
      description: "Epicodus Online (EOL) is a recreation of AOL's Instant Messenger. SignalR is used for real-time messaging functionality in public and private chat rooms.",
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
