import React from 'react';
import fork from '../assets/popular/img/fork-it-up.jpg'
import car from '../assets/popular/img/lets-scoot.jpg'
import eye from '../assets/popular/img/eyeing-you.jpg'
import s from './popular.module.css'
import {COLORS} from "./common";

const Popular = () => {
    return (
        <div className={s.wrapper}>
            <h2 > Popular prints </h2>
            <div className={s.imageWrapper}>
                <div style={{borderColor: `${COLORS.DARK_RED}`}} className={s.figure}>
                    <img src={fork} alt="image with fork"/>
                    <div className={s.figureCaption}><a href="#"> Fork it up </a></div>
                </div>
                <div style={{borderColor: `${COLORS.ORANGE}`}}className={s.figure}>
                    <img src={eye} alt="image with eye"/>
                    <div className={s.figureCaption}><a href="#"> Eyeing you </a></div>
                </div>
                <div style={{borderColor: `${COLORS.LIGHT_GREEN}`}}className={s.figure}>
                    <img src={car} alt="image with car"/>
                    <div className={s.figureCaption}><a href="#">let's scoot</a></div>
                </div>
            </div>
        </div>
    );
};

export default Popular;