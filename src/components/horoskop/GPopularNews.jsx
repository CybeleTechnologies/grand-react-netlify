import React from "react";
import popularNews from "../../data/popularNews"
import { GOnePopularNews } from "./GOnePopularNews";
import Pagination from 'react-bootstrap-4-pagination';

export const GPopularNews = () => {

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
      <section className="grandoskop-popularNews">
        <div className="grandoskop-popularNewsItems">
          {popularNews.map(el => {return <GOnePopularNews key={el.news_id} oneNews={el}/>}).slice(0, 12)}
        </div>
        <Pagination {...paginationConfig} />
      </section>
  );
};