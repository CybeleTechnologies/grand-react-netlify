import React from "react";

export const OneTopNews = ({oneNews}) => {
  return (
      <div className="zvezdeGrandaNewsItem">
        <div className="zvezdeGrandaNews-image">
          <img
            src={oneNews.news_img}
            alt="zvezdeGrandaNews img"
            className="zvezdeGrandaNews-imageItem"
          />
        </div>
        <div className="zvezdeGrandaNews-title">
            <span className="zvezdeGrandaNews-titleText">{oneNews.news_title}</span>
        </div>
      </div>
  );
};
