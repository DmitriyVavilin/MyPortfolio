import React from 'react';
import s from './Form.module.css'

export const Form = () => {
    return (
        <div className={s.form}>
                <input type={'text'} placeholder={'Your name'}/>
                <input className={s.input} type={'email'} placeholder={'Your e-mail'}/>
            <textarea></textarea>
        </div>
    );
};

