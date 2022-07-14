import '../../../Style/Navbar/mobileMenuSlider.css'
import { Link } from "react-router-dom"

const MobileSlideMenu = () => {
  return (
    <>
      <div className='mobile-slideMenu-box fixed bg-bg-primary'>
          <div className="slideMenu-link text-xl">
            <Link to="/">Home</Link>
          </div>
          <div className="slideMenu-link text-xl">
            <Link to="/about-us">About us</Link>
          </div>
          <div className="slideMenu-link text-xl">
            <Link to="/contact-us">Contact us</Link>
          </div>
        </div>
    </>
  )
}

export default MobileSlideMenu