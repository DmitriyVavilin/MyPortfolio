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
            <div style={props.style} className={s.worksIcon}>
                <span className={s.description}>{props.description}</span>
                <h2 className={s.title}>{props.title}</h2>
                <a className={s.btnOpenProject}>VIEW DETAILS</a>
            </div>
            <div className={s.descriptionBlock}>

            </div>
        </div>
    );
};

