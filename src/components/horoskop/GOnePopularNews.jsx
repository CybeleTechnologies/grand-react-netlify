import React from "react";

export const GOnePopularNews = ({oneNews}) => {
  return (
      <div className="grandoskopPopularNewsItem">
        <div className="grandoskopPopularNews-image">
          <img
            src={oneNews.news_img}
            alt="grandoskopPopularNews img"
            className="grandoskopPopularNews-imageItem"
          />
        </div>
        <div className="grandoskopPopularNews-title">
            <span className="grandoskopPopularNews-titleText">{oneNews.news_title}</span>
        </div>
        <div className="grandoskopPopularNews-date">
            <span className="grandoskopPopularNews-dateText">{oneNews.news_date}</span>
        </div>
      </div>
  );
};