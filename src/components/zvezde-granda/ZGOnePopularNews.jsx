import React from "react";

export const ZGOnePopularNews = ({oneNews}) => {
  return (
      <div className="zvezdeGrandaPopularNewsItem">
        <div className="zvezdeGrandaPopularNews-image">
          <img
            src={oneNews.news_img}
            alt="zvezdeGrandaPopularNews img"
            className="zvezdeGrandaPopularNews-imageItem"
          />
        </div>
        <div className="zvezdeGrandaPopularNews-title">
            <span className="zvezdeGrandaPopularNews-titleText">{oneNews.news_title}</span>
        </div>
        <div className="zvezdeGrandaPopularNews-date">
            <span className="zvezdeGrandaPopularNews-dateText">{oneNews.news_date}</span>
        </div>
      </div>
  );
};