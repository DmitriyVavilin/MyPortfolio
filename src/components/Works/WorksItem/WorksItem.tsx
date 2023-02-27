import React from 'react';
import s from './WorksItem.module.css'

type WorksItemType = {
    title: string
    description: string
}

export const WorksItem = (props:WorksItemType) => {
    return (
        <div className={s.worksItemBlock}>
            <div className={s.icon}></div>
            <h2>{props.title}</h2>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

