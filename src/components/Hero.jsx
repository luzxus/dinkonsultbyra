import styles from "../style";
import { book} from "../assets";
import GetStarted from "./GetStarted";
import styled, { keyframes } from "styled-components";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>


        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Professionell <br className="sm:block hidden" />{" "}
            <span className="text-gradient"></span>{" "}
          </h1>
         
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Redovisning.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Är du i behov av professionell bokföring och redovisning till rimliga priser?
        </p>
        <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
<img src={book} style={{position: "relative", zIndex: "5", borderRadius: "50%"}}/>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

const Image = styled.div`
    height: 100%;
    width: 100%;
    background-size: cover;
    opacity: 0.85;
`;
export default Hero;
