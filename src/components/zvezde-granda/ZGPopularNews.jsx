import React from "react";
import popularNews from "../../data/popularNews"
import { ZGOnePopularNews } from "./ZGOnePopularNews";
import Pagination from 'react-bootstrap-4-pagination';

export const ZGPopularNews = () => {

  let paginationConfig = {
    totalPages: 7,
    currentPage: 3,
    showMax: 5,
    size: "sm",
    activeBorderColor: 'black',
    activeBgColor: 'grey',
    color: 'grey',
    onClick: function (page) {
       console.log(page);
     }
  };

  return (
      <section className="zvezdeGranda-popularNews">
        <div className="zvezdeGranda-popularNewsItems">
          {popularNews.map(el => {return <ZGOnePopularNews key={el.news_id} oneNews={el}/>}).slice(0, 12)}
        </div>
        <Pagination {...paginationConfig} />
      </section>
  );
};
