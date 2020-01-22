import React from 'react';
import headShot from "../../../static/assets/images/head_shot_1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
  return (
      <div className = "content-page-wrapper">
         <div className ="left-column" 
            style={{
              background: "url(" + headShot + ") no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"


            }}
         />
         <div className ="right-column">
            <div className="contact-page-detail">
              <div className="contact-information"> 
                <div className="icon">
                  <FontAwesomeIcon icon="phone" />
                </div>

                <div className="text">123-123-1234</div>
              </div>

              <div className="contact-information">
                <div className="icon">
                  <FontAwesomeIcon icon="envelope" />
                </div>

                <div className="text">sharlane_5@hotmail.com</div>

              </div>
              <div className="contact-information">
                <div className="icon">
                  <FontAwesomeIcon icon="map-pin" />
                </div>

                <div className="text">Fairview, Ut</div>
                
              </div>
            </div>
          </div>
        </div>
  )
}