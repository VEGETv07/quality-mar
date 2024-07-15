"use client"
import Accordion from "./items/Accordion";
import Image from "next/image";


export default function ChooseUs() {
 

  const infos = [
    {
      id: 1,
      name: "Produit frais de qualité",
      description:
        "Des produits et des services conformes à la réglementation en vigueur et répondant aux exigences des clients.",
    },
    {
      id: 2,
      name: "Sécurité Alimentaire",
      description:
        "Une qualité optimale, une sécurité alimentaire et une traçabilité depuis l’origine.",
    },
    {
      id: 3,
      name: "Démarche Qualité",
      description:
        "Quality Mar a constamment pour objectif d’améliorer ses performances et la qualité de ses produits.",
    },
  ];
  return (
    <div className="grid py-20 w-full " id="choose_us">
      <div className="">
        <div className="w-full">
          <h3 className=" font-semibold text-8xl pb-12 text-black text-center">
            Pourquoi nous choisir ?
          </h3>
          <h2 className="text-lg font-bold lg:text-2xl pb-8 text-[#00b254] text-center">
            Production & Exportation des Produits Agricoles
          </h2>
          <p className=" text-black/80 text-sm lg:text-xl pb-16 text-center">
            Quality Mar aspire à tirer le maximum des ressources naturelles
            marocaines, pour soutenir ses activités et promouvoir une
            agriculture écologiquement responsable.
          </p>
        </div>
        <div className="">
          {infos.map((info) => (
            <Accordion info={info} key={info.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
