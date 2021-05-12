import React from "react";
import premijera from "../../assets/images/premijera.jpg"

export const ZGPremijera = () => {
    return (
        <section className="zvezdeGranda-premijera">
            <div className="zvezdeGranda-premijeraMainTitle">
                <h5 className="zvezdeGranda-premijeraMainTitleText">Premijera</h5>
            </div>
            <div className="zvezdeGranda-premijeraItem">
                <img src={premijera} alt="premijeraImg" className="zvezdeGranda-premijeraImage"></img>
            </div>
            <div className="zvezdeGranda-premijeraTitle">
                <h4 className="zvezdeGranda-premijeraTitleText">Lepa Brena</h4>
            </div>
        </section>
    )
}