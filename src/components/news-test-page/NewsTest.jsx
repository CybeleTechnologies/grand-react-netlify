import React from "react";
import newsTestImg1 from "../../assets/images/de22b6bc325b4cc3593b7cf7252bf0c156c2b28e.jpg";
import newsTestImg2 from "../../assets/images/36df36ef682951d0fa8ee0610d1f74490072178a.jpg";
import { NavBar } from "../navbar/NavBar";
import { NavTrack } from "../navbar/NavTrack";
import { PopularNews } from "../showbizz/PopularNews";

export const NewsTest = () => {
  return (
    <div className="newsTest">
      <div className="newsTest-navigation">
        <NavBar />
        <NavTrack />
      </div>
      <div className="newsTest-content">
        <div className="newsTest-contentCenter">
          <div className="newsTest-newsItemsImage">
            <img
              src={newsTestImg1}
              alt="newsTest img1"
              className="newsTest-newsItem"
            />
          </div>
          <div className="newsTest-newsTitle">
            <h1 className="newsTest-newsItemTitle">
              Znamo ga kao markantnog, ali nekada je furao TOTALNO DRUGI STIL!
              Pogledajte kako je Mare izgledao ranije
            </h1>
          </div>
          <p className="newsTest-newsText">
            Saša Milošević Mare, čuveni je kompozitor i producent, a poslednjih
            par godina gledamo ga u ulozi stalnog člana žirija popularnog
            takmičenja "Nikad nije kasno". Iz emisije u emisiju navikao nas je
            na svoj besprekoran stajling, ali malo ko se seća da je Mare nekada
            "furao" malo opušteniji stil. Na slici koja datira bar deceniju
            unazad, poznatog producenta možemo videti sa dugom kosom i, reklo bi
            se, neukrotivim loknama.
          </p>
          <p className="newsTest-newsText">
            Saša Milošević Mare, čuveni je kompozitor i producent, a poslednjih
            par godina gledamo ga u ulozi stalnog člana žirija popularnog
            takmičenja "Nikad nije kasno". Iz emisije u emisiju navikao nas je
            na svoj besprekoran stajling, ali malo ko se seća da je Mare nekada
            "furao" malo opušteniji stil. Na slici koja datira bar deceniju
            unazad, poznatog producenta možemo videti sa dugom kosom i, reklo bi
            se, neukrotivim loknama.
          </p>
          <div className="newsTest-newsItemsImage">
            <img
              src={newsTestImg2}
              alt="newsTest img2"
              className="newsTest-newsItem"
            />
          </div>
          <p className="newsTest-newsText">
            Saša Milošević Mare, čuveni je kompozitor i producent, a poslednjih
            par godina gledamo ga u ulozi stalnog člana žirija popularnog
            takmičenja "Nikad nije kasno". Iz emisije u emisiju navikao nas je
            na svoj besprekoran stajling, ali malo ko se seća da je Mare nekada
            "furao" malo opušteniji stil. Na slici koja datira bar deceniju
            unazad, poznatog producenta možemo videti sa dugom kosom i, reklo bi
            se, neukrotivim loknama.
          </p>
          <div>
            <PopularNews />
          </div>
        </div>
      </div>
    </div>
  );
};
