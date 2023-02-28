import React from 'react';
import s from './Contacts.module.css'
import StyleContainer from "../commo/styles/Container.module.css";
import {Form} from "./Form/Form";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${StyleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <div className={s.contactsFormBlock}>
                    <Form/>
                </div>
            </div>
        </div>
    );
};

