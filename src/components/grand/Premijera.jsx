import React from "react";
import premijera from "../../assets/images/premijera.jpg"

export const Premijera = () => {
    return (
        <section className="emisije-premijera">
            <div className="emisije-premijeraMainTitle">
                <h5 className="emisije-premijeraMainTitleText">Premijera</h5>
            </div>
            <div className="emisije-premijeraItem">
                <img src={premijera} alt="premijeraImg" className="emisije-premijeraImage"></img>
            </div>
            <div className="emisije-premijeraTitle">
                <h4 className="emisije-premijeraTitleText">Lepa Brena</h4>
            </div>
        </section>
    )
}