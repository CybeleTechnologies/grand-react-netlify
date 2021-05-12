import React from "react";
import premijera from "../../assets/images/premijera.jpg"

export const Premijera = () => {
    return (
        <section className="horoskop-premijera">
            <div className="horoskop-premijeraMainTitle">
                <h5 className="horoskop-premijeraMainTitleText">Premijera</h5>
            </div>
            <div className="horoskop-premijeraItem">
                <img src={premijera} alt="premijeraImg" className="horoskop-premijeraImage"></img>
            </div>
            <div className="horoskop-premijeraTitle">
                <h4 className="horoskop-premijeraTitleText">Lepa Brena</h4>
            </div>
        </section>
    )
}