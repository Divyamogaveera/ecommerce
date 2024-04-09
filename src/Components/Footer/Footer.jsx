import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/bags.jpg";
import watsappicon from "../Assets/watsappicon.jpg";
import instagramicon from "../Assets/instagramicon.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>about</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={watsappicon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={instagramicon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 -All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
