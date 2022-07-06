import '../Style/navbar.css'
import {Fragment} from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import PEHOLogo from "../assets/PNG/PEHOLogo_White.png";
import PEHOLogoBlack from "../assets/PNG/PEHOLogo_Orignal.png";
const Navbar = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const PathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <Fragment>
      <div className='navbar-container'>
        <div className="navbar-box">
          <div className="navlogo-box">
            <img src={PathMatchRoute('/')?PEHOLogo:PEHOLogoBlack} alt="Navbar Logo" />
          </div>
          <div className="navLinks-box">
            <a 
            href={'/'}
            className={'text-lg'}>
            Home</a>

            <a 
            href={'/about-us'}
            className={'text-lg'}>
            About us</a>

            <a 
            href={'/contact-us'}
            className={'text-lg'}>
            Contact us</a>
          </div>
        </div>
        {/* Mobile Version */}
        <div className="mobile-navbar-box">
          <div className="mobile-navlogo-box">
            <img src={PEHOLogo} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar