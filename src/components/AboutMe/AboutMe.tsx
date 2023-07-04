import React from 'react';
import s from './AboutMe.module.css'
import StyleContainer from '../commo/styles/Container.module.css'
import photo from '../../assets/img/photoMe.jpg'


export const AboutMe = () => {

    const photoMe = {
        width: '600px',
        height: '500px',
        backgroundImage: 'url(' + photo + ')',
        backgroundRepeat: ' no-repeat',
        backgroundSize: 'cover'
    }


    return (
        <div id={'about'} className={s.aboutMe}>
            <div className={`${StyleContainer.container} ${s.aboutMeContainer}`}>
                <div style={photoMe}>
                </div>
                <div className={s.descriptionBlock}>
                    <h1 className={s.title}>DMITRIY VAVILIN</h1>
                    <span className={s.nameJob}>
                        Front-End developer
                    </span>
                    <div>
                        <span className={s.text}>I’d describe myself as a goal-oriented and hardworking person with experience in creating SPA,
                        usingReact(JS/TS), Redux, HTML & CSS. Now I am improving my skills in this direction and expanding
                        them with new technologies. In the future, I would like to become a full-stack developer.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

