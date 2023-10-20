import { quotes } from "../assets";
import { feedback } from "../constants";
import styles from "../style";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex  items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className="font-poppins  mr-8 font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]">
        Vad andra säger om oss
      </h2>
      <img
        src={quotes}
        alt="double_quotes"
        className=" hidden sm:flex w-[42.6px] h-[27.6px] object-contain"
      />
    </div>

    <Carousel1 />
  </section>
);

export default Testimonials;
