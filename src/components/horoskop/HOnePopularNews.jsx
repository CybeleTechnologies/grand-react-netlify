import React from "react";

export const HOnePopularNews = ({oneNews}) => {
  return (
      <div className="horoskopPopularNewsItem">
        <div className="horoskopPopularNews-image">
          <img
            src={oneNews.news_img}
            alt="horoskopPopularNews img"
            className="horoskopPopularNews-imageItem"
          />
        </div>
        <div className="horoskopPopularNews-title">
            <span className="horoskopPopularNews-titleText">{oneNews.news_title}</span>
        </div>
        <div className="horoskopPopularNews-date">
            <span className="horoskopPopularNews-dateText">{oneNews.news_date}</span>
        </div>
      </div>
  );
};