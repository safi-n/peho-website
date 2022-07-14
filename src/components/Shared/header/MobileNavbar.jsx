import "../../../Style/navbar.css";
import { useState} from 'react'
const [showMenu, setShowMenu] = useState(false)
import { Link, useLocation } from "react-router-dom";
import PEHOLogo from "../../../assets/PNG/PEHOLogo_White.png";

const MobileNavbar = () => {
  const location = useLocation();
  return (
    <>
      <div className="mobile-navbar-box bg-primary md:hidden">
        <div className="mobile-navlogo-box">
          <img src={PEHOLogo} alt="" />
        </div>
        <div className="burger-menu-box" onClick={() => setShowMenu(!showMenu)}>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
        </div>
      </div>
      {showMenu ?
        <div className='mobile-slideMenu-box fixed'>
          <div className="slideMenu-link text-xl">
            <Link href="/">Home</Link>
          </div>
          <div className="slideMenu-link text-xl">
            <Link href="/about-us">About us</Link>
          </div>
          <div className="slideMenu-link text-xl">
            <Link href="/contact-us">Contact us</Link>
          </div>
        </div> : null}
    </>
  );
};

export default MobileNavbar;
