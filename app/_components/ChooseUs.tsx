"use client"
import Accordion from "./items/Accordion";


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
    <div className=" lg:grid lg:grid-cols-2 py-40 w-full" id="choose_us">
      <div className="">
        <div className="w-full">
          <h3 className="text-3xl font-semibold lg:text-5xl pb-12 text-black">
            Pourquoi nous choisir ?
          </h3>
          <h2 className="text-lg font-bold lg:text-xl pb-8 text-[#00b254]">
            Production & Exportation des Produits Agricoles
          </h2>
          <p className="w-full lg:w-4/5 text-black/50 text-sm lg:text-lg pb-16">
            Quality Mar aspire à tirer le maximum des ressources naturelles
            marocaines, pour soutenir ses activités et promouvoir une
            agriculture écologiquement responsable.
          </p>
        </div>
        <div className="w-full lg:w-4/5">
          {infos.map((info) => (
            <Accordion info={info} key={info.id} />
          ))}
        </div>
      </div>
      <div className="hidden md:block pt-8 lg:pt-0">
        <img src="/images/PHOTO1.jpg" alt="" className="rounded-3xl" />
      </div>
    </div>
  );
}
