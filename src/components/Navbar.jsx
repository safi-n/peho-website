import '../Style/navbar.css'
import {Fragment, useState} from 'react'
import { Link, useLocation} from 'react-router-dom'
import PEHOLogo from "../assets/PNG/PEHOLogo_White.png";
import PEHOLogoBlack from "../assets/PNG/PEHOLogo_Orignal.png";
const Navbar = () => {
  const location = useLocation()
  const [showMenu, setShowMenu] = useState(false)
  const PathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <Fragment>
      <div className='container navbar-container'>
        <div className={PathMatchRoute('/')? "navbar-box bg-primary h-28": 'navbar-box bg-white h-28'}>
          <div className="navlogo-box">
            <img src={PathMatchRoute('/')?PEHOLogo:PEHOLogoBlack} alt="Navbar Logo" />
          </div>
          <div className="navLinks-box">
            <Link to={'/'} >
            <span className={PathMatchRoute('/')? 'text-white active-link':'text-black'}>Home</span>
            </Link>
            <Link to={'/about-us'}>
            <span className={PathMatchRoute('/')? 'text-white':'text-black'}>
              <span className={PathMatchRoute('/about-us')? 'active-link': ''}>About us</span>
            </span>
            </Link>
            <Link to={'/contact-us'}>
              <span className={PathMatchRoute('/')? 'text-white':'text-black'}>
                <span className={PathMatchRoute('/contact-us')? 'active-link': ''}>Contact us</span>
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Version */}
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
      </div>
        {/* Mobile Menu Slider */}
        {showMenu ?
        <div className='mobile-slideMenu-box'>
          <div className="slideMenu-link text-xl">
            <a href="/">Home</a>
          </div>
          <div className="slideMenu-link text-xl">
            <a href="/about-us">About us</a>
          </div>
          <div className="slideMenu-link text-xl">
            <a href="/contact-us">Contact us</a>
          </div>
        </div> : null}
    </Fragment>
  )
}

export default Navbar