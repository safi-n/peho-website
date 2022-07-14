import "../../../Style/footer.css";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";
import PEHOLogoWhite from "../../../assets/PNG/PEHOLogo_White.png";
import facebookIcon from "../../../assets/SMicon/facebookIcon.png";
import twitterIcon from "../../../assets/SMicon/twitterIcon.png";
import instagramIcon from "../../../assets/SMicon/instagramIcon.png";
import linkedinIcon from "../../../assets/SMicon/linkedin-inIcon.png";
import youtubeIcon from "../../../assets/SMicon/youtubeIcon.png";

const Footer = () => {

  return (
    <>
      <DesktopFooter PEHOLogoWhite={PEHOLogoWhite} facebookIcon={facebookIcon} twitterIcon={twitterIcon} instagramIcon=
      {instagramIcon} linkedinIcon={linkedinIcon} youtubeIcon={youtubeIcon} />
      
      <MobileFooter PEHOLogoWhite={PEHOLogoWhite} facebookIcon={facebookIcon} twitterIcon={twitterIcon} instagramIcon=
      {instagramIcon} linkedinIcon={linkedinIcon} youtubeIcon={youtubeIcon} />
    </>
  );
};

export default Footer;
