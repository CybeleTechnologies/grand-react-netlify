import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components/macro"
import {NavBar} from "../navbar/NavBar";
import {NavTrack} from "../navbar/NavTrack";
import banner_left from "../../assets/images/sanja_levo.jpg";
import banner_right from "../../assets/images/voja_desno.jpg";
import zvezdeGranda from "../../assets/images/zvezdeGrandaEmisije.jpg"
import nikadNijeKasno from "../../assets/images/nikadNijeKasnoEmisije.jpg"
import recepti from "../../assets/images/receptiEmisije.jpg"
import {Footer} from "../footer/Footer";
import VideoPlayer from "../video-player/VideoPlayer";
import {PlayIcon} from "../video-player/VideoPlayer";
// import video from "../../assets/video/lostonyou.mp4";
import { colors } from "../../scss_variables";
import { Link } from "react-router-dom"

const video = "https://www.youtube.com/watch?v=PcH-uLdJ-98"

const shows = {
    zvezdeGranda: [
        {
            url: video,
            thumb: zvezdeGranda
        },
        {
            url: video,
            thumb: zvezdeGranda
        },
        {
            url: video,
            thumb: zvezdeGranda
        },
        {
            url: video,
            thumb: zvezdeGranda
        }
    ],
    nikadNijeKasno: [
        {
            url: video,
            thumb: nikadNijeKasno
        },
        {
            url: video,
            thumb: nikadNijeKasno
        },
        {
            url: video,
            thumb: nikadNijeKasno
        },
        {
            url: video,
            thumb: nikadNijeKasno
        }
    ],
    recepti: [
        {
            url: video,
            thumb: recepti
        },
        {
            url: video,
            thumb: recepti
        },
        {
            url: video,
            thumb: recepti
        },
        {
            url: video,
            thumb: recepti
        }
    ]
}

const ShowsCategories = styled(({className, children}) => {
    return <div className={className}>
        {children}
    </div>
})`
  width:100%;
`

const ShowCategory = styled(({className, thumb, title, text, shows, category, url}) => {
    return <div className={className}>
        <div className="thumb">
            <img src={thumb} alt="Zvezde Granda"/>
        </div>
        <div className="info">
            <h4 style={{color: category=== "zvezde granda" ? colors.zvezdeGranda : category === "nikad nije kasno" ? colors.nikadNijeKasno : category === "recepti" ? colors.recepti : colors.primaryColor1 }}>{title}</h4>
            <p>{text}</p>
            <div className="recent-shows">
                {shows && shows.length > 0 ? shows.map((show) => {
                    return <VideoPlayer videoUrl={show.url} thumb={show.thumb} playBtn={<PlayIcon width="30px" height="30px" size="20" centering="1px" />} />
                }) : null}
            </div>
           <div className="actions">
               <Link to={url} style={{backgroundColor: category=== "zvezde granda" ? colors.zvezdeGranda : category === "nikad nije kasno" ? colors.nikadNijeKasno : category === "recepti" ? colors.recepti : colors.primaryColor1}} className="btn">Pogledaj vise</Link>
           </div>
        </div>
    </div>
})`
  display:grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding:2rem 0;
  border-bottom:${props => props.lastChild ? "none" : `1px solid ${colors.primaryColor6}`};
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  img {
    display:block;
    width:100%;
  }
  h4 {
    text-transform: uppercase;
    font-weight:bold;
  }
  p {
    margin:1.5rem 0;
    line-height:1.6rem;
    color: ${colors.secondaryColor2}
  }
  .recent-shows {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media screen and (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);;
    }
    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);;
    }
    @media screen and (min-width:1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width:1600px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  .actions {
    margin:2rem 0 0 0;
    display: flex;
    justify-content: flex-end;
    a {
      color:white;
      font-size:14px;
      font-weight: bold;
    }
  }
  button {
    color:white;
    font-size:14px;
    font-weight: bold;
  }
`

const ShowsCategoryListPage = styled(({className}) => {
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
                        <ShowsCategories>
                            <ShowCategory
                                title="Zvezde Granda"
                                thumb={zvezdeGranda}
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facilis quae quas! Beatae deserunt doloremque eos esse facere impedit magnam neque officiis, perspiciatis provident quis quos repellat, vel. Facilis, qui."
                                shows={shows.zvezdeGranda}
                                category="zvezde granda"
                                url="/emisije/zvezde-granda"
                            />
                            <ShowCategory
                                title="Nikad Nije Kasno"
                                thumb={nikadNijeKasno}
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facilis quae quas! Beatae deserunt doloremque eos esse facere impedit magnam neque officiis, perspiciatis provident quis quos repellat, vel. Facilis, qui."
                                shows={shows.nikadNijeKasno}
                                category="nikad nije kasno"
                                url="/emisije/nikad-nije-kasno"
                            />
                            <ShowCategory
                                title="Recepti"
                                thumb={recepti}
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facilis quae quas! Beatae deserunt doloremque eos esse facere impedit magnam neque officiis, perspiciatis provident quis quos repellat, vel. Facilis, qui."
                                shows={shows.recepti}
                                category="recepti"
                                url="/emisije/recepti"
                                lastChild
                            />
                        </ShowsCategories>
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
  .inner-content {
    padding-top:50px;
    display: grid;
    grid-template-columns: 1fr;
  }
  .content-center {
    margin: auto;
    box-sizing: border-box;
    padding-top: 1rem;
  }
`

ShowCategory.propTypes = {
    title: PropTypes.string,
    thumb: PropTypes.object,
    text: PropTypes.string,
    shows: PropTypes.array,
    lastChild:PropTypes.bool
};


export default ShowsCategoryListPage;