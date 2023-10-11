import styles from "../style";
import Button from "./Button";

const CTA = () => {
  const openOutlook = () => {
    const recipientEmail = "recipient@example.com"; // Replace with the actual recipient's email address
    const subject = "Subject goes here"; // Replace with the desired subject
    const body = "Email body goes here"; // Replace with the desired email body
  
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  
    window.location.href = mailtoLink;
  };
return(
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Kontakta oss idag</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Vi är redo för att hjälpa dig och ditt företag.
      </p>
    </div>

       <div className="contact-text flex flex-col w-full mb-2">
            <p className="text-lg flex justify-start items-center sm:w-full md:w-[435px] mb-2 mt-5 leading-7">
          Vill du förenkla ditt företagande? 
          <br/>
          Välkommen att kontakta oss för en
          offert på redovisningstjänster eller en kostnadsfri konsultation.
          <br />
          </p>
          <p className="leading-7 contact-details mt-2 flex-col flex justify-start sm:w-full">
           <span className="font-bold">Din Konsultbyrå</span> 
            Bismarkgatan 13
            <br />
            30224 Halmstad
            <br />
            <span className="font-bold">info@dinkonsultbyra.se</span>
            Tel: 073-999-99-99
          </p>
        </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <button 
      onClick={openOutlook}
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none `}
      
      >Boka möte</button>
    </div>
  </section>
)
}

export default CTA;
