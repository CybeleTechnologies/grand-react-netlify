import React from "react";

export const EOnePopularNews = ({oneNews}) => {
  return (
      <div className="emisijePopularNewsItem">
        <div className="emisijePopularNews-image">
          <img
            src={oneNews.news_img}
            alt="emisijePopularNews img"
            className="emisijePopularNews-imageItem"
          />
        </div>
        <div className="emisijePopularNews-title">
            <span className="emisijePopularNews-titleText">{oneNews.news_title}</span>
        </div>
        <div className="emisijePopularNews-date">
            <span className="emisijePopularNews-dateText">{oneNews.news_date}</span>
        </div>
      </div>
  );
};