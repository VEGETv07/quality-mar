import React from "react";
import { MarksTabs } from "../products/_components/MarksTabs";

export default function Marques() {

  return (
    <div className="grid grid-cols-1 bg-[#151515] text-white px-20">
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="px-20 py-40">
          <h1 className="text-3xl lg:text-7xl font-bold text-black text-center pb-4">NOS MARQUES</h1>

            
          <p className="text-base md:text-xl pb-8 text-black/80">
            Quality Mar a gagné la fidélité de ses clients et introduit différentes marques sur divers marchés grâce à une excellente stratégie commerciale. Nous nous efforçons d'obtenir la satisfaction totale de nos clients en répondant à leurs attentes et en améliorant constamment la qualité de nos produits. Orientée client, notre priorité est la satisfaction de nos partenaires et consommateurs, soutenue par diverses certifications internationales.
          </p>
        </div>
        <div>
          <Image
            src="/images/home/PHOTO1.jpg"
            alt="quality"
            width={5000}
            height={5000}
            className="rounded-xl hidden md:block"
          ></Image>
        </div>
      </div> */}

      {/* <OurMarks marques={marques} /> */}
          <div className=" py-20">
          <h1 className="text-3xl lg:text-7xl font-bold  text-center pb-10">NOS MARQUES</h1>
          <p className="text-base md:text-xl  text-white/80 text-center">
            Quality Mar a gagné la fidélité de ses clients et introduit différentes marques sur divers marchés grâce à une excellente stratégie commerciale. Nous nous efforçons d'obtenir la satisfaction totale de nos clients en répondant à leurs attentes et en améliorant constamment la qualité de nos produits. Orientée client, notre priorité est la satisfaction de nos partenaires et consommateurs, soutenue par diverses certifications internationales.
          </p>
        <MarksTabs />
      </div>
    </div>
  );

}
