import React from 'react';
import abstract from '../../assets/collections/img/abstract.jpg'
import landscape from '../../assets/collections/img/landscape.jpg'
import music from '../../assets/collections/img/music.jpg'
import popArt from '../../assets/collections/img/pop-art.jpg'
import vehicles from '../../assets/collections/img/vehicles.jpg'
import vivid from '../../assets/collections/img/vivid.jpg'
import s from './collections.module.css'
import {COLORS} from "../common";

const Collections = () => {
    return (
        <div className={s.wrapper}>
            <h1> Collections </h1>
            <div className={s.collectionsWrapper}>
                <Figure
                    imgSrc={abstract}
                    imgAlt={"Pop art: this must be in place"}
                    aBody="Abstract"
                    borderColor={COLORS.ORANGE}
                />
                <Figure
                    imgSrc={landscape}
                    imgAlt={"landscape"}
                    aBody={"landscape"}
                    borderColor={COLORS.DARK_BLUE}
                > </Figure>
                <Figure
                    imgSrc={music}
                    imgAlt={"music"}
                    aBody={"Music"}
                    borderColor={COLORS.YELLOW}
                > </Figure>
                <Figure
                    imgSrc={popArt}
                    imgAlt={"Pop-art"}
                    aBody={"Pop art"}
                    borderColor={COLORS.RED}
                >
                </Figure>
                <Figure
                    imgSrc={vehicles}
                    imgAlt={"Vehicles"}
                    aBody={"Vehicles"}
                    borderColor={COLORS.LIGHT_GREEN}
                > </Figure>
                <Figure
                    imgSrc={vivid}
                    imgAlt={"Vivid"}
                    aBody={"Vivid"}
                    borderColor={COLORS.LIGHT_BLUE}
                > </Figure>


            </div>
        </div>
    );
};

const Figure = (props) => {
    let {imgSrc, imgAlt, aHref = "#", aBody, borderColor = "#000"} = props
    return (<figure style={{border: `10px solid ${borderColor}`}} className={s.figure}>
        <img src={imgSrc} alt={imgAlt}/>
        <figcaption>
            <a href={aHref}>{aBody}</a>
        </figcaption>
    </figure>)
}
export default Collections;