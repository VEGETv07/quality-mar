import { LuLeaf } from "react-icons/lu";


export default function Products() {
    const infos = [
      {
        id: 1,
        name: "Produit frais de qualité",
        desciption:
          "Des produits et des services conformes à la réglementation en vigueur et répondant aux exigences des clients.",
      },
      {
        id: 2,
        name: "Sécurité Alimentaire",
        desciption:
          "Une qualité optimale, une sécurité alimentaire et une traçabilité depuis l’origine.",
      },
      {
        id: 3,
        name: "Démarche Qualité",
        desciption:
          "Quality Mar a constamment pour objectif d’améliorer ses performances et la qualité de ses produits.",
      },
    ];
  return (
    <>
      <div className=" w-1/2 flex-col justify-between">
        <h3 className="font-semibold text-xl text-[#7dc642] pb-4">
          Pourquoi nous choisir ?
        </h3>
        <h2 className="font-bold text-5xl pb-8">
          Production & Exportation des Produits Agricoles
        </h2>
        <p className="text-black/50 text-lg">
          Quality Mar aspire à tirer le maximum des ressources naturelles
          marocaines, pour soutenir ses activités et promouvoir une agriculture
          écologiquement responsable.
        </p>
      </div>
      <div className="w-1/2 pb-8">
        {infos.map(info=>(

        <div className="flex gap-6 pb-8" key={info.id}>
          <div className="relative">
            <div className="bg-zinc-300/40 size-14"></div>
            <div className="bg-[#7dc642] absolute top-2 left-2 size-14 text-white flex items-center justify-center">
              <LuLeaf className="size-7" />
            </div>
          </div>
          <div className="px-2">
            <h4 className=" font-semibold pb-2 text-2xl text-black/80">
              {info.name}
            </h4>
            <p className="text-black/80 text-lg">
             {info.desciption}
            </p>
          </div>
        </div>
        ))}

      </div>
    </>
  );
}
