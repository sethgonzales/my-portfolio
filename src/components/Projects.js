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
import Corvallis from './../img/corvallis.jpg';
import HHMushrooms from './../img/HHMushrooms.jpeg';
import ComingSoon from './../img/comingsoon.jpg';
import VinoSeeker from './../img/vinoseeker.jpeg';
import SipList from './../img/siplist.jpeg';
import Sip from './../img/sip.jpeg';
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
      code: ["JS", "React", "Firestore", "CSS", "HTML"],
      personalProject: true
    },
    {
      id: 2,
      className: 'EOL',
      title: 'Epicodus Online',
      image: [EOL, EOLUse, EOL2, EOLUse2],
      description: "Epicodus Online (EOL) is a recreation of AOL's Instant Messenger. SignalR is used for real-time messaging functionality in public and private chat rooms.",
      github: 'https://github.com/sethgonzales/Eol.Solution',
      hostingURL: 'https://eol-app.onrender.com',
      code: ["C#", "SignalR", "ASP.NET", "CSS", "HTML"],
      personalProject: true
    },
    {
      id: 3,
      className: 'HH',
      title: 'Humble Hectare',
      image: [ComingSoon, Corvallis, HHMushrooms],
      description: "Humble Hectare is an in-development application for crop and land management for a farm local to Corvallis, OR. Follow me on my developer journey recorded in the project's README.",
      github: 'https://github.com/sethgonzales/humble_hectare',
      hostingURL: null,
      code: ["JS", "React", "ASP.NET", "C#", "CSS"],
      personalProject: false
    },
    {
      id: 4,
      className: 'VS',
      title: 'VinoSeeker',
      image: [VinoSeeker, SipList, Sip],
      description: "VinoSeeker by SimBco is an application for wine enthusiasts to connect wineries and share ratings and notes on wines. As an intern for SimBco, I worked on implementing Sip functionality for Users and Admin features for Industry clients.",
      github: null,
      gitlab: 'https://gitlab.com/wyno',
      hostingURL: 'https://vinoseeker.com/',
      code: ["JS", "React", "Feathers", "Ionic", "Tailwind"],
      personalProject: false
    }
    // Add more projects...
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleSelectProject = (projectId) => {
    const project = projects.find((proj) => proj.id === projectId);
    setSelectedProject(project);
  };


  return (
    <div id="projects" className="projects">
      <div className="projects-container">
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
    </div>
  );
};

export default Projects;
