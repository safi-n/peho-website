import React from "react";
import watofPic1 from "../../assets/PNG/watofPic1.png";
import watofPic2 from "../../assets/PNG/watofPic2.png";
import watofPic3 from "../../assets/PNG/watofPic3.png";
import afghanIcon from "../../assets/PNG/AfghanIcon.png";
import accountabilityIcon from "../../assets/PNG/AccountabiltyIcon-01.png";
import trustIcon from "../../assets/PNG/handshakeIcon-01.png";
import equalIcon from "../../assets/PNG/EqualOpportunity-01.png";
import ourMotivePic from "../../assets/PNG/ourMotivepic.png";
import wacPic from "../../assets/PNG/wacPic.png";

const MobileAbout = () => {
  return (
    <>
      <div className="mobile-container w-screen md:hidden ">
        <div className="watof-container h-screen flex flex-col items-center p-2">
          <div className="mobile-watof-content mb-2 mt-24 p-5">
            <h2 className="mobile-watof-title text-xl mb-2 leading-7 font-bold">
              WE ARE TEAM <br /> OF
              <span className="text-secondary font-bold"> PROFESSIONALS</span>
            </h2>
            <p className="mobile-watof-paragraf font-light leading-7 text-sm">
              all members of PEHO are expert and innovative Afghans they have
              educated and entitled by diploma. PEHO member are people who have
              always had enough credibility in their work environment and social
              life. Having a good and moral relationship that benefit’s own self
              and others is one of the most important principal’s of their
              social life and they are committed to this principle.
            </p>
          </div>
          <div className="mobile-watof-pics ">
            <div className="mobile-watof-mockup">
              <div className="mobile-watof-pic-flex flex flex-row space-x-8">
                <div className="mobile-watof-pic-flex-1 mt-4">
                  <img src={watofPic1} alt="" />
                  <div className="mobile-watof-pic-col-2 flex flex-row mt-6">
                    <span className="col-2-img-empty w-28"></span>
                    <img src={watofPic2} alt="" className="h-32 mt-1 " />
                  </div>
                </div>
                <div className="mobile-watof-pic-flex-2 flex flex-col">
                  <span className="h-8"></span>
                  <img src={watofPic3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-peho-value-container mt-6 flex flex-col items-center">
          {/* Title */}
          <div className="mobile-peho-value-title">
            <h2 className="text-xl font-bold">
              PEHO's <span className="text-secondary font-bold">VALUE</span>
            </h2>
          </div>
          {/* ------------------------ BOXES */}
          <div className="mobile-value-boxes flex flex-col space-y-7 p-5">
            {/* Accountability */}
            <div className="mobile-value-box-image-accountabilty bg-white drop-shadow-md p-3">
              <div className="boxes-col flex items-center space-x-6">
                <img src={accountabilityIcon} alt="" className="h-9 mb-4" />
                <h2 className="text-lg text-other-color">Accountability</h2>
              </div>
              <p className="font-light text-xs leading-6">
                PEHO Follow the fact and condition of being responsible of
                accountability in all its deals and relationships.
              </p>
            </div>

            {/* Trust & Equal */}
            <div className="mobile-value-box-image-trust bg-white drop-shadow-md p-3">
              <div className="boxes-col flex items-center space-x-6">
                <img src={trustIcon} alt="" className="h-6 mb-4" />
                <h2 className="text-lg mb-2 text-other-color">Trust</h2>
              </div>
              <p className="font-light text-xs leading-6">
                PEHO’s impact and its well-known brand as a trusted organization
                is our most treasured asset.
              </p>
            </div>
            <div className="mobile-value-box-image-equality p-3 bg-white drop-shadow-md">
              <div className="boxes-col flex items-center space-x-7">
                <img src={equalIcon} alt="" className="h-11 mb-4" />
                <h2 className="text-lg mb-2 text-other-color">
                  Equal opportunities
                </h2>
              </div>
              <p className="font-light text-xs leading-6">
                PEHO has a nondiscriminatory policy for internal and external
                relationships.
              </p>
            </div>
            {/* Afghan Led */}
            <div className="mobile-value-box-image-afghanLed bg-white drop-shadow-md p-3">
              <div className="boxes-col flex items-center space-x-9">
                <img
                  src={afghanIcon}
                  alt="afghan Icon"
                  className="h-11 mb-4 ml-4"
                />
                <h2 className="text-lg mb-2 text-other-color">Afghan Led</h2>
              </div>
              <p className="font-light text-xs leading-6">
                PEHO is an Afghan-led and Afghan-managed organization to help
                Afghan women with health problems.
              </p>
            </div>
          </div>
        </div>

        {/* -------------- OUR MOTIVE AREA */}
        <div className="mt-9 mobile-our-motive-container flex flex-col p-6 items-center">
          {/* Title area */}
          <div className="mobile-ou-motive-title">
            <h2 className="text-xl font-bold mb-8">
              OUR <span className="text-secondary font-bold">MOTIVE</span>
            </h2>
          </div>
          {/* Content area */}
          <div className="mobile-our-motive-box flex flex-col justify-center items-center space-y-12 ">
            <div className="mobile-our-motive-content p-2">
              <p className="font-light text-sm leading-7">
                PEHO is responsible of facilitating, learning or the acquisition
                of knowledge, skills, values, moral, beliefs, habits and
                personal development of Afghan people. Through vocational
                trainings, workshops, seminars, event’s, short and long courses
                And presentations.
              </p>
            </div>
            {/* Mockup and picture area */}
            <div className="mobile-our-motive-mockup">
              <img src={ourMotivePic} alt="" />
            </div>
          </div>
        </div>

        {/* WE ARE CHANGING */}
        <div className="mobile-wac-container flex flex-col p-4 space-y-8 items-center">
          <div className="mobile-wac-content ">
            <h2 className="text-xl font-bold mb-5 text-center">
              WE ARE <span className="text-secondary font-bold">CHANGING</span>
            </h2>
            <p className="font-light text-sm leading-7">
              To transform Afghanistan from a developing to a developed country,
              several innovative and experienced Afghans joined together under a
              non-governmental, non-political, and non-profitable organization
              registered as People Empathy House Organization to contribute to
              transformation with the assistance of donors and other partners.
            </p>
          </div>
          <div className="mobile-wac-mockup p-1">
            <img src={wacPic} alt="wac mockup" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileAbout;
