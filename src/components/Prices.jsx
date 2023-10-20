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
      startingPrice: "500kr/timme",
    },
    {
        id: 3,

      title: "Redovisning",
      content:
        "Sköter du din bokföring själv och vill ha hjälp med bokslut eller deklaration så tar vi hand om det.",
      startingPrice: "2899kr",
    },
  ];
  const filteredTjänster = tjänster.filter((tjänst) => tjänst.readMoreContent)
  const [openDialog, setOpenDialog] = useState(Array(filteredTjänster.length).fill(false));

  const readMore = (index) => {
    const newOpenDialog = [...openDialog];
    newOpenDialog[index] = !newOpenDialog[index];
    setOpenDialog(newOpenDialog);
  };

  return (
    <section id="prices" className="w-full">
      <h1 className={`${styles.heading2} text-center`} >Enkel och tydlig prissättning</h1>
      <div className="flex flex-col m-4 h-full border-b border-gray-300"></div>
      <div className={`${layout.section} items-center justify-between`}>
        {tjänster.map((tjänst, index) => (
          <div
            key={tjänst.title}
            className="flex flex-col feedback-card p-4 h-full max-w-[300px] sm:w-full"
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
            {tjänst.readMoreContent && <div onClick={() => readMore(index)}>
              <Button styles={`w-[124px] mt-5 self-end`} title="Läs mer" isButton={true} />
            </div>}
            {openDialog[index] && <Dialog content={tjänst.readMoreContent} onClose={() => readMore(index)} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prices;
