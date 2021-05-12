import React from "react";
import popularNews from "../../data/popularNews"
import { PSOnePopularNews } from "./PSOnePopularNews";
import Pagination from 'react-bootstrap-4-pagination';

export const PSPopularNews = () => {

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
      <section className="programskaSema-popularNews">
        <div className="programskaSema-popularNewsItems">
          {popularNews.map(el => {return <PSOnePopularNews key={el.news_id} oneNews={el}/>}).slice(0, 12)}
        </div>
        <Pagination {...paginationConfig} />
      </section>
  );
};