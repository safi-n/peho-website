import "../../../Style/footer.css";
import { Fragment } from "react";

import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <>
      <DesktopFooter />
      <MobileFooter />
    </>
  );
};

export default Footer;
