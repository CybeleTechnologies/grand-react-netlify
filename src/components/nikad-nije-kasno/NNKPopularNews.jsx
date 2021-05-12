import React from "react";
import popularNews from "../../data/popularNews"
import { NNKOnePopularNews } from "./NNKOnePopularNews";
import Pagination from 'react-bootstrap-4-pagination';

export const NNKPopularNews = () => {

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
      <section className="nikadNijeKasno-popularNews">
        <div className="nikadNijeKasno-popularNewsItems">
          {popularNews.map(el => {return <NNKOnePopularNews key={el.news_id} oneNews={el}/>}).slice(0, 12)}
        </div>
        <Pagination {...paginationConfig} />
      </section>
  );
};
