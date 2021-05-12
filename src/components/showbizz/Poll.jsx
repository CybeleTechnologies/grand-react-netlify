import React from "react";
import pollImg1 from "../../assets/images/e20a7ff703ca1fe92c18bab2bbf6c1bbd91c3d0f.jpg";

export const Poll = () => {
  return (
    <div className="showbizz-poll" style={{background:`url(${pollImg1}) no-repeat center center`, backgroundSize:"cover"}}>
      <div className="bg-poll" />
      <div className="showbizz-pollInner">
        {/*<img src={pollImg1} alt="poll img" className="showbizz-pollItem" />*/}
          <p className="showbizz-pollItemBrandText">NIKAD NIJE KASNO</p>
        <div className="showbizz-pollItemLayer">
          <h3>Glasajte za vašeg favorita</h3>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Dragan Marković Tajze
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Suzana Smajić
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Bato Vuješević
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Goran Cvetković
            </label>
          </div>
          <div className="actions">
            <button type="button" className="btn btn-light btn-poll">
              Glasaj
            </button>
            <a className="rezultati" href="#">Pogledaj rezultate</a>
          </div>
        </div>
      </div>
    </div>
  );
};
