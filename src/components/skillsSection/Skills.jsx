import React from 'react'
import SkillsList from './SkillsList.jsx';
import skillsType from '../imageList.js'
import './skillsSection.css'

const Skills = () => {
  return (
      <section id="skills" className="skills-section">
          <div className="skills-shell">
              <div className="skills-intro">
                  <span className="skills-eyebrow">Core Strengths</span>
                  <h1>Skills that blend thoughtful design with dependable delivery.</h1>
                  <p>I focus on building polished interfaces, clean product experiences, and calm collaboration that helps teams move faster.</p>
              </div>

              <div className="skills-grid">
                  <div id="technical-skills" className="skills-inner-section">
                      <div className="skills-heading-row">
                          <h2>Technical Skills</h2>
                          <span className="skills-pill">Frontend • UI • Product</span>
                      </div>
                      <SkillsList skills={skillsType.technical} />
                  </div>

                  <div id="soft-skills" className="skills-inner-section">
                      <div className="skills-heading-row">
                          <h2>Soft Skills</h2>
                          <span className="skills-pill">Communication • Ownership</span>
                      </div>
                      <SkillsList skills={skillsType.soft} />
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Skills