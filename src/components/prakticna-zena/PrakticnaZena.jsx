import React from 'react';
import { NavBar } from '../navbar/NavBar';
import banner_left from "../../assets/images/Prakticna_levo.jpg";
import banner_right from "../../assets/images/Prakticna_desno.jpg";
import reklama from "../../assets/images/reklama.jpg";
import { NavTrack } from "../navbar/NavTrack";
import { PZPopularNews } from './PZPopularNews';
import { Footer } from '../footer/Footer';
import { TopNews } from './TopNews';
import { PZFacebook } from './PZFacebook';
import { PZSlikaDana } from './PZSlikaDana';
import { PZPremijera } from './PZPremijera';
import { MainPopularNews } from './MainPopularNews';

export const PrakticnaZena = () => {
    return (
        <div className="prakticnaZena">
            <div className="prakticnaZena-navigation">
                <NavBar />
                <NavTrack />
            </div>
            <div className="prakticnaZena-content">
                <div className="prakticnaZena-leftBanner">
                    <img src={banner_left} alt="banner_left" className="prakticnaZena-leftBannerImage"></img>
                </div>
                <div className="prakticnaZena-contentCenter">
                    <TopNews />
                    <div className="zvezdeGranda-contentCenterReklama">
                        <img src={reklama} alt="reklama img" className="zvezdeGranda-reklamaImage"></img>
                    </div>
                    <div className="prakticnaZena-contentCenterMain">
                        <div className="prakticnaZena-contentCenterMainNews">
                            <MainPopularNews />
                            <PZPopularNews />
                        </div>
                        <div className="prakticnaZena-contentCenterPromotions">
                            <PZPremijera />
                            <PZSlikaDana />
                            <PZFacebook />
                        </div>
                    </div>
                    <div className="showbizz-contentCenterFooter">
                        <Footer />
                    </div>
                </div>
                <div className="prakticnaZena-rightBanner">
                    <img src={banner_right} alt="banner_right" className="prakticnaZena-rightBannerImage"></img>
                </div>
            </div>
        </div>
    )
}