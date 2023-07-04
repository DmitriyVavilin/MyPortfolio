import React from 'react';
import s from './Footer.module.css'
import StyleContainer from "../commo/styles/Container.module.css";
import {SocialNetwork} from "./SocialsNetwork/SocialNetwork";
import codeWars from './../../assets/socialSvg/codewars.svg'
import git from './../../assets/socialSvg/git.svg'
import linkedin from './../../assets/socialSvg/linkedin.svg'
import telegram from './../../assets/socialSvg/telegramBlack.svg'


export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${StyleContainer.container} ${s.footerContainer}`}>
                    <div className={s.footerSocial}>
                        <SocialNetwork id={codeWars}/>
                        <SocialNetwork id={git}/>
                        <SocialNetwork id={linkedin}/>
                        <SocialNetwork id={telegram}/>
                    </div>
            </div>
        </div>
    );
};

