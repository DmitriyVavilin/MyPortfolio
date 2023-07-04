import React from 'react';
import s from './AboutMe.module.css'
import StyleContainer from '../commo/styles/Container.module.css'
import photoMe from '../../assets/img/photoMe.jpg'


export const AboutMe = () => {


    return (
        <div className={s.aboutMe}>
            <div className={`${StyleContainer.container} ${s.aboutMeContainer}`}>
                <div>{photoMe}</div>
                <div>
                    <h1>DMITRIY VAVILIN</h1>
                    <span>
                        Front-End developer
                    </span>
                    <div>
                        <span>I’d describe myself as a goal-oriented and hardworking person with experience in creating SPA,
                        usingReact(JS/TS), Redux, HTML & CSS. Now I am improving my skills in this direction and expanding
                        them with new technologies. In the future, I would like to become a full-stack developer.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

