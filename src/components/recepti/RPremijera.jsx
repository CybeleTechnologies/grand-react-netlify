import React from "react";
import premijera from "../../assets/images/premijera.jpg"

export const RPremijera = () => {
    return (
        <section className="recepti-premijera">
            <div className="recepti-premijeraMainTitle">
                <h5 className="recepti-premijeraMainTitleText">Premijera</h5>
            </div>
            <div className="recepti-premijeraItem">
                <img src={premijera} alt="premijeraImg" className="recepti-premijeraImage"></img>
            </div>
            <div className="recepti-premijeraTitle">
                <h4 className="recepti-premijeraTitleText">Lepa Brena</h4>
            </div>
        </section>
    )
}