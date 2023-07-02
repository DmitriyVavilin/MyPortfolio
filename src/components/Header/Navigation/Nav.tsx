import React from 'react';
import s from './Nav.module.css'
import {Link} from "react-scroll";

type NavType = {}
export const Nav = (props: NavType) => {
    return (
        <div className={s.nav}>
            <Link
                activeClass={s.active}
                className={s.Link}
                to="main"
                spy={true}
                smooth={true}
                duration={500}
                offset={-55}
            >Главная</Link>
            <Link
                activeClass={s.active}
                className={s.Link}
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                offset={-55}
            >Скиллы</Link>
            <Link
                activeClass={s.active}
                className={s.Link}
                to="works"
                spy={true}
                smooth={true}
                duration={500}
                offset={-55}
            >Работы</Link>
            <Link
                activeClass={s.active}
                className={s.Link}
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-55}
            >Контакты</Link>
        </div>
    );
};

