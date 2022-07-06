import '../Style/navbar.css'
import {Fragment} from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import PEHOLogo from "../assets/PNG/PEHOLogo_White.png";
import PEHOLogoBlack from "../assets/PNG/PEHOLogo_Orignal.png";
const Navbar = () => {
  const location = useLocation()
  const PathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <Fragment>
      <div className='navbar-container'>
        <div className={PathMatchRoute('/')? "navbar-box bg-primary": 'navbar-box bg-white'}>
          <div className="navlogo-box">
            <img src={PathMatchRoute('/')?PEHOLogo:PEHOLogoBlack} alt="Navbar Logo" />
          </div>
          <div className="navLinks-box">
            <a 
            href={'/'}
            className={PathMatchRoute('/')? 'text-white active-link':'text-black'}>
            Home</a>

            <a 
            href={'/about-us'}
            className={PathMatchRoute('/')? 'text-white':'text-black'}>
            <span className={PathMatchRoute('/about-us')? 'active-link': ''}>About us</span></a>

            <a 
            href={'/contact-us'}
            className={PathMatchRoute('/')? 'text-white':'text-black'}>
            <span className={PathMatchRoute('/contact-us')? 'active-link': ''}>Contact us</span></a>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="mobile-navbar-box">
          <div className="mobile-navlogo-box">
            <img src={PEHOLogo} alt="" />
          </div>
          <div className="burger-menu-box">
            <div className="burger-bar"></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar