import React from 'react';
import s from './Skills.module.css'
import StyleContainer from "../commo/styles/Container.module.css";
import {SkillItem} from "./SkillItem/SkillItem";


type SkillsType = {}

export const Skills = (props: SkillsType) => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${StyleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <SkillItem title={'JavaScript'} description={'Programmer Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut'}/>
                    <SkillItem title={'React'} description={'Programmer Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut'}/>
                    <SkillItem title={'Redux'} description={'Programmer Lorem ipsum dolor sit amet'}/>
                </div>
            </div>
        </div>
    );
};

