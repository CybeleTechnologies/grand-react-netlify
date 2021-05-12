import React from "react";
import popularNews from "../../data/popularNews"
import { GOneMainPopularNews } from "./GOneMainPopularNews";

export const GMainPopularNews = () => {
  return (
      <section className="zvezdeGranda-popularNews">
      <div className="grandoskop-popularNewsMainTitle">
        <h5 className="grandoskop-popularNewsMainTitleText">Grandoskop</h5>
      </div>
        <div className="zvezdeGranda-popularMainNewsItems">
          {popularNews.map(el => {return <GOneMainPopularNews key={el.news_id} oneNews={el}/>}).slice(0, 3)}
        </div>
      </section>
  );
};