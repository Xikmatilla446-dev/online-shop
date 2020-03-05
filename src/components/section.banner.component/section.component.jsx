import React from "react";

import lo from '../../image/lo_pc.webp'


import './section.styles.css';


const SectionComponent = () => {

    return(
        <div className="wrap">

            <div className="row-for-card">
                <div className="text-card">
                    <h1>Международый День Девочек</h1>
                    <h3>Поделитесь любой вашей фотографией о нашем сайте и получите подарочную карту
                        на <span>100$</span> !</h3>
                    <button>Посищайте Instagram и участвуйте в мероприятии |></button>
                </div>

                <div className="img-card">
                    <img src={lo} alt=""/>
                </div>

            </div>

        </div>

)

};

export default SectionComponent;