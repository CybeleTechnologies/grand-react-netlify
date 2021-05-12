import React from "react";
import slikaDana from "../../assets/images/slikaDana.jpg"

export const RSlikaDana = () => {
    return (
        <section className="zvezdeGranda-premijera">
            <div className="recepti-premijeraMainTitle">
                <h5 className="recepti-premijeraMainTitleText">Slika dana</h5>
            </div>
            <div className="zvezdeGranda-premijeraItem">
                <img src={slikaDana} alt="slikaDanaImg" className="zvezdeGranda-premijeraImage"></img>
            </div>
        </section>
    )
}