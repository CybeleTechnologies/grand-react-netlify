import React from "react";
import { NavBar } from "../navbar/NavBar";
import banner_left from "../../assets/images/sanja_levo.jpg";
import banner_right from "../../assets/images/voja_desno.jpg";
import { Poll } from "./Poll";
import {News, NewsPost} from "./News";
import { Footer } from "../footer/Footer";
import { NavTrack } from "../navbar/NavTrack";
// import { PopularNews } from "./PopularNews";
import { Shows } from "./Shows";
// import { MostReadNews } from "./MostReadNews";
import { ShowbizzCarousel } from "./ShowbizzCarousel";
import ImageGallerySlider from "../imageGallerySlider/ImageGallerySlider";
import VideoPlayer, {PlayIcon} from "../video-player/VideoPlayer";
import showbizzImg1 from "../../assets/images/de22b6bc325b4cc3593b7cf7252bf0c156c2b28e.jpg";
import showbizzImg2 from "../../assets/images/c3b7d134fc9268bee50baab49ec1f2c07b2e2a65.jpg";
import showbizzImg3 from "../../assets/images/9ee9aae3a19b81f777a5447e81cda96b266999f7.jpg";
import showbizzImg4 from "../../assets/images/5e457019b10d0855da8ec84e2c61d71d49a10484.jpg";
import RecentNews from "../post/RecentNews";

export const Showbizz = () => {
  return (
    <div className="showbizz">
      <NavBar />
      <NavTrack />
      <div className="showbizz-content">
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
        <div className="showbizz-contentCenter">
          <div className="inner-content showbizz-contentCenterCarousel">
            <ShowbizzCarousel />
            <Poll />
          </div>
          <div className="inner-content showbizz-contentCenterNews">
            <News>
              <NewsPost
                  image={{src: showbizzImg1, alt: "showbizz img1"}}
                  category={{text:"Nikad nije kasno"}}
                  date="20.12.2020"
                  title="Znamo ga kao markantnog, ali nekada je furao TOTALNO DRUGI STIL!"
                  link="/posts/1"
              />
              <NewsPost
                  image={{src: showbizzImg2, alt: "showbizz img1"}}
                  category={{text:"Recepti", bgColor:"#886C52"}}
                  date="20.12.2020"
                  title="PENE SA TUNJEVINOM - Odlican izbor u danima posta"
              />
              <NewsPost
                  image={{src: showbizzImg3, alt: "showbizz img1"}}
                  category={{text:"Horoskop", bgColor:"#3774A6"}}
                  date="20.12.2020"
                  title="STA DONOSI NOVAC, A STA LJUBAV: Pogledajte koji nakit pristaje vasem horoskopskom znaku"
              />
              <NewsPost
                  image={{src: showbizzImg4, alt: "showbizz img1"}}
                  category={{text:"Grand", bgColor:"#B17216"}}
                  date="20.12.2020"
                  title="PREMIJERA Bombardovanje pravim rokenrolom, ali i dirljivim scenama iz '99 (VIDEO)"
              />
            </News>
          </div>
        </div>
          <div className="showbizz-slider-video fluid-all">
            <div className="inner-content showbizz-contentCenterPopularNews">
              {/*<PopularNews />*/}
              <div className="slider-news">
                <ImageGallerySlider position="right" />
              </div>
              <div className="video">
                <VideoPlayer playBtn={<PlayIcon withText="Video dana" />} />
              </div>
            </div>
          </div>
        <div className="showbizz-contentCenter">
          <div className="inner-content showbizz-contentCenterSecond">
            {/*<div className="showbizz-contentCenterShows">*/}
            {/*  <Shows />*/}
            {/*</div>*/}
            {/*<div className="showbizz-contentCenterMostReadNews">*/}
            {/*  <MostReadNews />*/}
            {/*</div>*/}
            <News title="Najpopularnije" >
              <NewsPost
                  image={{src: showbizzImg1, alt: "showbizz img1"}}
                  category={{text:"Nikad nije kasno"}}
                  date="20.12.2020"
                  title="Znamo ga kao markantnog, ali nekada je furao TOTALNO DRUGI STIL!"
                  link="/posts/1"
              />
              <NewsPost
                  image={{src: showbizzImg2, alt: "showbizz img1"}}
                  category={{text:"Recepti", bgColor:"#886C52"}}
                  date="20.12.2020"
                  title="PENE SA TUNJEVINOM - Odlican izbor u danima posta"
              />
              <NewsPost
                  image={{src: showbizzImg3, alt: "showbizz img1"}}
                  category={{text:"Horoskop", bgColor:"#3774A6"}}
                  date="20.12.2020"
                  title="STA DONOSI NOVAC, A STA LJUBAV: Pogledajte koji nakit pristaje vasem horoskopskom znaku"
              />
              <NewsPost
                  image={{src: showbizzImg4, alt: "showbizz img1"}}
                  category={{text:"Grand", bgColor:"#B17216"}}
                  date="20.12.2020"
                  title="PREMIJERA Bombardovanje pravim rokenrolom, ali i dirljivim scenama iz '99 (VIDEO)"
              />
              <NewsPost
                  image={{src: showbizzImg1, alt: "showbizz img1"}}
                  category={{text:"Nikad nije kasno"}}
                  date="20.12.2020"
                  title="Znamo ga kao markantnog, ali nekada je furao TOTALNO DRUGI STIL!"
              />
              <NewsPost
                  image={{src: showbizzImg2, alt: "showbizz img1"}}
                  category={{text:"Recepti", bgColor:"#886C52"}}
                  date="20.12.2020"
                  title="PENE SA TUNJEVINOM - Odlican izbor u danima posta"
              />
              <NewsPost
                  image={{src: showbizzImg3, alt: "showbizz img1"}}
                  category={{text:"Horoskop", bgColor:"#3774A6"}}
                  date="20.12.2020"
                  title="STA DONOSI NOVAC, A STA LJUBAV: Pogledajte koji nakit pristaje vasem horoskopskom znaku"
              />
              <NewsPost
                  image={{src: showbizzImg4, alt: "showbizz img1"}}
                  category={{text:"Grand", bgColor:"#B17216"}}
                  date="20.12.2020"
                  title="PREMIJERA Bombardovanje pravim rokenrolom, ali i dirljivim scenama iz '99 (VIDEO)"
              />
            </News>
          </div>
          <div className="showbizz-shows fluid-all">
            <div className="inner-content">
              <div className="showbizz-show-content">
                <Shows />
                <RecentNews title="Najnovije vesti" />
              </div>
            </div>
          </div>
          {/*<div className="showbizz-contentCenterFooter">*/}
            <Footer />
          </div>
        {/*</div>*/}
      </div>
    </div>
  );
};
