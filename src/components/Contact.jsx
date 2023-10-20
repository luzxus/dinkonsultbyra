import React from "react";
import { lamp_desk_with_book_pen, profil1 } from "../assets";
import styles, { layout } from "../style";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Thank you for your submission"))
      .catch((error) => alert(error));
  };
  const openOutlook = () => {
    const recipientEmail = "recipient@example.com"; // Replace with the actual recipient's email address
    const subject = "Subject goes here"; // Replace with the desired subject
    const body = "Email body goes here"; // Replace with the desired email body

    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };
  const email = "DINKONSULTBYRA@HOTMAIL.COM".toLowerCase();

  return (
    <section
      className={`contact-page ${styles.flexCenter} ${styles.marginY} ${styles.padding}  flex-col bg-black-gradient-2 rounded-[20px] box-shadow relative`}
    >
      <div className="flex-1 flex flex-col mt-2 mr-5">
        <div id="title-image-container" className="flex">
          <img
            src={profil1}
            width="300px"
            className="mb-10 rounded-full absolute right-[0] top-[-7%]"
          />

          <h2 className={`${styles.heading2} mr-[14rem]`}>Kontakta oss idag</h2>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Vi är redo för att hjälpa dig och ditt företag.
        </p>
      </div>
      <div className={`${layout.section}`}>
        <div className="contact-text flex flex-col w-full mb-2">
          <p className="flex justify-start items-center sm:w-full md:w-[435px]">
            Vill du förenkla ditt företagande?
            <br />
            Välkommen att kontakta oss för en offert på redovisningstjänster
            eller en kostnadsfri konsultation.
            <br />
          </p>

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
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          netlify
          data-netlify="true"
          name="contact"
          action="/contact"
          method="post"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            name="name"
            className="input-field text-white"
            type="text"
            placeholder="Namn"
            required
          />
          <input
            required
            name="email"
            className="input-field text-white"
            type="email"
            placeholder="E-postadress"
          />
          <textarea
            name="message"
            className="textarea-field text-white"
            placeholder="Meddelande"
            required
          />
          <div className="flex items-center justify-end mt-2">
            <button className="submit-button">
              <span>Skicka</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
