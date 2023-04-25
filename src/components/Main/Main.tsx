import React from 'react';
import s from './Main.module.css'
import StyleContainer from '../commo/styles/Container.module.css'

type MainType = {}

export const Main = (props: MainType) => {
    return (
        <div className={s.main}>
            <div className={`${StyleContainer.container} ${s.mainContainer}`}>
                <div className={s.headerText}>
                    <span className={s.text}>Hello There!</span>
                    <h1 className={s.title}>
                        <span>I'm Dmitriy</span>
                        <span>I'm Frontend Developer</span>
                        <span>I Like Coding</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

