import React from 'react';
import s from './WorksItem.module.css'

type SocialType = {
    backgroundImage: string
}

type WorksItemType = {
    title: string
    description: string
    style: SocialType
}

export const WorksItem = (props:WorksItemType) => {
    return (
        <div className={s.worksItemBlock}>
            <div style={props.style} className={s.worksItemIcon}>
                <a className={s.titleWorksItemIcon}>Open</a>
            </div>
            <div className={s.descriptionBlock}>
                <h2 className={s.title}>{props.title}</h2>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};

