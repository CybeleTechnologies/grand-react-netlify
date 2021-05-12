import React from "react";
import premijera from "../../assets/images/premijera.jpg"

export const PZPremijera = () => {
    return (
        <section className="prakticnaZena-premijera">
            <div className="prakticnaZena-premijeraMainTitle">
                <h5 className="prakticnaZena-premijeraMainTitleText">Premijera</h5>
            </div>
            <div className="prakticnaZena-premijeraItem">
                <img src={premijera} alt="premijeraImg" className="prakticnaZena-premijeraImage"></img>
            </div>
            <div className="prakticnaZena-premijeraTitle">
                <h4 className="prakticnaZena-premijeraTitleText">Lepa Brena</h4>
            </div>
        </section>
    )
}