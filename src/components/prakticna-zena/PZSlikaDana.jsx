import React from "react";
import slikaDana from "../../assets/images/slikaDana.jpg"

export const PZSlikaDana = () => {
    return (
        <section className="zvezdeGranda-premijera">
            <div className="prakticnaZena-premijeraMainTitle">
                <h5 className="prakticnaZena-premijeraMainTitleText">Slika dana</h5>
            </div>
            <div className="zvezdeGranda-premijeraItem">
                <img src={slikaDana} alt="slikaDanaImg" className="zvezdeGranda-premijeraImage"></img>
            </div>
        </section>
    )
}