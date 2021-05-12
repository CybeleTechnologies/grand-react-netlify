import React from 'react';
import { NavBar } from '../navbar/NavBar';
import banner_left from "../../assets/images/vesna_levo.jpg";
import banner_right from "../../assets/images/dragana_desno.jpg";
import reklama from "../../assets/images/reklama.jpg";
import { NavTrack } from "../navbar/NavTrack";
import { EPopularNews } from './EPopularNews';
import { Footer } from '../footer/Footer';
import { ETopNews } from './ETopNews';
import { Premijera } from './Premijera';
import { SlikaDana } from './SlikaDana';
import { Facebook } from './Facebook';
import { EMainPopularNews } from './EMainPopularNews';

export const Emisije = () => {
    return (
        <div className="emisije">
            <div className="emisije-navigation">
                <NavBar />
                <NavTrack />
            </div>
            <div className="emisije-content">
                <div className="emisije-leftBanner">
                    <img src={banner_left} alt="banner_left" className="emisije-leftBannerImage"></img>
                </div>
                <div className="emisije-contentCenter">
                    <ETopNews />
                    <div className="zvezdeGranda-contentCenterReklama">
                        <img src={reklama} alt="reklama img" className="zvezdeGranda-reklamaImage"></img>
                    </div>
                    <div className="emisije-contentCenterMain">
                        <div className="emisije-contentCenterMainNews">
                            <EMainPopularNews />
                            <EPopularNews />
                        </div>
                        <div className="emisije-contentCenterPromotions">
                            <Premijera />
                            <SlikaDana />
                            <Facebook />
                        </div>
                    </div>
                    <div className="showbizz-contentCenterFooter">
                        <Footer />
                    </div>
                </div>
                <div className="emisije-rightBanner">
                    <img src={banner_right} alt="banner_right" className="emisije-rightBannerImage"></img>
                </div>
            </div>
        </div>
    )
}