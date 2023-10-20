import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} cursor-pointer w-full mt-2`}>
 
        <p className="font-poppins font-medium text-[26px] ">
          <span className="text-gradient">Boka kostnadsfri konsultation</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      
   
  </div>
);

export default GetStarted;
