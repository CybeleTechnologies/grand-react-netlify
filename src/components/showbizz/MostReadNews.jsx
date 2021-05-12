import React from "react";
import mostReadNewsImg1 from "../../assets/images/96cce83e84ba03660b99f47e68cc9a9dee88e0d5.jpg";
import mostReadNewsImg2 from "../../assets/images/71d271556d0074e42f9ad0f523efa1e1bd1bfc1d.jpg";
import mostReadNewsImg3 from "../../assets/images/9e0c70e1ac2cd29d08aec6f52d3a1dcb287ada5f.jpg";
import mostReadNewsImg4 from "../../assets/images/92b390fa36213d62ede8a66cdebb5f2bfc64815a.jpg";
import mostReadNewsImg5 from "../../assets/images/1ed247dcccdc41ce99e5196b1130a7be8ac89a9b.jpg";
import Pagination from 'react-bootstrap-4-pagination';


export const MostReadNews = () => {

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
    <section className="mostReadNews">
      <div className="mostReadNewsMainTitle">
        <h5 className="mostReadNewsMainTitleText">Najčitanije vesti</h5>
      </div>
      <div className="mostReadNewsItems">
        <div className="mostReadNewsItemsImage">
          <img
            src={mostReadNewsImg1}
            alt="mostReadNewsImg1"
            className="mostReadNewsItem"
          />
        </div>
        <div className="mostReadNewsTitle">
          <h6 className="mostReadNewsItemTitle">
            JK joj rekla da nema pojma, takmičarka ODGOVORILA: "Nije istina, vi
            ste KONTRADIKTORNI!"
          </h6>
        <div className="showbizz-mostReadNewsBrand">
          <p className="showbizz-mostReadNewsBrandText showbizz-zvezdeGranda">ZVEZDE GRANDA</p>
        </div>
        </div>
      </div>
      <div className="mostReadNewsItems">
        <div className="mostReadNewsItemsImage">
          <img
            src={mostReadNewsImg2}
            alt="mostReadNewsImg2"
            className="mostReadNewsItem"
          />
        </div>
        <div className="mostReadNewsTitle">
          <h6 className="mostReadNewsItemTitle">
            LJUBI VODITELJKU? Drugarica pokušala da sakrije Sofrinu novu vezu,
            ali je lako razotkriven u emisiji
          </h6>
          <div className="showbizz-mostReadNewsBrand">
          <p className="showbizz-mostReadNewsBrandText showbizz-grand">GRAND</p>
        </div>
        </div>
      </div>
      <div className="mostReadNewsItems">
        <div className="mostReadNewsItemsImage">
          <img
            src={mostReadNewsImg3}
            alt="mostReadNewsImg3"
            className="mostReadNewsItem"
          />
        </div>
        <div className="mostReadNewsTitle">
          <h6 className="mostReadNewsItemTitle">
            Nakon što joj je sin ispao u "Zvezdama Granda" pevačica poručila "On
            ima svoje dostojanstvo!" (VIDEO)
          </h6>
          <div className="showbizz-mostReadNewsBrand">
          <p className="showbizz-mostReadNewsBrandText showbizz-zvezdeGranda">ZVEZDE GRANDA</p>
        </div>
        </div>
      </div>
      <div className="mostReadNewsItems">
        <div className="mostReadNewsItemsImage">
          <img
            src={mostReadNewsImg4}
            alt="mostReadNewsImg4"
            className="mostReadNewsItem"
          />
        </div>
        <div className="mostReadNewsTitle">
          <h6 className="mostReadNewsItemTitle">
            GODIŠNJI HOROSKOP: Vage, ovo je vaša SREĆNA godina u kojoj vas
            očekuje PUN KOFER IZNENAĐENJA
          </h6>
          <div className="showbizz-mostReadNewsBrand">
          <p className="showbizz-mostReadNewsBrandText showbizz-horoskop">HOROSKOP</p>
        </div>
        </div>
      </div>
      <div className="mostReadNewsItems">
        <div className="mostReadNewsItemsImage">
          <img
            src={mostReadNewsImg5}
            alt="mostReadNewsImg5"
            className="mostReadNewsItem"
          />
        </div>
        <div className="mostReadNewsTitle">
          <h6 className="mostReadNewsItemTitle">
            Vodi zdrav život ali ipak ima porok VOLIM DA SE KOCKAM kaže Kaća
            Živković! (FOTO)
          </h6>
          <div className="showbizz-mostReadNewsBrand">
          <p className="showbizz-mostReadNewsBrandText showbizz-grand">GRAND</p>
        </div>
        </div>
      </div>
      <Pagination {...paginationConfig} />
    </section>
  );
};
