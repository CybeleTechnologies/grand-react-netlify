import React from "react";
import popularNews from "../../data/popularNews"
import { OneMainPopularNews } from "./OneMainPopularNews";

export const MainPopularNews = () => {
  return (
      <section className="zvezdeGranda-popularNews">
     <div className="prakticnaZena-popularNewsMainTitle">
        <h5 className="prakticnaZena-popularNewsMainTitleText">Praktična žena</h5>
      </div>
        <div className="zvezdeGranda-popularMainNewsItems">
          {popularNews.map(el => {return <OneMainPopularNews key={el.news_id} oneNews={el}/>}).slice(0, 3)}
        </div>
      </section>
  );
};