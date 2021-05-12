import React from 'react';
import instagram from "../../assets/logos/instagram-brands.svg";
import facebook from "../../assets/logos/facebook-f-brands.svg";
import youtube from "../../assets/logos/youtube-brands.svg";
import twitter from "../../assets/logos/twitter-brands.svg";
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa"

export const NavTrack = () => {
    return (
        <div className="nav-track">
        <div className="nav-track-program">
            Trenutno na programu: <span className="nav-track-programItem">Zvezde Granda</span>
        </div>
        <div className="nav-track-social">
            Pratite nas: 
            {/*<img src={facebook} alt="facebook icon" className="nav-track-social-icon"></img>*/}
            {/*<img src={instagram} alt="instagram icon" className="nav-track-social-icon"></img>*/}
            {/*<img src={youtube} alt="youtube icon" className="nav-track-social-icon"></img>*/}
            {/*<img src={twitter} alt="twitter icon" className="nav-track-social-icon"></img>*/}
            <a href="#"><FaFacebookF color="#E44326" size="20" /></a>
            <a href="#"><FaTwitter color="#E44326" size="25" /></a>
            <a href="#"><FaInstagram color="#E44326" size="25" /></a>
            <a href="#"><FaYoutube color="#E44326" size="35" /></a>
        </div>
    </div>
    )
}