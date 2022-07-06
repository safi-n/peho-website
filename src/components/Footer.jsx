import "../Style/footer.css";
import { Fragment } from "react";
import PEHOLogoWhite from "../assets/PNG/PEHOLogo_White.png";
import facebookIcon from "../assets/SMicon/facebookIcon.png";
import twitterIcon from "../assets/SMicon/twitterIcon.png";
import instagramIcon from "../assets/SMicon/instagramIcon.png";
import linkedinIcon from "../assets/SMicon/linkedin-inIcon.png";
import youtubeIcon from "../assets/SMicon/youtubeIcon.png";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-container bg-primary">
        <div className="footer-logo-box">
          <div className="footer-logo">
            <img src={PEHOLogoWhite} alt="Footer Logo" />
          </div>
          <h2 className="footer-connect-text text-white">CONTACT WITH US</h2>
          <div className="footer-socialMediaIcons-box flex">
            <img src={facebookIcon} alt="Facebook icon" />
            <img src={twitterIcon} alt="Twitter icon" />
            <img src={instagramIcon} alt="Instagram icon" />
            <img src={youtubeIcon} alt="Youtube icon" />
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </div>
        </div>
        {/* Support Link */}
        <div className="support-links-box">
          <a href="/contact-us">Message us</a>
          <a href="/about-us">Know more about us</a>
          <a href="/about-us">Our team</a>
        </div>
        {/* Support Link */}
        <div className="support-links-box">
          <a href="/empower-us">Empower women</a>
          <a href="/empower-us">Empower Health</a>
        </div>
      </div>
      <div className="mobile-footer-container bg-primary">

      </div>
    </Fragment>
  );
};

export default Footer;
