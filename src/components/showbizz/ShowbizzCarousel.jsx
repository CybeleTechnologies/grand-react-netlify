import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr"
import carouselImg1 from "../../assets/images/0441d459c02d91dc8bbbe04d8a2d143c8ede027f.jpg";
import carouselImg2 from "../../assets/images/a75d2b7b743ef29916a971288b31515675d69e19.jpg";
import carouselImg3 from "../../assets/images/d398e60a4b6c6551f600659ccdb6a9172251a28f.jpg";
import carouselImg4 from "../../assets/images/f99437bda3b59540a69fa785cb76d682f9f15fce.jpg";
import carouselImg5 from "../../assets/images/0f4bbac0aae9422ed4b6a8073d3de2712088c3a1.jpg";
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components/macro'


const rawShowbizzCarousel = ({className}) => {

  return (
    <div className={`showbizz-carousel ${className}`}>
      <Carousel slide={true} interval={5000} prevIcon={<GrPrevious size="30" color="white" />} nextIcon={<GrNext size="30" color="white" />}>
        <Carousel.Item>
          <img className="d-block w-100" src={carouselImg1} alt="First slide" />
          <Carousel.Caption>
            <div className="carousel-captionDateTitle">
              <p>02.03.2021.</p>
              <h4>
                Nepoznati detalji sa svadbe Voje Nedeljkovića: "KAO PAPUČAR sam
                ušao u ovaj brak!"
              </h4>
              <span className="post-cat">Grand</span>
              <button className="btn btn-danger">Saznaj vise</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImg2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="carousel-captionDateTitle">
              <p>02.03.2021.</p>
              <h4>
                Nakon kritika da se izoperisala, pevačica poručila hejterima "JA
                GLEDAM U SVOJE DVORIŠTE A ONI..."
              </h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carouselImg3} alt="Third slide" />

          <Carousel.Caption>
            <div className="carousel-captionDateTitle">
              <p>01.03.2021.</p>
              <h4>
                SUZE ĆE VAM SAME KRENUTI Darko Lazić novu pesmu posvetio
                preminulom ocu (VIDEO)
              </h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carouselImg4} alt="Third slide" />

          <Carousel.Caption>
            <div className="carousel-captionDateTitle">
              <p>01.03.2021.</p>
              <h4>
                Ivana Peters otkrila svoj LJUBAVNI STATUS pa izjavila: ''Ljubav
                je POREMEĆAJ, to je treće stanje''
              </h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carouselImg5} alt="Third slide" />

          <Carousel.Caption>
            <div className="carousel-captionDateTitle">
              <p>02.03.2021.</p>
              <h4>
                Kaća Živković kadrovima iz teretane zapalila internet! Pevačica
                pokazala izvajano telo
              </h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export const ShowbizzCarousel = styled(rawShowbizzCarousel)`
  .carousel-indicators {
    li {
      width:10px;
      height:10px;
      border:2px solid white;
      border-radius:50%;
      background-color:transparent;
      margin-right:10px;
      &.active {
        background-color:white;
      }
    }
    @media screen and (min-width: 992px) {
      margin-bottom:30px;
    }
  }
  .carousel-caption {
    @media screen and (min-width: 992px) {
      bottom:50%;
      transform:translateY(50%);
      button {
        display: block;
        margin:15px 0;
        font-size:.8em;
        font-weight: bold;
      }
    }
    p {
      font-weight: bold;
      font-size:.9em;
      margin-bottom:10px;
    }
    h4 {
      font-weight: bold;
      font-size:1.3em;
      margin-top:0;
    }
  }
  .carousel-control-next, .carousel-control-prev {
    z-index: 100;
    opacity:1;
    svg {
      //color:white !important;
      //fill: white !important;
      //stroke: white !important;
      polyline {
        stroke: white !important;
      }
    }
    @media screen and (min-width: 992px) {
      width:5%;
      height:50px;
      bottom:21px;
      top:initial;
    }
  }
  .carousel-control-next {
    @media screen and (min-width: 992px) {
      right:5%;
    }
  }
  .carousel-control-prev {
    @media screen and (min-width: 992px) {
      right:15%;
      left:initial;
    } 
  }
`

