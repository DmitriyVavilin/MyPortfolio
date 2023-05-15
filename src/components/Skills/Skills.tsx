import React from 'react';
import s from './Skills.module.css'
import StyleContainer from "../commo/styles/Container.module.css";
import {SkillItem} from "./SkillItem/SkillItem";


type SkillsType = {}

export const Skills = (props: SkillsType) => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${StyleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skills}>
                    <SkillItem id={'js'} title={'JavaScript'}/>
                    <SkillItem id={'ts'} title={'TypeScript'}/>
                    <SkillItem id={'react'} title={'React'}/>
                    <SkillItem id={'redux'} title={'Redux'}/>
                    <SkillItem id={'git'} title={'Git'}/>
                    <SkillItem id={'html'} title={'Html5'}/>
                    <SkillItem id={'css'} title={'Css3'}/>
                    <SkillItem id={'rest'} title={'Rest Api'}/>
                    <SkillItem id={'union-test'} title={'Union Test'}/>
                    <SkillItem id={'material-ui'} title={'Material UI'}/>
                </div>
            </div>
        </div>
    );
};

