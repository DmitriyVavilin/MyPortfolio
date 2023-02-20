import React from 'react';
import s from './Works.module.css'
import StyleContainer from "../commo/styles/Container.module.css";
import {WorksItem} from "./WorksItem/WorksItem";

export const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={`${StyleContainer.container} ${s.worksContainer}`}>
                <h2 className={s.title}>My Works</h2>
                <div className={s.work}>
                    <WorksItem title={'TodoList'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua'}/>
                    <WorksItem title={'Social Network'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua'}/>
                </div>
            </div>
        </div>
    );
};

