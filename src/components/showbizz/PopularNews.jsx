import React from "react";
import popularNewsImg1 from "../../assets/images/639331e65dd407f789da10853f1ea3514f380fb3.jpg";
import popularNewsImg2 from "../../assets/images/4d5c993bf37765a0ab1edeeee8b7e6fbf20a6b1f.jpg";
import popularNewsImg3 from "../../assets/images/m_abd2e4014d4be6d0e5b239b773bf0f2a37e95855.jpg";
import popularNewsImg4 from "../../assets/images/fb322de76e4e0857b5db00c602013611bb0b13b7.jpg";
import popularNewsImg5 from "../../assets/images/d7e73d71699f443a35d3fa3a8b25cd3cc8fcba87.jpg";
import popularNewsImg6 from "../../assets/images/39620cb375f2dc62f7cd8df181b09a59d0264d67.jpg";

export const PopularNews = () => {
  return (
    <>
      <div className="showbizz-popularNewsMainTitle">
        <h5 className="showbizz-popularNewsMainTitleText">Popularne vesti</h5>
      </div>
      <section className="showbizz-popularNews">
        <div className="showbizz-popularNewsItems">
        <div className="showbizz-popularNewsBrand">
          <p className="showbizz-popularNewsBrandText showbizz-zvezdeGranda">ZVEZDE GRANDA</p>
        </div>
          <div className="showbizz-popularNewsItemsImage">
            <img
              src={popularNewsImg1}
              alt="popularNewsImg1"
              className="showbizz-popularNewsItem"
            />
          </div>
          <div className="showbizz-popularNewsTitle">
            <span className="showbizz-popularNewsItemTitle">
              Kako je Ana Bekuta završila kao manekenka u spotu svog kolege?
            </span>
          </div>
        </div>
        <div className="showbizz-popularNewsItems">
        <div className="showbizz-popularNewsBrand">
          <p className="showbizz-popularNewsBrandText showbizz-zvezdeGranda">ZVEZDE GRANDA</p>
        </div>
          <div className="showbizz-popularNewsItemsImage">
            <img
              src={popularNewsImg2}
              alt="popularNewsImg2"
              className="showbizz-popularNewsItem"
            />
          </div>
          <div className="showbizz-popularNewsTitle">
            <span className="showbizz-popularNewsItemTitle">
              Odustao od takmičenja, Popović otkrio razlog, ali kad se Ivan
              pojavio, nastao je HAOS
            </span>
          </div>
        </div>
        <div className="showbizz-popularNewsItems">
        <div className="showbizz-popularNewsBrand">
          <p className="showbizz-popularNewsBrandText showbizz-zvezdeGranda">ZVEZDE GRANDA</p>
        </div>
          <div className="showbizz-popularNewsItemsImage">
            <img
              src={popularNewsImg3}
              alt="popularNewsImg3"
              className="showbizz-popularNewsItem"
            />
          </div>
          <div className="showbizz-popularNewsTitle">
            <span className="showbizz-popularNewsItemTitle">
              ŽESTOKA BORBA: 10 takmičara slavilo prolazak, 8 ispalo iz
              takmičenja
            </span>
          </div>
        </div>
        <div className="showbizz-popularNewsItems">
        <div className="showbizz-popularNewsBrand">
          <p className="showbizz-popularNewsBrandText showbizz-zvezdeGranda">ZVEZDE GRANDA</p>
        </div>
          <div className="showbizz-popularNewsItemsImage">
            <img
              src={popularNewsImg4}
              alt="popularNewsImg4"
              className="showbizz-popularNewsItem"
            />
          </div>
          <div className="showbizz-popularNewsTitle">
            <span className="showbizz-popularNewsItemTitle">
              "Ne valja da zovemo BOGA SAMO KADA NAM NEŠTO TREBA!" Marija
              Šerifović poslala snažnu poruku u svom vlogu (VIDEO)
            </span>
          </div>
        </div>
        <div className="showbizz-popularNewsItems">
        <div className="showbizz-popularNewsBrand">
          <p className="showbizz-popularNewsBrandText showbizz-zvezdeGranda">ZVEZDE GRANDA</p>
        </div>
          <div className="showbizz-popularNewsItemsImage">
            <img
              src={popularNewsImg5}
              alt="popularNewsImg5"
              className="showbizz-popularNewsItem"
            />
          </div>
          <div className="showbizz-popularNewsTitle">
            <span className="showbizz-popularNewsItemTitle">
              NASTAVALJAMO U DOBROM RITMU: U SPECIJAL stižu legende naše muzike
              (VIDEO)
            </span>
          </div>
        </div>
        <div className="showbizz-popularNewsItems">
        <div className="showbizz-popularNewsBrand">
          <p className="showbizz-popularNewsBrandText showbizz-zvezdeGranda">ZVEZDE GRANDA</p>
        </div>
          <div className="showbizz-popularNewsItemsImage">
            <img
              src={popularNewsImg6}
              alt="popularNewsImg6"
              className="showbizz-popularNewsItem"
            />
          </div>
          <div className="showbizz-popularNewsTitle">
            <span className="showbizz-popularNewsItemTitle">
              Šoubiznis je SEKSISTIČKI POSAO: ''Ne dozvoli da te muškarci
              gledaju kao 100 grama mesa!''
            </span>
          </div>
        </div>
      </section>
        <div className="showbizz-popularNewsbtnWrap">
        <button className="showbizz-popularNewsbtn">Pogledaj još</button>
        </div>
    </>
  );
};
