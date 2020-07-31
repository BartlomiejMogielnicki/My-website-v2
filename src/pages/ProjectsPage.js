import React from 'react';
import '../scss/ProjectsPage.scss';
import project1 from '../images/projects/project1.jpg';
import project2 from '../images/projects/project22.jpg';

const projectsArray = [
  { name: 'Project1',
    image: project1, 
    alt: 'Project1 screenshot', 
    title: 'My personal portfolio website', 
    technologies: 'SCSS, REACT.JS, BEM, NETLIFY', 
    codeLink: 'https://github.com/BartlomiejMogielnicki/My-website-v2' 
  },
  { name: 'Project2', 
    image: project2, 
    alt: 'Project2 screenshot', 
    title: 'Dog shelter website - beta ver.', 
    technologies: 'SCSS, REACT.JS, BEM, GITHUB PAGES' 
  },
];

const ProjectsPage = () => {
  const projects = projectsArray.map(project => (
    <div className='projects__project' key={project.name}>
      <img className='projects__project-image' src={project.image} alt={project.alt} />
      <div className='projects__project-links'>
        <a className='projects__project-link' href='#' target='_blank' rel='noopener noreferrer'><span>Live</span></a>
        <a className='projects__project-link' href={project.codeLink} target='_blank' rel='noopener noreferrer'><span>Code</span></a>
      </div>
      <div className='projects__project-info'>
        <strong className='projects__project-info-title'>{project.title}</strong>
        <p>Used technologies:</p>
        <p>{project.technologies}</p>
      </div>
    </div>
  ))

  return (
    <div className='main projects'>
      <h2 className='projects__title'>Projects</h2>
      <div className='projects__projects-container'>
        {projects}
      </div>
    </div >
  )
}

export default ProjectsPage;