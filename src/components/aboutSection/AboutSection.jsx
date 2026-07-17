import React from "react";
import './aboutSection.css';

const AboutSection = () => {
    return (
        <section id="home" className="about_section">
            <div className="inner_about_section">
                <div className="i_a_s_left">
                    <p className="eyebrow">Full-Stack Developer • React • Node.js • MongoDB</p>
                    <h2>Hello, I&apos;m</h2>
                    <h1>V M Raghu Rami Reddy</h1>
                    <p>
                        I build modern web experiences with clean UI, practical functionality, and a strong foundation in JavaScript, React, Node.js, and databases. I enjoy turning ideas into responsive products and continuously improving through real projects and hands-on learning.
                    </p>
                    <div className="about-actions">
                        <a href="#project-section" className="primary-btn">See Projects</a>
                        <a href="#contactme" className="secondary-btn">Contact Me</a>
                    </div>
                </div>
                <img src="image.png" alt="Portrait of Raghu Rami Reddy" />
            </div>
        </section>
    );
};

export default AboutSection;
