import React from "react";
import VideoHero from "../../assets/PNG/videoHero.png";
import wwdPicture from "../../assets/JPG/wwdPicture.png";
import wwaVisionIcon from "../../assets/PNG/wwa-vision.png";
import wwaMissionIcon from "../../assets/PNG/wwa-mission.png";
import wwaGoalIcon from "../../assets/PNG/wwa-goal.png";
import wwoAfgMap from "../../assets/PNG/wwoAfgMap.png";
import ourPartnerIcon1 from "../../assets/PNG/ourPartnerIcon1.png";

const MobileHompage = () => {
  return (
    <>
      <div className="mobile-home p-9 border h-screen">
        <div className="mobile-hero-content-box mt-32 flex flex-col items-center">
          <h2 className="text-primary font-medium text-xl mb-5">
            WHAT IS PEHO?
          </h2>
          <p className="text-xs text-black leading-8 font-light">
            PEHO is a Non governmental Non- profitable and Non- for profit
            organization with an Non independent legal identity. PEHO Aims to
            serve people and contribute into Afghanistan’s rehabilitation.
          </p>
          <div>
            <img src={VideoHero} alt="Video Hero" className="mt-4" />
          </div>
          <div className="mobile-hero-mockup w-36"></div>
        </div>
      </div>
    </>
  );
};

export default MobileHompage;
