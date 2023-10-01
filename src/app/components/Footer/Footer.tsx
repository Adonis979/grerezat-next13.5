import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <body>
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <FacebookIcon fontSize="large" />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <EmailIcon fontSize="large" />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <LinkedInIcon fontSize="large" />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <InstagramIcon fontSize="large" />
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="#">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              About
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Services
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Team
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <p>&copy;2023 Adonis Shala | All Rights Reserved</p>
      </footer>
    </body>
  );
};

export default Footer;
