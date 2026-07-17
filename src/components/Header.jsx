import React from "react";

const Header = () => {
    return (
        <header>
            <div id="logo">
                <span>V M Raghu Rami Reddy</span>
            </div>
            <nav className="inactive-nav">
                <ul>
                    <li><a href="#home" className="active_section">HOME</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#project-section">PROJECTS</a></li>
                    <li><a href="#contactme">CONTACT ME</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
