import React from 'react';
import styled from 'styled-components/macro'
import { Link } from "react-router-dom";
import postImage1 from "../../assets/images/80a5df72a537661c12e59ab3947f7f8e.jpg"

const posts = [
    {
        id:1,
        thumb: postImage1,
        title: "Djorde David otkrio zasto nosi suknje u ZVEZDAMA...",
        date: "20.12.2020"
    },
    {
        id:2,
        thumb: postImage1,
        title: "Djorde David otkrio zasto nosi suknje u ZVEZDAMA...",
        date: "20.12.2020"
    },
    {
        id:3,
        thumb: postImage1,
        title: "Djorde David otkrio zasto nosi suknje u ZVEZDAMA...",
        date: "20.12.2020"
    },
    {
        id:4,
        thumb: postImage1,
        title: "Djorde David otkrio zasto nosi suknje u ZVEZDAMA...",
        date: "20.12.2020"
    }
]

const RecentNews = styled(({className, title, news}) => {
    const newsList = news ? news : posts;
    return (
        <div className={className}>
            <h4>{title}</h4>
            <div className="news">
                {newsList && newsList.map((item) => {
                    return <div className="post">
                        <div className="thumb" style={{backgroundImage:`url(${item.thumb})`}} />
                        <div className="info">
                            <Link className="title" to={`/news/${item.id}`}>{item.title}</Link>
                            <span className="date">{item.date}</span>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
})`
  h4 {
    width:100%;
    font-weight:900;
    color:#525156;
    font-size:2rem;
    margin-bottom:1.5rem;
  }
  .news {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      flex-wrap:wrap;
    }
    @media screen and (min-width: 1500px) {
      flex-direction: column;
    }
  }
  .post {
    display:grid;
    grid-column-gap: .2rem;
    font-weight:bold;
    width:100%;
    @media screen and (min-width: 768px) {
      width:48%;
    }
    @media screen and (min-width: 1500px) {
      width:100%;
      grid-template-columns: 20% auto;
      font-weight:normal;
      height:97px;
    }
    &:nth-child(2n-1) {
      background: white;
    }
    &:nth-child(2n) {
      background: #f2f2f2;
    }
  }
  .thumb {
    background-size: cover;
    background-position:center;
    height:300px;
    @media screen and (min-width: 1500px) {
      height:auto;
    }
    img {
      width:100%;
      display: block;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding:.3rem .5rem;
    color:#525156;
    a {
      display: block;
      text-decoration: none;
      margin-bottom:.7rem;
      color:#525156;
      font-size:1.2em;
      @media screen and (min-width: 768px) {
        font-size:.8em;
      }
    }
    .date {
      font-size:.7em;
    }
  }
`

export default RecentNews;