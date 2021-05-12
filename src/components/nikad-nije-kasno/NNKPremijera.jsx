import React from "react";
import premijera from "../../assets/images/premijera.jpg"

export const NNKPremijera = () => {
    return (
        <section className="nikadNijeKasno-premijera">
            <div className="nikadNijeKasno-premijeraMainTitle">
                <h5 className="nikadNijeKasno-premijeraMainTitleText">Premijera</h5>
            </div>
            <div className="nikadNijeKasno-premijeraItem">
                <img src={premijera} alt="premijeraImg" className="nikadNijeKasno-premijeraImage"></img>
            </div>
            <div className="nikadNijeKasno-premijeraTitle">
                <h4 className="nikadNijeKasno-premijeraTitleText">Lepa Brena</h4>
            </div>
        </section>
    )
}