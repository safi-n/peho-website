const DesktopFooter = ({PEHOLogoWhite, facebookIcon, linkedinIcon, instagramIcon, youtubeIcon, twitterIcon}) => {
  return (
    <div className="footer-container bg-primary hidden md:block">
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
  )
}

export default DesktopFooter