import React from "react";
import popularNews from "../../data/popularNews"
import { PSOneMainPopularNews } from "./PSOneMainPopularNews";

export const PSMainPopularNews = () => {
  return (
      <section className="zvezdeGranda-popularNews">
        <div className="programskaSema-popularNewsMainTitle">
          <h5 className="programskaSema-popularNewsMainTitleText">Programska šema</h5>
        </div>
        <div className="zvezdeGranda-popularMainNewsItems">
          {popularNews.map(el => {return <PSOneMainPopularNews key={el.news_id} oneNews={el}/>}).slice(0, 3)}
        </div>
      </section>
  );
};