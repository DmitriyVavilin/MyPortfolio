import React from 'react';
import s from './WorksItem.module.css'

type WorksItemType = {
    title: string
    description: string
}

export const WorksItem = (props:WorksItemType) => {
    return (
        <div className={s.worksItemBlock}>
            <div className={s.worksItemIcon}>
                <a className={s.titleWorksItemIcon}>Open</a>
            </div>
            <div className={s.descriptionBlock}>
                <h2 className={s.title}>{props.title}</h2>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};

