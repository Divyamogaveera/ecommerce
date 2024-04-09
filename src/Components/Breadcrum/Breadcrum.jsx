import React from "react";
import "./Breadcrum.css";
import arrowicon from "../Assets/arrowicon.jpg";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrowicon} alt="" />
    </div>
  );
};

export default Breadcrum;
