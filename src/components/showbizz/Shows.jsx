import React from "react";
import showsImg1 from "../../assets/images/16ce584f6348fbf83c1142edf53ca4db.jpg";
import showsImg2 from "../../assets/images/d8f57a13c77b4b6bd8e178d724fee748.jpg";
import showsImg3 from "../../assets/images/80a5df72a537661c12e59ab3947f7f8e.jpg";
import styled from "styled-components/macro"

// export const Shows = () => {
//   return (
//     <section className="shows">
//       <div className="showsMainTitle">
//       <h5 className="showsMainTitleText">Emisije</h5>
//       </div>
//       <div className="showsItems">
//         <div className="showsItemsImage">
//           <img src={showsImg1} alt="showsImg1" className="showsItem" />
//         </div>
//         <div className="showsItemText">
//             <div className="showsItemCaption">
//             <span className="showsItemTitle">HALO HALO</span>
//             <br></br>
//             <span className="showsItemTime">Utorak 20h</span>
//             </div>
//         </div>
//       </div>
//       <div className="showsItems">
//         <div className="showsItemsImage">
//           <img src={showsImg2} alt="showsImg2" className="showsItem" />
//         </div>
//         <div className="showsItemText">
//         <div className="showsItemCaption">
//           <span className="showsItemTitle">GRAND MAGAZIN</span>
//           <br></br>
//           <span className="showsItemTime">Utorak 12h</span>
//           </div>
//         </div>
//       </div>
//       <div className="showsItems">
//         <div className="showsItemsImage">
//           <img src={showsImg3} alt="showsImg3" className="showsItem" />
//         </div>
//         <div className="showsItemText">
//         <div className="showsItemCaption">
//           <span className="showsItemTitle">ZVEZDE GRANDA SPECIJAL</span>
//           <br></br>
//           <span className="showsItemTime">Petak 15h</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export const Show = styled(({className, thumb, thumbalt, title}) => {
    return <div className={className}>
        <div className="thumb" style={{backgroundImage:`url(${thumb})`}} />
        <span className="title">{title}</span>
    </div>
})`
  margin-bottom:1rem;
  .thumb {
    width:100%;
    min-height:390px;
    background-size:cover;
    background-position:center;
  }
  .title {
    display: inline-block;
    padding:0 .7rem;
    margin-top:1.3rem;
    font-size:1.2em;
    font-weight:bold;
    color:#515153;
  }
`

export const Shows = styled(({className}) => {
    return <section className={className}>
        <h4>Emisije</h4>
        <div className="show-list">
            <Show title="Halo, Halo" thumb={showsImg1} thumbalt="Halo Halo" />
            <Show title="Grand Magazin" thumb={showsImg2} thumbalt="Grand Magazin" />
            <Show title="Zvezde Granda Specijal" thumb={showsImg3} thumbalt="Zvezde Granda Specijal" />
        </div>
    </section>
})`
  h4 {
    width:100%;
    font-weight:900;
    color:#525156;
    font-size:2rem;
    margin-bottom:1.5rem;
  }
  .show-list {
    display:grid;
    width:100%;
    column-gap:2rem;
    @media screen and (min-width: 670px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: 1141px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`