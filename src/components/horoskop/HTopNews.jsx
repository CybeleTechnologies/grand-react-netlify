import React from "react";
import news from "../../data/news";
import { HOneTopNews } from "./HOneTopNews";
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use( Pagination );

export const HTopNews = () => {
  return (
    <Swiper
    spaceBetween={10}
    breakpoints={{
      // when window width is >= 640px
      640: {
        width: 640,
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        width: 768,
        slidesPerView: 2,
      },
    }}
    pagination={{ clickable: true }}
    >
    <section className="zvezdeGrandaNews">
        {news.map(el => {return <SwiperSlide key={el.news_id}><HOneTopNews key={el.news_id} oneNews={el}/></SwiperSlide>})}
    </section>
    </Swiper>
  );
};