// import { Home } from "react-feather"

const MobileFooter = ({PEHOLogoWhite, facebookIcon, linkedinIcon, instagramIcon, youtubeIcon, twitterIcon}) => {
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
          {/* <div><a href="https://google.com">{Home}</a></div> */}
        </div>
      </div>
  )
}

export default MobileFooter