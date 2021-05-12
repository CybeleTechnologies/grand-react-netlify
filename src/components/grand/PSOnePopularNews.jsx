import React from "react";

export const PSOnePopularNews = ({oneNews}) => {
  return (
      <div className="programskaSemaPopularNewsItem">
        <div className="programskaSemaPopularNews-image">
          <img
            src={oneNews.news_img}
            alt="programskaSemaPopularNews img"
            className="programskaSemaPopularNews-imageItem"
          />
        </div>
        <div className="programskaSemaPopularNews-title">
            <span className="programskaSemaPopularNews-titleText">{oneNews.news_title}</span>
        </div>
        <div className="programskaSemaPopularNews-date">
            <span className="programskaSemaPopularNews-dateText">{oneNews.news_date}</span>
        </div>
      </div>
  );
};