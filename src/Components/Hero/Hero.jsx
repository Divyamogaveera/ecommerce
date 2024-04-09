import React from "react";
import "./Hero.css";
// import bag from "../Assets/bags.jpg";
// import laptop from "../Assets/laptop.jpg";
import transparentbg from "../Assets/transparentbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandFist } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <FontAwesomeIcon icon={faHandFist} size="3x" />

            {/* <img src={laptop} alt="Lap" /> */}
          </div>
          <div className="txt">
            <p>Collection</p>
            <p> everyone</p>
          </div>
        </div>
        <div className="hero-latest-btn">
          <div>Latest collections</div>
          <FontAwesomeIcon icon={faArrowRight} />
          {/* <img src={laptop} alt="" /> */}
        </div>
      </div>
      <div className="hero-right">
        <h1>Just be on top</h1>
        <img src={transparentbg} alt="heroright" />
        <h2>be Trendy</h2>
      </div>
    </div>
  );
};

export default Hero;
