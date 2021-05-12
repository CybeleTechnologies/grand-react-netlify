import React from "react";

export const ROnePopularNews = ({oneNews}) => {
  return (
      <div className="receptiPopularNewsItem">
        <div className="receptiPopularNews-image">
          <img
            src={oneNews.news_img}
            alt="receptiPopularNews img"
            className="receptiPopularNews-imageItem"
          />
        </div>
        <div className="receptiPopularNews-title">
            <span className="receptiPopularNews-titleText">{oneNews.news_title}</span>
        </div>
        <div className="receptiPopularNews-date">
            <span className="receptiPopularNews-dateText">{oneNews.news_date}</span>
        </div>
      </div>
  );
};