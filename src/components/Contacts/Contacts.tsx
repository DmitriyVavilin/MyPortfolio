import React from 'react';
import s from './Contacts.module.css'
import {Form} from "./Form/Form";
import MatrixRain from "../Main/MatrixRain";
import {TypeAnimation} from "react-type-animation";

export const Contacts = () => {
    return (
        <div id={'contact'} className={s.contactsBlock}>
            <MatrixRain/>
            <div className={`${s.contactsContainer}`}>
                <h2 className={s.title}>
                    <TypeAnimation
                        sequence={[
                            ` Contacts`,
                            2000,
                            `Contacts`,
                            2000
                        ]}
                        repeat={Infinity}
                    />
                </h2>
                <Form/>
            </div>

        </div>
    );
};

