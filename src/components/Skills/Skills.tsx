import React from 'react';
import s from './Skills.module.css'
import StyleContainer from "../commo/styles/Container.module.css";


type SkillsType = {}

export const Skills = (props: SkillsType) => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${StyleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}></div>
            </div>
        </div>
    );
};

