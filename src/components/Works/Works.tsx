import React from 'react';
import s from './Works.module.css'
import StyleContainer from "../commo/styles/Container.module.css";
import {WorksItem} from "./WorksItem/WorksItem";
import socialNetworkIcon from './../../assets/img/socialNetwork.jpeg'
import todoListIcon from './../../assets/img/todoList.jpg'
import {Swiper, SwiperSlide} from "swiper/react";
import './WorksItem/slaider.css'
import {FreeMode, Pagination} from "swiper";
import MatrixRain from "../Main/MatrixRain";

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
                <div className={s.colored}>
                    <h2 className={s.title}>My Works.</h2>
                </div>
                <div className={s.works}>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={15}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper">
                        <SwiperSlide><WorksItem style={social} title={'TodoList'}
                                                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua'}/></SwiperSlide>
                        <SwiperSlide><WorksItem style={todo} title={'TodoList'}
                                                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua'}/></SwiperSlide>
                        <SwiperSlide><WorksItem style={social} title={'TodoList'}
                                                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua'}/></SwiperSlide>
                   <SwiperSlide><WorksItem style={social} title={'TodoList'}
                                                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua'}/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
// <WorksItem style={social} title={'TodoList'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua'}/>

