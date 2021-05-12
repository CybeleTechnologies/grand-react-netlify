import React from 'react';
import styled from "styled-components/macro"
import {NavBar} from "../navbar/NavBar";
import {NavTrack} from "../navbar/NavTrack";
import {Footer} from "../footer/Footer";
import SinglePost from "./SinglePost";
import PostInnerNav from "./PostInnerNav";
import { useParams } from "react-router-dom"
import banner_left from "../../assets/images/sanja_levo.jpg";
import banner_right from "../../assets/images/voja_desno.jpg";
import {News, NewsPost} from "../showbizz/News";
import showbizzImg1 from "../../assets/images/de22b6bc325b4cc3593b7cf7252bf0c156c2b28e.jpg";
import showbizzImg2 from "../../assets/images/c3b7d134fc9268bee50baab49ec1f2c07b2e2a65.jpg";
import showbizzImg3 from "../../assets/images/9ee9aae3a19b81f777a5447e81cda96b266999f7.jpg";
import showbizzImg4 from "../../assets/images/5e457019b10d0855da8ec84e2c61d71d49a10484.jpg";

const links = [
    {
        label: "vesti",
        link: "/vesti"
    },
    {
        label: "emisije",
        link: "/emisije/grand"
    },
    {
        label: "video",
        link: "/video/grand"
    },
    {
        label:"takmcari",
        link: "/grand/takmicari"
    },
    {
        label: "ziri",
        link: "/grand/ziri"
    },
    {
        label: "voditelji",
        link: "grand/voditelji"
    }
]

const PostPage = styled(({className}) => {
    const {id} = useParams();
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
                <PostInnerNav links={links} />
                <div className="content-center">
                    <div className="inner-content">
                        <SinglePost id={id} />
                        <div className="sidebar">
                            <h3>Najcitanije Vesti</h3>
                            <News>
                                <NewsPost
                                    image={{src: showbizzImg1, alt: "showbizz img1"}}
                                    date="20.12.2020"
                                    title="Znamo ga kao markantnog, ali nekada je furao TOTALNO DRUGI STIL!"
                                />
                                <NewsPost
                                    image={{src: showbizzImg2, alt: "showbizz img1"}}
                                    date="20.12.2020"
                                    title="PENE SA TUNJEVINOM - Odlican izbor u danima posta"
                                />
                                <NewsPost
                                    image={{src: showbizzImg3, alt: "showbizz img1"}}
                                    date="20.12.2020"
                                    title="STA DONOSI NOVAC, A STA LJUBAV: Pogledajte koji nakit pristaje vasem horoskopskom znaku"
                                />
                                <NewsPost
                                    image={{src: showbizzImg4, alt: "showbizz img1"}}
                                    date="20.12.2020"
                                    title="PREMIJERA Bombardovanje pravim rokenrolom, ali i dirljivim scenama iz '99 (VIDEO)"
                                />
                            </News>
                        </div>
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
    gap:1rem;
    grid-template-columns: 1fr;
    @media screen and (min-width: 1200px) {
      grid-template-columns: 2fr 1fr;
    }
  }
  .content-center {
    margin: auto;
    box-sizing: border-box;
    padding-top: 1rem;
  }
  .sidebar {
    padding:0 1rem;
    h3 {
      padding:1rem;
      background-color:#dda92f;
      color:white;
      font-size:calc(13px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  ${News} {
    display:block !important;
    ${NewsPost} {
      width:100% !important;
    }
  }
`

export default PostPage;