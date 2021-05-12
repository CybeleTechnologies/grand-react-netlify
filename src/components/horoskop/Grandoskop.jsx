import React from 'react';
import { NavBar } from '../navbar/NavBar';
import banner_left from "../../assets/images/horoskop_levo.jpg";
import banner_right from "../../assets/images/horoskop_desno.jpg";
import reklama from "../../assets/images/reklama.jpg";
import { NavTrack } from "../navbar/NavTrack";
import { GPopularNews } from './GPopularNews';
import { Footer } from '../footer/Footer';
import { GTopNews } from './GTopNews';
import { Premijera } from './Premijera';
import { SlikaDana } from './SlikaDana';
import { Facebook } from './Facebook';
import { GMainPopularNews } from './GMainPopularNews';

export const Grandoskop = () => {
    return (
        <div className="grandoskop">
            <div className="grandoskop-navigation">
                <NavBar />
                <NavTrack />
            </div>
            <div className="grandoskop-content">
                <div className="grandoskop-leftBanner">
                    <img src={banner_left} alt="banner_left" className="grandoskop-leftBannerImage"></img>
                </div>
                <div className="grandoskop-contentCenter">
                    <GTopNews />
                    <div className="zvezdeGranda-contentCenterReklama">
                        <img src={reklama} alt="reklama img" className="zvezdeGranda-reklamaImage"></img>
                    </div>
                    <div className="horoskop-contentCenterMain">
                        <div className="horoskop-contentCenterMainNews">
                            <GMainPopularNews />
                            <GPopularNews />
                        </div>
                        <div className="horoskop-contentCenterPromotions">
                            <Premijera />
                            <SlikaDana />
                            <Facebook />
                        </div>
                    </div>
                    <div className="showbizz-contentCenterFooter">
                        <Footer />
                    </div>
                </div>
                <div className="grandoskop-rightBanner">
                    <img src={banner_right} alt="banner_right" className="grandoskop-rightBannerImage"></img>
                </div>
            </div>
        </div>
    )
}