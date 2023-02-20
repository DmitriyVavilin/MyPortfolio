import React from 'react';
import s from './Footer.module.css'
import StyleContainer from "../commo/styles/Container.module.css";
import {SocialNetwork} from "./SocialsNetwork/SocialNetwork";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${StyleContainer.container} ${s.footerContainer}`}>
                <h2>Vavilin Dmitryi</h2>
                <div className={s.footerSocial}>
                    <SocialNetwork/>
                    <SocialNetwork/>
                    <SocialNetwork/>
                    <SocialNetwork/>
                </div>
                <h2 className={s.footerText}>2023 All rights reserved</h2>
            </div>
        </div>
    );
};

