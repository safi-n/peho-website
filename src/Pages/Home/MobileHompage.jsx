import VideoHero from "../../assets/PNG/videoHero.png";
import wwdPicture from "../../assets/JPG/wwdPicture.png";
import wwaVisionIcon from "../../assets/PNG/wwa-vision.png";
import wwaMissionIcon from "../../assets/PNG/wwa-mission.png";
import wwaGoalIcon from "../../assets/PNG/wwa-goal.png";
import ourPartnerIcon1 from '../../assets/PNG/ourPartnerIcon1.png'

const MobileHompage = () => {
  return (
    <div className="block md:hidden">
      <div className="mobile-home p-5 h-screen">
        <div className="mobile-hero-content-box mt-32 flex flex-col items-center">
          <h2 className="text-primary font-medium text-2xl mb-5">
            WHAT IS PEHO?
          </h2>
          <p className=" text-black text-start leading-8 font-light">
            PEHO is a Non governmental Non- profitable and Non- for profit
            organization with an Non independent legal identity. PEHO Aims to
            serve people and contribute into Afghanistan’s rehabilitation.
          </p>
          <div>
            <img src={VideoHero} alt="Video Hero" className="mt-4" />
          </div>
          <div className="mobile-hero-mockup w-28"></div>
        </div>
      </div>

      {/* --------- */}
      <div className=" flex items-center justify-center mt-14">
        <div className="wwd-box flex flex-col justify-center items-center">
          <h2 className="font-bold mb-4 text-2xl">
            WHAT WE <span className="text-bg-primary font-bold">DO?</span>
          </h2>
          <div className="mobile-wwd-pic-box">
            <img src={wwdPicture} alt="What we do" className="mobile-wwd-pic" />
          </div>
          <div className="wwd-text w-96 leading-7 p-7 text-center">
            <p className="font-light text-start">
              PEHO provides health and educational facilities Through vocational
              trainings, workshops, seminars, presentations, event’s, short and
              long courses and Implement health and educational professional
              projects.
            </p>
          </div>
        </div>
      </div>

      <div className="mobile-wwa-container w-screen flex flex-col items-center mt-20 mb-20">
        <div className="wwa-title">
          <h2 className="font-bold text-4xl mb-7">
            WHO WE <span className="text-bg-primary font-bold">ARE?</span>
          </h2>
        </div>
        {/* ------------ */}
        <div className="wwa-box flex flex-col -z-20">
          {/* Vision */}
          <div className="wwa-vision mb-4 text-center items-center flex flex-col p-5 bg-white drop-shadow-md">
            <div className="wwa-vision-img mb-4 flex items-center w-64 space-x-6">
              <img src={wwaVisionIcon} alt="vision icon" className="h-12" />
              <h2 className="text-xl">Vision</h2>
            </div>
            <div className="wwa-vision-title">
              <p className="text-xs w-64 font-light leading-5 text-left text-gray-200">
                A gender-equal Afghanistan, where poverty has been overcome, and
                everyone can get all the deserved healthcare and quality
                education.
              </p>
            </div>
          </div>
          {/* Mission */}
          <div className="wwa-mission mb-4 text-center items-center flex flex-col p-5 bg-white drop-shadow-md">
            <div className="wwa-mission-img mb-4 flex items-center w-64 space-x-6 ">
              <img src={wwaMissionIcon} alt="mission icon" className="h-12" />
              <h2 className="text-xl">Mission</h2>
            </div>
            <div className="wwa-mission-title">
              <p className="text-xs w-64 font-light leading-5 text-gray-200 text-left">
                To help vulnerable people inside Afghanistan by joining local
                residents, government authorities, and international
                organizations to fight against diseases, illiteracy, and gender
                discrimination.
              </p>
            </div>
          </div>
          {/* Goal */}
          <div className="wwa-goal mb-4 text-center flex flex-col items-center p-5 bg-white drop-shadow-md">
            <div className="wwa-goal-img mb-4 flex items-center w-64 space-x-6">
              <img src={wwaGoalIcon} alt="goal icon" className="h-12" />
              <h2 className="text-xl">Goal</h2>
            </div>
            <div className="wwa-goal-title">
              <p className="text-xs w-64 font-light leading-5 text-left">
                To reduce the suffering of vulnerable people by providing health
                advocacy to improve healthcare, vocational training to enhance
                sustainability, and means to gain equal education and work
                rights for the feminine gender.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-partner-container w-screen flex flex-col items-center mt-20 mb-20">
        <div className="title font-bold mb-12 text-2xl">
          <h2 className="">Our <span className="text-bg-primary font-bold"> Partner</span></h2>
        </div>
        <div className="mobile-partner-logo">
          <img src={ourPartnerIcon1} alt="partner pic" className="h-20"/>
        </div>
      </div>
    </div>
  );
};

export default MobileHompage;
