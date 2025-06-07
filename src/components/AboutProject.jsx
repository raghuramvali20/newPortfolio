import React from 'react'

const AboutProject = ({ project, onClose }) => {
  const handleClick = () => {
    onClose();
  }
  return (
    <div id='about-project' onClick={handleClick}>
      <div id="project-details" onClick={(e) => e.stopPropagation()}>
        {project ? (
          <>
            <h2>{project.title}</h2>
            <center>
              <div id="project-screenshots">
               {project.images.map((image, index)=>{
                  return (
                    <img key={index} src={image} alt={`${project.title} screenshot ${index + 1}`} />
                  )
               })}
            </div>
            </center>
            <ul id="techStack">
              <h2>Tech Stack</h2>
              <center >
              {
                
                project.techStack.map((tech, index) => (
                  <li key={index}>
                    <p>{tech}</p>
                  </li>
                ))
               
              }
               </center>
            </ul>
           <h2>description</h2>
            <p>{project.description}  <a href={project.link} target='_blank'>Click here to visit code</a></p>
          </>
        ) : (
          <p>No project selected</p>
        )}
      </div>
    </div>
  )
}

export default AboutProject