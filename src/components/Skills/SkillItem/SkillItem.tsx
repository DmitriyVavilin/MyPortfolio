import React from 'react';
import s from './SkillItem.module.css'

type SkillItemType = {
    title: string
    description: string
}

export const SkillItem = (props: SkillItemType) => {
    return (
        <div className={s.skillItem}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
};

