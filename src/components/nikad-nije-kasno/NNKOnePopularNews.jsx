import React from "react";

export const NNKOnePopularNews = ({oneNews}) => {
  return (
      <div className="nikadNijeKasnoPopularNewsItem">
        <div className="nikadNijeKasnoPopularNews-image">
          <img
            src={oneNews.news_img}
            alt="nikadNijeKasnoPopularNews img"
            className="nikadNijeKasnoPopularNews-imageItem"
          />
        </div>
        <div className="nikadNijeKasnoPopularNews-title">
            <span className="nikadNijeKasnoPopularNews-titleText">{oneNews.news_title}</span>
        </div>
        <div className="nikadNijeKasnoPopularNews-date">
            <span className="nikadNijeKasnoPopularNews-dateText">{oneNews.news_date}</span>
        </div>
      </div>
  );
};