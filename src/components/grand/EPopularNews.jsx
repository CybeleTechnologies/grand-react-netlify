import React from "react";
import popularNews from "../../data/popularNews"
import { EOnePopularNews } from "./EOnePopularNews";
import Pagination from 'react-bootstrap-4-pagination';

export const EPopularNews = () => {

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
      <section className="emisije-popularNews">
        <div className="emisije-popularNewsItems">
          {popularNews.map(el => {return <EOnePopularNews key={el.news_id} oneNews={el}/>}).slice(0, 12)}
        </div>
        <Pagination {...paginationConfig} />
      </section>
  );
};