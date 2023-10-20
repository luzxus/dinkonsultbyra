import { profil1, robot } from "../assets";
import styles from "../style";
import Button from "./Button";

const CTA = () => {
  const email = "DINKONSULTBYRA@HOTMAIL.COM".toLowerCase();

  const openOutlook = () => {
    const recipientEmail = email; // Replace with the actual recipient's email address
    const subject = "Subject goes here"; // Replace with the desired subject
    const body = "Email body goes here"; // Replace with the desired email body

    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 sm:flex-none flex flex-col md:mr-[3.5rem]">
        <h2 className={styles.heading2}>Kontakta oss idag</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Vi är redo för att hjälpa dig och ditt företag.
        </p>
      </div>

      <div className="contact-text flex flex-col w-full mb-2">
        <div className="sm:hidden">
          <p className="text-lg flex justify-start items-center sm:w-full md:max-w-[485px] mb-2 mt-5 leading-7">
            Vill du förenkla ditt företagande?
            <br />
            Välkommen att kontakta oss för en offert på redovisningstjänster
            eller en kostnadsfri konsultation.
            <br />
          </p>
        </div>

        <p className="leading-7 contact-details mt-2 flex-col flex justify-start sm:w-full">
          <span className="font-bold">Din Konsultbyrå</span>
          Bissmarkgatan 16
          <br />
          30296 Halmstad
          <br />
          <span className="font-bold">{email}</span>
          Tel: 072-963-70-29
        </p>
      </div>

      <div className="w-full hidden sm:flex justify-end flex-col items-center">
        <img src={profil1} width="300px" className="mb-10 rounded-full" />

        <div className="hidden sm:flex w-[150px]">
          <button
            onClick={openOutlook}
            className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none `}
          >
            Boka möte
          </button>
        </div>
      </div>

      <div
        className={`${styles.flexCenter} sm:hidden sm:ml-10 ml-0 sm:mt-0 mt-10`}
      >
        <button
          onClick={openOutlook}
          className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none `}
        >
          Boka möte
        </button>
      </div>
    </section>
  );
};

export default CTA;
