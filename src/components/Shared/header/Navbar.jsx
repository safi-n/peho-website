import { useState } from "react";
import "../../../Style/navbar.css";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {

  return (
    <>
      <DesktopNavbar/>
      <MobileNavbar/>
    </>
  );
};

export default Navbar;
