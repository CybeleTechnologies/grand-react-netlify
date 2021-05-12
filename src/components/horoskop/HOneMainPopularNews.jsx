import React from "react";

export const HOneMainPopularNews = ({oneNews}) => {
  return (
      <div className="zvezdeGrandaOneMainPopularNewsItem">
        <div className="zvezdeGrandaOneMainPopularNews-image">
          <img
            src={oneNews.news_img}
            alt="zvezdeGrandaOneMainPopularNews img"
            className="zvezdeGrandaOneMainPopularNews-imageItem"
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