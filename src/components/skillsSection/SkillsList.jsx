import React, { useEffect, useState } from 'react';

const SkillsList = ({ skills }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!skills.length) return;

        const intervalId = window.setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % skills.length);
        }, 3200);

        return () => window.clearInterval(intervalId);
    }, [skills.length]);

    const prevIndex = (activeIndex - 1 + skills.length) % skills.length;
    const nextIndex = (activeIndex + 1) % skills.length;

    const renderCard = (index, position) => {
        const skill = skills[index];
        const label = skill.split('.')[0];

        return (
            <figure className={`skill-card ${position}`} key={`${skill}-${index}`}>
                <div className="skill-icon-wrap">
                    <img src={`/${skill}`} alt={label} />
                </div>
                <figcaption>{label}</figcaption>
            </figure>
        );
    };

    return (
        <div className="skills-slide-shell">
            <div className="skills-slide-track">
                {renderCard(prevIndex, 'prev')}
                {renderCard(activeIndex, 'featured')}
                {renderCard(nextIndex, 'next')}
            </div>

            <div className="skills-dots" aria-label="Skill carousel indicators">
                {skills.map((skill, index) => (
                    <button
                        key={skill}
                        type="button"
                        className={`skill-dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Show ${skill.split('.')[0]}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillsList;