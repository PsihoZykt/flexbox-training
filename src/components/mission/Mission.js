import React from 'react';
import s from './mission.module.css'
import logo from '../assets/mission/img/logo2.png'

const MISSION_HEADER = "Our mission";
const MISSION_BODY = "We strive to bring people interesting and unique art that inspires them to be more creative and enjoy their homes. We know art can be expensive, so we work with a rotating set of artists and photographers to being you fantastic prints - all for free. We just ask that you donate what you think is fair, or share the site with someone who might like great art as much as you do. "
const Mission = () => {

    return (<div className={s.wrapper}>
        <h1 className={s.missionHeader}> {MISSION_HEADER}</h1>
        <div className={s.missionBody}>
            <div className={s.missionImg}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={s.missionText}> {MISSION_BODY} </div>
        </div>
    </div>);
};

export default Mission;