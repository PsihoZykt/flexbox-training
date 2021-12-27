import React from 'react';
import s from './navbar.module.css'
import logo from '../assets/navbar/img/header-logo.svg'
const Navbar = () => {
    return (
        <div className={s.wrapper}>
            <div> Collections</div>
            <div> About</div>
            <div> <img src={logo} alt="logo" /> </div>
            <div> Contact</div>
            <div> Donate</div>
        </div>
    );
};

export default Navbar;