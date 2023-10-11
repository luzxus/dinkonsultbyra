import React, {useState} from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import Dialog from "./Dialog";

const Prices = () => {
  const tjänster = [
    {
        id: 1,
      title: "Bokföring",
      content:
        "Löpande bokföring med inriktning mot enskild verksamhet, små och medelstora bolag",
      readMoreContent: [
        "Du får en personlig konsult som utför den löpande bokföringens samtliga delar och ger dig rapporter hur det går i företaget. Uppstår det frågor finns konsulten ett telefonsamtal eller ett mail ifrån.",
      ],
      startingPrice: "2700kr/kvartal",
    },
    {
        id: 2,

      title: "Akuten",
      content:
        "Sköter du din bokföring själv men stött på ett problem som du behöver hjälp med är du välkommen att kontakta oss.",
      readMoreContent: ["Vi löser hela den skiten du har hamant och och du kan koppla av utan att oroa dig för att hamna i fängelset vilket du hade gjort om du inte kontaktat oss!"],
      startingPrice: "500kr/timme",
    },
    {
        id: 3,

      title: "Redovisning",
      content:
        "Sköter du din bokföring själv och vill ha hjälp med bokslut eller deklaration så tar vi hand om det.",
      readMoreContent: ["Är du inkompetent som de flesta småföretagare så finns vi här för dig och löser din bokföring"],
      startingPrice: "2899kr",
    },
  ];
  const width = 100 / tjänster.length;

 
  const [openDialog, setOpenDialog] = useState(Array(tjänster.length).fill(false));

  const readMore = (index) => {
    const newOpenDialog = [...openDialog];
    newOpenDialog[index] = !newOpenDialog[index];
    setOpenDialog(newOpenDialog);
  };

  return (
    <section id="prices" >
      <h1 className={styles.heading2}>Enkel och tydlig prissättning</h1>
      <div className="flex flex-col m-4 h-full border-b border-gray-300"></div>
      <div className={`${layout.section} items-center`}>
        {tjänster.map((tjänst, index) => (
          <div
            style={{ width: `${width}%` }}
            key={tjänst.title}
            className="flex flex-col feedback-card p-4 h-full"
          >
            <h2 className="font-poppins font-semibold text-[32px] text-white">
              {tjänst.title}
            </h2>
            <p className={`${styles.paragraph} py-2`}>{tjänst.content}</p>
            <p
              className={`text-white font-poppins text-[18px] font-extrabold mt-auto`}
              style={{ width: "fit-content" }}
            >
              Från {tjänst.startingPrice}
            </p>
            <div onClick={() => readMore(index)}>
              <Button styles={`w-[124px] mt-5 self-end`} title="Läs mer" isButton={true} />
            </div>
            {openDialog[index] && <Dialog content={tjänst.readMoreContent} onClose={() => readMore(index)} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prices;
