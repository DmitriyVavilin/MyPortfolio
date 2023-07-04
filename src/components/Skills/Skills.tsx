import React from 'react';
import s from './Skills.module.css'
import StyleContainer from "../commo/styles/Container.module.css";
import {SkillItem} from "./SkillItem/SkillItem";

export const Skills = () => {
    return (
        <div id={'skills'} className={s.skillsBlock}>
            <div className={`${StyleContainer.container} ${s.skillsContainer}`}>
                    <h2 className={s.title}>My professional skills</h2>
                <div className={s.skills}>
                    <SkillItem id={'js'} title={'JavaScript'}/>
                    <SkillItem id={'ts'} title={'TypeScript'}/>
                    <SkillItem id={'react'} title={'React'}/>
                    <SkillItem id={'redux'} title={'Redux-TK'}/>
                    <SkillItem id={'git'} title={'Git'}/>
                    <SkillItem id={'html'} title={'Html5'}/>
                    <SkillItem id={'css'} title={'Css3'}/>
                    <SkillItem id={'rest'} title={'Rest Api'}/>
                    <SkillItem id={'union-test'} title={'Union Tests'}/>
                    <SkillItem id={'material-ui'} title={'Material UI'}/>
                    <SkillItem id={'story'} title={'StoryBook'}/>
                    <SkillItem id={'formik'} title={'Formik'}/>
                </div>
            </div>
        </div>
    );
};

