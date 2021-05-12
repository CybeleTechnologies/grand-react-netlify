import React from "react";
import popularNews from "../../data/popularNews"
import { EOneMainPopularNews } from "./EOneMainPopularNews";

export const EMainPopularNews = () => {
  return (
      <section className="zvezdeGranda-popularNews">
      <div className="emisije-popularNewsMainTitle">
        <h5 className="emisije-popularNewsMainTitleText">Emisije</h5>
      </div>
        <div className="zvezdeGranda-popularMainNewsItems">
          {popularNews.map(el => {return <EOneMainPopularNews key={el.news_id} oneNews={el}/>}).slice(0, 3)}
        </div>
      </section>
  );
};