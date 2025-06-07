import React from 'react'
import SkillsList from './SkillsList';
import skillsType from './imageList.js'

const Skills = () => {
  return (
      <section id="skills">
          <div>
              <h1>Skills</h1>
              <div id="technical-skills" className="subtitle">
                  <h2>Technical Skills</h2>
                  <div className="marquee">
                    <div className="marquee__inner">
                      <SkillsList skills={skillsType.technical} />
                      <SkillsList skills={skillsType.technical} />
                    </div>
                  </div>
              </div>
              <div id="soft-skills">
                  <h2>Soft Skills</h2>
                  <div className="marquee">
                    <div className="marquee__inner">
                      <SkillsList skills={skillsType.soft} />
                      <SkillsList skills={skillsType.soft} />
                    </div>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Skills