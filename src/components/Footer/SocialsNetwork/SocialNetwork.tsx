import React from 'react';
import s from './SocialNetwork.module.css'

type SocialNetworkType = {
    id: string
}

export const SocialNetwork:React.FC<SocialNetworkType> = ({id}) => {
    return (
        <div className={s.socialNetworkBlock}>
            <a href={'https://www.codewars.com/users/Dmitriy_Vavilin'}>
                <img src={id}/>
            </a>
        </div>
    );
};

