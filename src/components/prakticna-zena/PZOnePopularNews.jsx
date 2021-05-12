import React from "react";

export const PZOnePopularNews = ({oneNews}) => {
  return (
      <div className="prakticnaZenaPopularNewsItem">
        <div className="prakticnaZenaPopularNews-image">
          <img
            src={oneNews.news_img}
            alt="prakticnaZenaPopularNews img"
            className="prakticnaZenaPopularNews-imageItem"
          />
        </div>
        <div className="prakticnaZenaPopularNews-title">
            <span className="prakticnaZenaPopularNews-titleText">{oneNews.news_title.substring(0, 90)}</span>
        </div>
        <div className="prakticnaZenaPopularNews-date">
            <span className="prakticnaZenaPopularNews-dateText">{oneNews.news_date}</span>
        </div>
      </div>
  );
};