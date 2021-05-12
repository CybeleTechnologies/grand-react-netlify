import React from 'react';
import { NavBar } from '../navbar/NavBar';
import banner_left from "../../assets/images/horoskop_levo.jpg";
import banner_right from "../../assets/images/horoskop_desno.jpg";
import reklama from "../../assets/images/reklama.jpg";
import { NavTrack } from "../navbar/NavTrack";
import { HPopularNews } from './HPopularNews';
import { Footer } from '../footer/Footer';
import { HTopNews } from './HTopNews';
import { Premijera } from './Premijera';
import { SlikaDana } from './SlikaDana';
import { Facebook } from './Facebook';
import { HMainPopularNews } from './HMainPopularNews';

export const Horoskop = () => {
    return (
        <div className="horoskop">
            <div className="horoskop-navigation">
                <NavBar />
                <NavTrack />
            </div>
            <div className="horoskop-content">
                <div className="horoskop-leftBanner">
                    <img src={banner_left} alt="banner_left" className="horoskop-leftBannerImage"></img>
                </div>
                <div className="horoskop-contentCenter">
                    <HTopNews />
                    <div className="zvezdeGranda-contentCenterReklama">
                        <img src={reklama} alt="reklama img" className="zvezdeGranda-reklamaImage"></img>
                    </div>
                    <div className="horoskop-contentCenterMain">
                        <div className="horoskop-contentCenterMainNews">
                            <HMainPopularNews />
                            <HPopularNews />
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
                <div className="horoskop-rightBanner">
                    <img src={banner_right} alt="banner_right" className="horoskop-rightBannerImage"></img>
                </div>
            </div>
        </div>
    )
}