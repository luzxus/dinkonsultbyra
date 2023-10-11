import styles from "./style";
import { Business,  Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, HowItWorks } from "./components";
import styled, { keyframes } from "styled-components";
import Prices from "./components/Prices";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
{/*     <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <ImageContainer>
          <Image src={city3} alt="City Image" />
          <CenteredText>
           <span style={{fontSize: "3.75rem"}}> Din Konsultbyrå  </span>
            <br/>
          <span style={{fontSize: "24px", color:"rgb(101 174 227 / 90%)"}}>Räkna med oss!</span> 
          </CenteredText>
        </ImageContainer>
      </div>
    </div> */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        {/* <Billing /> */}
        {/* <CardDeal /> */}
        <Testimonials />
        <Clients />
        <Prices/>
        <HowItWorks/>
        <CTA />
       {/*  <Contact/> */}
        <Footer />
      </div>
    </div>
  </div>
);


const flyOverImage = keyframes`
    0% {
        transform: translateY(-10%);
    }

    30% {
        transform: translateY(0);
    }
    100%{
      transform: translateY(-10%)
    }
`;
const CenteredText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 24px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  border-radius: 5px;
`;
const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100%;
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%; /* Ensures the image takes the full height of the container */
  width: 100%; /* Ensures the image takes the full width of the container */
  filter: grayscale(100%);
  opacity: 0.85;
  animation: ${flyOverImage} 60s linear infinite; /* Adjusted animation duration to make it faster */
`;


export default App;
