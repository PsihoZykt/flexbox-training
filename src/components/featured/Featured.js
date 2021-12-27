import React from 'react';
import tooCool from '../../assets/featured/img/too-cool.jpg'
import s from './featured.module.css'
const Featured = () => {
    return (
        <div className={s.wrapper}>
            <h2> Featured print </h2>
            <div className={s.featuredFigure}>
                <img src={tooCool} alt="Girl with a finger on hear mouth with cool sunglasses"/>
                <figcaption>
                    <div > Too cool for school </div>
                </figcaption>
            </div>
        </div>
    );
};

export default Featured;