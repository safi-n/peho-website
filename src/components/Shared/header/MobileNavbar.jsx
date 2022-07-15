import { useState} from 'react'
import PEHOLogo from "../../../assets/PNG/PEHOLogo_White.png";
import MobileSlideMenu from './MobileSlideMenu';
import { motion } from "framer-motion"

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='fixed md:hidden mobile-navbar-container z-50'>
      <div className="mobile-navbar-box bg-primary">
        <div className="mobile-navlogo-box">
          <img src={PEHOLogo} alt="" />
        </div>
        <div className="burger-menu-box" onClick={() => setShowMenu(!showMenu)}>
          <div className={!showMenu ? "burger-bar1" : 'burger-x-1'}></div>
          <div className={!showMenu ? "burger-bar2" : ''}></div>
          <div className={!showMenu ? "burger-bar1" : 'burger-x-2'}></div>
        </div>
      </div>
      {showMenu ? <MobileSlideMenu/> : null}
    </div>
  );
};

export default MobileNavbar;
