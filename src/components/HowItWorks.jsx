import React from "react";
import styles, { layout } from "../style"; // Import your existing styles and layout

const HowItWorks = () => {
  return (
    <section id="how-it-works" className={`${layout.section} bg-black-gradient-2 rounded-[20px] box-shadow p-5`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>HUR GÅR DET TILL?</h2>
        <div className="mt-6">
          <div className="mb-6">
            <p className={styles.paragraph} style={{color: "white", fontSize: "20px"}}>Steg 1. Lämna in underlag</p>
            <p className={styles.paragraph}>
              Här inleds processen med att samla in relevanta ekonomiska dokument och information. Detta kan inkludera bankutdrag, fakturor, kvitton, och andra finansiella handlingar som är nödvändiga för att utföra bokföring och redovisning.
            </p>
          </div>
          <div className="mb-6">
            <p className={styles.paragraph} style={{color: "white", fontSize: "20px"}}>Steg 2. Vi påbörjar arbetet</p>
            <p className={styles.paragraph}>
              Här börjar själva redovisningsarbetet. Byrån utför bokföring, skatteberäkningar, rapportering och andra relevanta uppgifter enligt överenskomna tidsramar. Klienten hålls löpande informerad om ekonomiska resultat och eventuella frågor som uppstår.
            </p>
          </div>
          <div className="mb-6">
            <p className={styles.paragraph} style={{color: "white", fontSize: "20px"}}>Steg 3. Rapport</p>
            <p className={styles.paragraph}>
              En viktig del av processen är att regelbundet rapportera resultat och diskutera klientens ekonomiska situation med dem. Detta säkerställer att klienten är medveten om sin ekonomiska hälsa och kan fatta informerade beslut.
            </p>
          </div>
          <div className="mb-6">
            <p className={styles.paragraph} style={{color: "white", fontSize: "20px"}}>Steg 4. Årligt översyn</p>
            <p className={styles.paragraph}>
              Redovisningsbyrån utför vanligtvis en årlig översyn av klientens ekonomiska situation för att säkerställa att strategin fortfarande är relevant och effektiv. Eventuella ändringar i lagar och regler kan också kräva uppdateringar.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">Steg 5. Långsiktig relation</h3>
            <p className={styles.paragraph} style={{color: "white", fontSize: "20px"}}>
              Byråns mål är att upprätthålla en långsiktig och ömsesidigt givande relation med klienten. Kundens tillfredsställelse och förtroende är centrala för att upprätthålla denna relation och säkerställa att klientens ekonomi hanteras på bästa möjliga sätt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
