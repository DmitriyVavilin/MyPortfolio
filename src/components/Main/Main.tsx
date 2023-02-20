import React from 'react';
import s from './Main.module.css'
import StyleContainer from '../commo/styles/Container.module.css'

type MainType = {}

export const Main = (props: MainType) => {
    return (
        <div className={s.main}>
            <div className={StyleContainer.container}>
                <div className={s.text}>
                    <h1>Dmitriy Vavilin</h1>
                    <span>Front-end developer</span>
                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    );
};

