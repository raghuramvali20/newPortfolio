import React from 'react'
import ProjectList from './ProjectList'
import './projectSection.css'

const Projects = ({ onProjectClick }) => {
  return (
   <section id='project-section'>
      <h1>My Projects</h1>
      <ProjectList onProjectClick={onProjectClick} />
   </section>
  )
}

export default Projects