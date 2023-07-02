import React from 'react';
import s from './Works.module.css'
import StyleContainer from "../commo/styles/Container.module.css";
import {WorksItem} from "./WorksItem/WorksItem";
import socialNetworkIcon from './../../assets/img/socialNetwork.jpg'
import todoListIcon from './../../assets/img/todoList.jpg'
import './WorksItem/slaider.css'

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
        <div id={"works"} className={s.worksBlock}>
            <div className={`${StyleContainer.container} ${s.worksContainer}`}>
                    <h2 className={s.title}>My Latest Project.</h2>
                <div className={s.works}>
                    <WorksItem style={social} title={'Social Network'}
                               description={'React/Redux-toolkit/TypeScript/Hooks/MUI'}/>
                    <WorksItem style={todo} title={'TodoList'}
                               description={'React/Redux/TypeScript/Ant Design'}/>
                    <WorksItem style={social} title={'TodoList'}
                               description={'React/Redux-toolkit/TypeScript/Hooks/MUI'}/>
               </div>
                <a className={s.btnGithub}>Open GitHub</a>
            </div>
        </div>
    );
}
// <WorksItem style={social} title={'TodoList'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua'}/>

