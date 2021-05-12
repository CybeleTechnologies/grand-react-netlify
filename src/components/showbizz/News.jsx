import React from "react";
import styled from "styled-components/macro"
import showbizzImg1 from "../../assets/images/de22b6bc325b4cc3593b7cf7252bf0c156c2b28e.jpg";
import showbizzImg2 from "../../assets/images/c3b7d134fc9268bee50baab49ec1f2c07b2e2a65.jpg";
import showbizzImg3 from "../../assets/images/9ee9aae3a19b81f777a5447e81cda96b266999f7.jpg";
import showbizzImg4 from "../../assets/images/5e457019b10d0855da8ec84e2c61d71d49a10484.jpg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
// import news from "../../data/news";

export const NewsSlider = () => {
  return (
    <Swiper
    spaceBetween={10}
    breakpoints={{
      // when window width is >= 250px
      250: {
        width: 250,
        slidesPerView: 1.5,
      },
      // when window width is >= 640px
      640: {
        width: 640,
        slidesPerView: 2,
      },
      // when window width is >= 768px
      768: {
        width: 768,
        slidesPerView: 3,
        watchOverflow: true,
      },
       // when window width is >= 1200px
       1200: {
        width: 1000,
        slidesPerView: 4,
        watchOverflow: true,
      },
    }}
    >
    <section className="showbizz-news">
    <SwiperSlide>
      <div className="showbizz-newsItems">
      <Link to="/newsTest">
        <div className="showbizz-newsBrand">
          <p className="showbizz-newsBrandText showbizz-nikadNijeKasno">NIKAD NIJE KASNO</p>
        </div>
        <div className="showbizz-newsItemsImage">
          <img
            src={showbizzImg1}
            alt="showbizz img1"
            className="showbizz-newsItem"
          />
        </div>
        <div className="showbizz-newsTitle">
          <span className="showbizz-newsItemTitle">Znamo ga kao markantnog, ali nekada je furao TOTALNO DRUGI STIL!</span>
        </div>
      </Link>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="showbizz-newsItems">
        <div className="showbizz-newsBrand">
          <p className="showbizz-newsBrandText showbizz-grand">GRAND</p>
        </div>
        <div className="showbizz-newsItemsImage">
          <img
            src={showbizzImg2}
            alt="showbizz img2"
            className="showbizz-newsItem"
          />
        </div>
        <div className="showbizz-newsTitle">
            <span className="showbizz-newsItemTitle">Zoran Pejić Peja otvoreno o braku: "Žena mi UVEK OBUVA ČARAPE!"</span>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="showbizz-newsItems">
        <div className="showbizz-newsBrand">
          <p className="showbizz-newsBrandText showbizz-grand">GRAND</p>
        </div>
        <div className="showbizz-newsItemsImage">
          <img
            src={showbizzImg3}
            alt="showbizz img3"
            className="showbizz-newsItem"
          />
        </div>
        <div className="showbizz-newsTitle">
            <span className="showbizz-newsItemTitle">PONOVO NA NOGAMA! Amadeus bend se DIŽE IZ PEPELA i nastavlja</span>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="showbizz-newsItems">
        <div className="showbizz-newsBrand">
          <p className="showbizz-newsBrandText showbizz-grand">GRAND</p>
        </div>
        <div className="showbizz-newsItemsImage">
          <img
            src={showbizzImg4}
            alt="showbizz img4"
            className="showbizz-newsItem"
          />
        </div>
        <div className="showbizz-newsTitle">
            <span className="showbizz-newsItemTitle">Pevač godinu dana živi u KOLIBI, završio u ZATVORU i zakukao</span>
        </div>
      </div>
      </SwiperSlide>
    </section>
    </Swiper>
  );
};

export const NewsPost = styled(({className, image, title, date, category, link}) => {
  return <div className={className}>
    { category?.text ? <span>{category.text}</span> : null}
    <div className="image">
      <img src={image?.src} alt={image?.alt}/>
    </div>
    <div className="info">
      <span>{date}</span>
      <h5><Link to={link}>{title}</Link></h5>
    </div>
  </div>
})`
  display: flex;
  flex-direction: column;
  width:100%;
  margin-bottom:1.5rem;
  > span {
    display: inline-block;
    position:absolute;
    padding:.5rem 1rem;
    text-transform: uppercase;
    background: ${props => props.category?.bgColor ? props.category.bgColor : "#E44326"};
    color: ${props => props.category?.color ? props.category.color : "white"};
    font-size: .8em;
    @media screen and (min-width: 1600px) {
      font-size:.7em;
    }
    font-weight:bold;
  }
  img {
    display: block;
    width:100%;
    margin-bottom:1rem;
  }
  .info {
    color: #515153;
    font-weight:bold;
    padding:0 .7rem;
    span {
      display: inline-block;
      font-size:.8em;
      margin-bottom:.7rem;
    }
    h5 {
      font-size:1em;
      font-weight: bold;
      margin:0;
      a {
        color:inherit;
        text-decoration: none;
      }
    }
  }
`
export const News = styled(({children,className, title}) => {
  return <div className={className}>
    {title && <h3>{title}</h3>}
    {children}
  </div>
})`
  display: flex;
  width:100%;
  justify-content: space-between;
  margin:2rem 0;
  flex-wrap:wrap;
  h3 {
    width:100%;
    font-weight:900;
    color:#E44326;
    font-size:2rem;
    margin-bottom:1.5rem;
  }
  ${NewsPost} {
    width:100%;
    @media screen and (min-width: 768px) {
      width:48% !important;
    }
    //@media screen and (min-width: 992px) {
    //  width: 33% !important;
    //}
    @media screen and (min-width: 1600px) {
      width:24% !important;
    }
  }
`
