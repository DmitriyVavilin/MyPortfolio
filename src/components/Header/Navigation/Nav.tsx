import React from 'react';
import s from './Nav.module.css'

type NavType  = {}
export const Nav = (props: NavType) => {
    return (
        <div className={s.nav}>
            <a href={''}>Главная</a>
            <a href={''}>Скиллы</a>
            <a href={''}>Работы</a>
            <a href={''}>Контакты</a>
        </div>
    );
};

