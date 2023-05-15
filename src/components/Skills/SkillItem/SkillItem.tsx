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
            <div className={s.icon}>
                <HomeSvgSelector id={props.id}/>
                <div>
                    <span className={s.title}>{props.title}</span>
                </div>
            </div>

        </div>
    );
};

// export const SkillItem = (props: SkillItemType) => {
//     return (
//         <div className={s.skillItem}>
//             <div className={s.icon}></div>
//             <h3 className={s.title}>{props.title}</h3>
//             <span className={s.description}>
//                 {props.description}
//             </span>
//         </div>
//     );
// };

