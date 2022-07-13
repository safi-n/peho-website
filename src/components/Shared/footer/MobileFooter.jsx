import PEHOLogoWhite from "../../../assets/PNG/PEHOLogo_White.png";
import facebookIcon from "../../../assets/SMicon/facebookIcon.png";
import twitterIcon from "../../../assets/SMicon/twitterIcon.png";
import instagramIcon from "../../../assets/SMicon/instagramIcon.png";
import linkedinIcon from "../../../assets/SMicon/linkedin-inIcon.png";
import youtubeIcon from "../../../assets/SMicon/youtubeIcon.png";

const MobileFooter = () => {
  return (
    <div className="mobile-footer-container bg-primary md:hidden">
        <div className="mobile-footer-logo">
          <img src={PEHOLogoWhite} alt="Footer Logo" />
        </div>
        <h2 className="footer-connect-text text-white">CONTACT WITH US - Mobile</h2>
        <div className="mobile-footer-socialMediaIcons-box flex">
          <img src={facebookIcon} alt="Facebook icon" />
          <img src={twitterIcon} alt="Twitter icon" />
          <img src={instagramIcon} alt="Instagram icon" />
          <img src={youtubeIcon} alt="Youtube icon" />
          <img src={linkedinIcon} alt="LinkedIn icon" />
        </div>
      </div>
  )
}

export default MobileFooter