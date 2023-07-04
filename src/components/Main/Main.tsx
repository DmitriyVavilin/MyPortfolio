import React from 'react';
import s from './Main.module.css'
import StyleContainer from '../commo/styles/Container.module.css'
import {TypeAnimation} from "react-type-animation";
import MatrixRain from "./MatrixRain";

export const Main = () => {
    return (
        <div id={'main'} className={s.main}>
            <MatrixRain/>
            <div className={`${StyleContainer.container} ${s.mainContainer}`}>
                <div className={s.headerText}>
                        <span className={s.text}>Hello There!</span>
                        <h1 className={s.title}>
                            <TypeAnimation
                                sequence={[
                                    ` 'I'm Dmitriy`,
                                    1700,
                                    `I'm Frontend Developer`,
                                    2000,
                                    'I Like Coding',
                                    2000,
                                ]}
                            />
                        </h1>
                    </div>
            </div>
        </div>
    );
};

