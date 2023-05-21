import React from 'react';
import s from './Works.module.css'
import StyleContainer from "../commo/styles/Container.module.css";
import {WorksItem} from "./WorksItem/WorksItem";
import socialNetworkIcon from './../../assets/img/socialNetwork.jpeg'
import todoListIcon from './../../assets/img/todoList.jpg'


export const Works = () => {

    const social = {
        backgroundImage: 'url(' + socialNetworkIcon + ')',
        backgroundRepeat: ' no-repeat',
        backgroundSize: 'cover'
    }

    const todo = {
        backgroundImage: 'url(' + todoListIcon + ')',
        backgroundRepeat: ' no-repeat',
        backgroundSize: 'cover',
    }



    return (
        <div className={s.worksBlock}>
            <div className={`${StyleContainer.container} ${s.worksContainer}`}>
                <h2 className={s.title}>My Works.</h2>
                <div className={s.works}>
                    <WorksItem style={social} title={'TodoList'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua'}/>
                    <WorksItem style={todo} title={'Social Network'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua'}/>
                    <WorksItem style={todo} title={'Social Network'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua'}/>
                </div>
            </div>
        </div>
    );
};

