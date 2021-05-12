import React from 'react';
import { NavBar } from '../navbar/NavBar';
import banner_left from "../../assets/images/dragana_levo.jpg";
import banner_right from "../../assets/images/zika_desno.jpg";
import reklama from "../../assets/images/reklama.jpg";
import { NavTrack } from "../navbar/NavTrack";
import { NNKPopularNews } from './NNKPopularNews';
import { Footer } from '../footer/Footer';
import { TopNews } from './TopNews';
import { NNKPremijera } from './NNKPremijera';
import { NNKSlikaDana } from './NNKSlikaDana';
import { NNKFacebook } from './NNKFacebook';
import { MainPopularNews } from './MainPopularNews';

export const NikadNijeKasno = () => {
    return (
        <div className="nikadNijeKasno">
            <div className="nikadNijeKasno-navigation">
                <NavBar />
                <NavTrack />
            </div>
            <div className="nikadNijeKasno-content">
                <div className="nikadNijeKasno-leftBanner">
                    <img src={banner_left} alt="banner_left" className="nikadNijeKasno-leftBannerImage"></img>
                </div>
                <div className="nikadNijeKasno-contentCenter">
                    <TopNews />
                    <div className="zvezdeGranda-contentCenterReklama">
                        <img src={reklama} alt="reklama img" className="zvezdeGranda-reklamaImage"></img>
                    </div>
                    <div className="nikadNijeKasno-contentCenterMain">
                        <div className="nikadNijeKasno-contentCenterMainNews">
                            <MainPopularNews />
                            <NNKPopularNews />
                        </div>
                        <div className="nikadNijeKasno-contentCenterPromotions">
                            <NNKPremijera />
                            <NNKSlikaDana />
                            <NNKFacebook />
                        </div>
                    </div>
                    <div className="showbizz-contentCenterFooter">
                        <Footer />
                    </div>
                </div>
                <div className="nikadNijeKasno-rightBanner">
                    <img src={banner_right} alt="banner_right" className="nikadNijeKasno-rightBannerImage"></img>
                </div>
            </div>
        </div>
    )
}