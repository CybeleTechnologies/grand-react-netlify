import React from "react";
import popularNews from "../../data/popularNews"
import { HOneMainPopularNews } from "./HOneMainPopularNews";

export const HMainPopularNews = () => {
  return (
      <section className="zvezdeGranda-popularNews">
      <div className="horoskop-popularNewsMainTitle">
        <h5 className="horoskop-popularNewsMainTitleText">Horoskop</h5>
      </div>
        <div className="zvezdeGranda-popularMainNewsItems">
          {popularNews.map(el => {return <HOneMainPopularNews key={el.news_id} oneNews={el}/>}).slice(0, 3)}
        </div>
      </section>
  );
};