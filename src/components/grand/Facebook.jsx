import React from "react";

export const Facebook = () => {
    return (
        <section className="emisije-facebook">
            <div className="emisije-premijeraMainTitle">
                <h5 className="emisije-premijeraMainTitleText">Facebook</h5>
            </div>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGrandTelevizija%2F&tabs=timeline&data-width=100%&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=534904083375143" 
            title="#"
            className="emisije-facebookMain"
            ></iframe>
        </section>
    )
}