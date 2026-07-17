import React from "react";
import projectDetails from "../projectDetails";

const ProjectList = ({ onProjectClick }) => {
    return (
        <div id="project-list">
            {projectDetails.project.map((project, index) => (
                <div
                    key={index}
                    className="project-item"
                    onClick={() => onProjectClick(project)}
                    style={{
                        backgroundImage: `url(${project.images[0]})`,
                        backgroundColor: "#123456", // Replace with your desired color
                        backgroundBlendMode: "multiply", // or 'overlay', 'screen', etc.
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                >
                    <h2>{project.title}&gt;</h2>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
