import { useState} from 'react'
import PEHOLogo from "../../../assets/PNG/PEHOLogo_White.png";
import { Link } from 'react-router-dom';

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
      {showMenu ? 
      <div className='mobile-slideMenu-box fixed bg-bg-primary'>
      <div className="slideMenu-link text-xl" onClick={() => setShowMenu(!showMenu)}>
        <Link to="/">Home</Link>
      </div>
      <div className="slideMenu-link text-xl" onClick={() => setShowMenu(!showMenu)}>
        <Link to="/about-us">About us</Link>
      </div>
      <div className="slideMenu-link text-xl" onClick={() => setShowMenu(!showMenu)}>
        <Link to="/contact-us">Contact us</Link>
      </div>
    </div>
      : null}
    </div>
  );
};

export default MobileNavbar;
