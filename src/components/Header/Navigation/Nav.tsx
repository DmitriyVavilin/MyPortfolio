import React from 'react';
import s from './Nav.module.css'
import {Link} from "react-scroll";

export const Nav = () => {
    return (
        <div className={s.nav}>
            <Link
                activeClass={s.active}
                className={s.Link}
                to="main"
                spy={true}
                smooth={true}
                duration={500}
                offset={1}
            >Home</Link>
            <Link
                activeClass={s.active}
                className={s.Link}
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={1}
            >About</Link>
            <Link
                activeClass={s.active}
                className={s.Link}
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                offset={1}
            >Skills</Link>
            <Link
                activeClass={s.active}
                className={s.Link}
                to="works"
                spy={true}
                smooth={true}
                duration={500}
                offset={1}
            >Project</Link>
            <Link
                activeClass={s.active}
                className={s.Link}
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={1}
            >Contacts</Link>
        </div>
    );
};

