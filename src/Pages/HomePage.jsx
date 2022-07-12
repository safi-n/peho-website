import { Fragment } from "react";
import "../Style/home.css";

const HomePage = () => {
  return (
    <Fragment>
      <div className="homepage-container h-screen">
        <div className="homepage-hero-container">
          <div className="hero-content-box">
            <h2 className="text-black">WHAT IS PEHO?</h2>
            <p>
              PEHO is a Non governmental Non- profitable and Non- for profit
              organization with an Non independent legal identity. PEHO Aims to
              serve people and contribute into Afghanistan’s rehabilitation.
            </p>
          </div>
          <div className="hero-visual-box">
            <div className="hero-mockup">
              {/* <img src={VideoHero} alt="Video Hero" /> */}
            </div>
          </div>
          <div className="hero-mobile-mockup"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
