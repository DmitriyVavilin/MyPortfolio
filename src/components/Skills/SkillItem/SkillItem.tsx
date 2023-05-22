import React from 'react';
import s from './SkillItem.module.css'
import HomeSvgSelector from "./SvgSkilsIcons/HomeSvgSelector";

type SkillItemType = {
    id: string
    title: string
}

export const SkillItem = (props: SkillItemType) => {
    return (
        <div className={s.skillItem}>
            <div>
                <div className={s.icon_item}><HomeSvgSelector id={props.id}/></div>
                <div>
                    <span className={s.title}>{props.title}</span>
                </div>
            </div>

        </div>
    );
};

