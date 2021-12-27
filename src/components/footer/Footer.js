import React from 'react';
import facebookLogo from '../../assets/footer/img/facebook-icon.svg'
import instagramLogo from '../../assets/footer/img/instagram-icon.svg'
import s from './footer.module.css'

const Footer = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.stayConnected}>
                <div className={s.stayConnectedText}> Stay Connected!</div>
                <div  className={s.stayConnectedIcons}>
                    <img src={facebookLogo} alt="facebook logo"/>
                    <img src={instagramLogo} alt="instagram logo"/>
                </div>
            </div>
            <div className={s.addresses}>
                <div> Wall of wonder</div>
                <div> RBC plaza</div>
                <div> 60 south 8th street</div>
                <div> Minneapolis, MN55402</div>
            </div>
        </div>
    );
};

export default Footer;