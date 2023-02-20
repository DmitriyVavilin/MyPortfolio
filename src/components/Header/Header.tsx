import React from 'react';
import s from './Header.module.css'
import {Nav} from "./Navigation/Nav";

type HeaderType = {

}

export const Header = (props: HeaderType) => {
    return (
        <div className={s.header}>
            <Nav/>
        </div>
    );
};

