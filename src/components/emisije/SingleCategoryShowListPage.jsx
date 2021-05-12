import React from 'react';
import styled from 'styled-components/macro'
import {Link, useParams} from "react-router-dom"
import {NavBar} from "../navbar/NavBar";
import {NavTrack} from "../navbar/NavTrack";
import banner_left from "../../assets/images/sanja_levo.jpg";
import banner_right from "../../assets/images/voja_desno.jpg";
import zvezdeGranda from "../../assets/images/zvezdeGrandaEmisije.jpg";
import {Footer} from "../footer/Footer";
import VideoPlayer from "../video-player/VideoPlayer";
import {colors} from "../../scss_variables";

const StickyPost = styled(({className, thumb, date, title, text}) => {
    return <div className={className}>
        <div className="thumb">
            {/*<img src={thumb} alt="Zvezde Granda"/>*/}
            <VideoPlayer thumb={thumb} />
        </div>
        <div className="info">
            <span className="date">{date}</span>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    </div>
})`
  display: grid;
  gap:1rem;
  padding:2rem 0;
  .date {
    display: inline-block;
    margin-bottom:1rem;
    font-size:13px;
    font-weight:bold;
  }
  h4 {
    font-weight:bold;
  }
  p {
    margin:1.5rem 0;
  }
  img {
    display: block;
    width:100%;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1500px) {
    grid-template-columns: 3fr 2fr;
  }
  .thumb {
    
  }
`
const VideoPostList = styled(({className, children}) => {
    return <div className={className}>
        {children}
    </div>
})`
  display:grid;
  gap:1rem;
  margin-bottom:2rem;
  img {
    display: block;
    width:100%;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
const VideoPost = styled(({className, thumb, title, date}) => {
    return <div className={className}>
        <div className="thumb">
            <img src={thumb} alt="Zvezde Granda"/>
        </div>
        <div className="info">
            <span className="date">{date}</span>
            <h5><Link to="/">{title}</Link></h5>
        </div>
    </div>
})`
    h5 {
      margin:.5rem 0;
      a {
        color: ${colors.secondaryColor1};
        text-decoration:none;
        font-size:1.2rem;
      }
    }
  .date {
    display: inline-block;
    font-size:13px;
    margin-top:.6rem;
    font-weight: bold;
  }
`

const SingleCategoryShowListPage = styled(({className}) => {
    const { category } = useParams()
    console.log(category)
    return (
        <div className={className}>
            <NavBar />
            <NavTrack />
            <div className="content">
                <div className="showbizz-leftBanner">
                    <img
                        src={banner_left}
                        alt="banner_left"
                        className="showbizz-leftBannerImage"
                    />
                </div>
                <div className="showbizz-rightBanner">
                    <img
                        src={banner_right}
                        alt="banner_right"
                        className="showbizz-rightBannerImage"
                    />
                </div>
                <div className="content-center">
                    <div className="inner-content">
                        <StickyPost
                            date="20.05.2021"
                            title="OZEZI Kolo podrske, kamera iznenadjenja i skidanje na sceni obelezili ZVEZDE GRANDA"
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam doloremque molestias nesciunt nobis perferendis, ratione?"
                            thumb={zvezdeGranda}
                        />
                        <VideoPostList>
                            <VideoPost
                                date="20.05.2021"
                                title="Lorem ipsum dolor"
                                thumb={zvezdeGranda}
                            />
                            <VideoPost
                                date="20.05.2021"
                                title="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                                thumb={zvezdeGranda}
                            />
                            <VideoPost
                                date="20.05.2021"
                                title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, voluptas?"
                                thumb={zvezdeGranda}
                            />
                            <VideoPost
                                date="20.05.2021"
                                title="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                                thumb={zvezdeGranda}
                            />
                            <VideoPost
                                date="20.05.2021"
                                title="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                                thumb={zvezdeGranda}
                            />
                            <VideoPost
                                date="20.05.2021"
                                title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, voluptas?"
                                thumb={zvezdeGranda}
                            />
                            <VideoPost
                                date="20.05.2021"
                                title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, voluptas?"
                                thumb={zvezdeGranda}
                            />
                            <VideoPost
                                date="20.05.2021"
                                title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, voluptas?"
                                thumb={zvezdeGranda}
                            />
                        </VideoPostList>
                        <button className="btn more">Ucitaj jos sadrzaja</button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
})`
  width: 100%;
  background-color: #ffffff;
  padding-top: 50px;
  .more {
    font-size:14px;
    font-weight:bold;
    background-color:${colors.primaryColor3};
    color:white;
    max-width:200px;
    margin:auto;
  }
  .inner-content {
    padding-top:50px;
    display: grid;
    grid-template-columns: 1fr;
  }
  .content-center {
    margin: auto;
    box-sizing: border-box;
    padding-top: 1rem;
    padding-bottom:2rem;
  }
`

SingleCategoryShowListPage.propTypes = {

};

export default SingleCategoryShowListPage;