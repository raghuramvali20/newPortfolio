import React from 'react'
import ProjectList from './ProjectList'

const Projects = ({ onProjectClick }) => {
  return (
   <section id='projects'>
        <div>
            <h1>My Projects</h1>
              <ProjectList onProjectClick={onProjectClick} />
        </div>
   </section>
  )
}

export default Projects