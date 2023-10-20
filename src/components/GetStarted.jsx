import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} cursor-pointer w-full mt-2`}>
 
        <p className="font-poppins font-medium text-[26px] flex-1 p-10 text-center w-full flex items-center">
          <span className="text-gradient sm:mr-5">Boka kostnadsfri konsultation</span>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain " />
          
        </p>
      
      
   
  </div>
);

export default GetStarted;
