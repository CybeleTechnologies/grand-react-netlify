import React from 'react';
import styled from 'styled-components/macro'
import imagePost from '../../assets/images/a75d2b7b743ef29916a971288b31515675d69e19.jpg'
import {News, NewsPost} from "../showbizz/News";
import showbizzImg1 from "../../assets/images/de22b6bc325b4cc3593b7cf7252bf0c156c2b28e.jpg";
import showbizzImg2 from "../../assets/images/c3b7d134fc9268bee50baab49ec1f2c07b2e2a65.jpg";
import showbizzImg3 from "../../assets/images/9ee9aae3a19b81f777a5447e81cda96b266999f7.jpg";
import showbizzImg4 from "../../assets/images/5e457019b10d0855da8ec84e2c61d71d49a10484.jpg";

const PostInfo = styled(({className, postTitle, postDate}) => {
    return <div className={className}>
        <h2>{postTitle}</h2>
        <span>{postDate}</span>
    </div>
})`
  color:#525156;
  margin-bottom:2rem;
  h2 {
    font-weight: bold;
  }
  padding-bottom:1.5rem;
  border-bottom:1px solid #d6d6d6;
`
const PostContent = styled.section`
  img {
    display:block;
    width:100%;
    margin:1.5rem auto;
  }
  p {
    color:#515153;
    line-height:1.7rem;
  }
`

const SinglePost = styled(({className, id}) => {
    return (
        <div className={className}>
                <PostInfo
                    postTitle="Od tinejdz plavuse do najpozeljnije crnke na estradi! Sve TRANSFORMACIJE Katarine Zivovic (FOTO)"
                    postDate="23.04.2021"
                />
                <PostContent>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut commodi delectus esse neque rerum totam voluptas. Beatae deleniti dolore earum illo in officiis sequi sint sunt. Aliquid, cumque, error.</p>
                    <img src={imagePost} alt="Some alt"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad animi corporis dolore eius esse fugit laudantium molestias numquam officia quibusdam rem repellat temporibus, totam, velit. Commodi debitis doloremque exercitationem in, magni nam numquam quasi ratione rem sed, sint sunt.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda aut consequatur deleniti dolorem, doloremque ea harum iste itaque molestias, nobis perspiciatis placeat provident qui reiciendis rem similique sit sunt.</p>
                </PostContent>
                <div className="read-more-posts">
                    <h4>Procitajte jos:</h4>
                    <span>Kaca Zivkovic zestoko branila koleginicu! "AKO MOZE MADONA ZASTO NE BI MOGLA I ONA?"</span>
                    <span>Brutala ispovest Katarine Zivkovic - KADA SAM GA ODBILA, ZVEKNULA MI JE SAMARCINU</span>
                </div>
                <div className="post-autor">Autor: <strong>S.Cumic</strong></div>
                <div className="tags">
                    <span>TagOne</span>
                    <span>TagTwo</span>
                    <span>TagThree</span>
                </div>
        </div>
    );
})`
  .read-more-posts {
    h4 {
      font-size:initial;
      font-weight: bold;
      text-transform: uppercase;
      color:#303030;
    }
    span {
      display: block;
      font-weight:bold;
      color: #dda92f;
      margin:1.5rem 0;
    }
    border-bottom: 1px solid #d6d6d6;
  }
  .post-autor {
    margin:2rem 0;
  }
  .tags {
    span {
      display:inline-block;
      padding:.3rem .5rem;
      background-color:#dda92f;
      color:white;
      margin-right:1rem;
      font-size:13px;
      font-weight:bold;
    }
  }
`

export default SinglePost;