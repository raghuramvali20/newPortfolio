import React from 'react'
import projectDetails from './projectDetails';

const ProjectList = ({ onProjectClick }) => {
  return (
    <div id="project-list">
      {projectDetails.project.map((project, index) => (
        <div key={index} className="project-item" onClick={() => onProjectClick(project)}>
          <h2>{project.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default ProjectList