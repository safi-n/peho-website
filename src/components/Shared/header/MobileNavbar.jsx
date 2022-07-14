import { useState} from 'react'
import PEHOLogo from "../../../assets/PNG/PEHOLogo_White.png";
import MobileSlideMenu from './MobileSlideMenu';
import { motion } from "framer-motion"

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='md:hidden'>
      <div className="mobile-navbar-box bg-primary">
        <div className="mobile-navlogo-box">
          <img src={PEHOLogo} alt="" />
        </div>
        <div className="burger-menu-box" onClick={() => setShowMenu(!showMenu)}>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
        </div>
      </div>
      {showMenu ? <MobileSlideMenu/> : null}
    </div>
  );
};

export default MobileNavbar;
