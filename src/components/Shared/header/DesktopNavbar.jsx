import React from 'react'
import PEHOLogo from "../../../assets/PNG/PEHOLogo_White.png";
import { Link, useLocation } from "react-router-dom";

const DesktopNavbar = () => {
  const location = useLocation();
  const PathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <div className="container navbar-container">
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
  )
}

export default DesktopNavbar