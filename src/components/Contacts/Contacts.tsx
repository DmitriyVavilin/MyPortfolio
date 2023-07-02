import React from 'react';
import s from './Contacts.module.css'
import StyleContainer from "../commo/styles/Container.module.css";
import {Form} from "./Form/Form";
import MatrixRain from "../Main/MatrixRain";

export const Contacts = () => {
    return (
        <div id={'contact'} className={s.contactsBlock}>
            <MatrixRain/>
            <div className={`${StyleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts Me</h2>
                <div className={s.contactsFormBlock}>
                    <Form/>
                </div>
            </div>
        </div>
    );
};

