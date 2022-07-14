import { useState } from "react";
import "../../../Style/navbar.css";
import { Link, useLocation } from "react-router-dom"
import PEHOLogo from "../../../assets/PNG/PEHOLogo_White.png";
import PEHOLogoBlack from "../../../assets/PNG/PEHOLogo_Black.png";
import MobileSlideMenu from './MobileSlideMenu'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation();
  const PathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <>
      <div className="container navbar-container hidden md:block">
        <div
          className={
            PathMatchRoute("/")
              ? "navbar-box bg-primary h-28"
              : "navbar-box bg-white h-28"
          }
        >
          <div className="navlogo-box">
            <img
              src={PathMatchRoute("/") ? PEHOLogo : PEHOLogoBlack}
              alt="Navbar Logo"
            />
          </div>
          <div className="navLinks-box">
            <Link to={"/"}>
              <span
                className={
                  PathMatchRoute("/") ? "text-white active-link" : "text-black"
                }
              >
                Home
              </span>
            </Link>
            <Link to={"/about-us"}>
              <span
                className={PathMatchRoute("/") ? "text-white" : "text-black"}
              >
                <span
                  className={PathMatchRoute("/about-us") ? "active-link" : ""}
                >
                  About us
                </span>
              </span>
            </Link>
            <Link to={"/contact-us"}>
              <span
                className={PathMatchRoute("/") ? "text-white" : "text-black"}
              >
                <span
                  className={PathMatchRoute("/contact-us") ? "active-link" : ""}
                >
                  Contact us
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

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
      {showMenu ? <div className='mobile-slideMenu-box fixed bg-bg-primary'>
          <div className="slideMenu-link text-xl">
            <Link to="/">Home</Link>
          </div>
          <div className="slideMenu-link text-xl">
            <Link to="/about-us">About us</Link>
          </div>
          <div className="slideMenu-link text-xl">
            <Link to="/contact-us">Contact us</Link>
          </div>
        </div> : null}
    </div>
    </>
  );
};

export default Navbar;
