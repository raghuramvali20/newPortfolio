import React from 'react'

const SkillsList = (props) => {
    const src = props.skills;
    return (
        <div className="skills">
            {src.map((item, index) => {
                return (
                   <figure  key={index}>
                     <img src={`/${item}`} alt={item.split('.')[0]} />
                     <figcaption>{item.split('.')[0]}</figcaption>
                   </figure>
                )
            })}
        </div>
    );
}

export default SkillsList