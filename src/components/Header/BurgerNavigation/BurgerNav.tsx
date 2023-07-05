import React, {useState} from 'react';
import s from './BurgerNav.module.css'
import {Link} from "react-scroll";

export const BurgerNav = () => {
   const [isOpenMenu, setIsOpenMenu] = useState(false)

    const isOpenMenuHandler = () => {
        setIsOpenMenu(!isOpenMenu)
        console.log(isOpenMenu)
    }


    return (
        <div className={s.burgerNav}>
            <div className={isOpenMenu ? `${s.burgerNavItems}  ${s.show}`: s.burgerNavItems}>
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
            <div onClick={isOpenMenuHandler} className={s.burgerBtn}></div>
        </div>
    );
};

