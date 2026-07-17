import React from 'react';

const AboutProject = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div id="about-project" onClick={onClose}>
            <div id="project-details" onClick={(e) => e.stopPropagation()}>
                <button type="button" className="close-project" onClick={onClose} aria-label="Close project details">
                    ×
                </button>
                <h2>{project.title}</h2>

                <div id="project-screenshots">
                    {project.images?.map((image, index) => (
                        <img key={index} src={image} alt={`${project.title} screenshot ${index + 1}`} />
                    ))}
                </div>

                <div className="project-meta">
                    <h3>Tech Stack</h3>
                    <ul id="techStack">
                        {project.techStack?.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>

                <div className="project-description">
                    <h3>Description</h3>
                    <p>{project.description}</p>
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer">
                            Open project code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AboutProject;
