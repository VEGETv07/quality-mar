import Image from "next/image";
import React from "react";

export default function OurMarket() {
  return (
    <div>
      {/* <div className=" px-20 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col items-center justify-center w-4/5">
            <h2 className="text-lg lg:text-3xl  md:text-2xl font-bold pb-12">
              NOUS PRDUISONS AU MAROC ET ON COMMERCIALISE NOS PRODUITS DANS
              TOUTE L'EUROPE
            </h2>
            <p className="text-sm lg:text-base text-black/50 font-light pb-4">
              L'equipe logistique de Qality Mar est au coeur du systeme global
              des operations qui assure tous les produits arrivent a destination
              de la maniere la plus efficace, le plus rapidement possible afin
              de maximiser leur duree de vie.
            </p>
            <p className="text-sm lg:text-base text-black/50 font-light">
              Quality Mar exporte a differentes destinations a l'international:
              Union Europeenne, Pays Scandinaves, Russie, Moyen-Orient.
              Ambitieuse et ayant une production consequente, l'entreprise
              aspire a etendre ses ventes vers l'autres continents.
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
        </div>
      </div> */}
      <h2 className="text-xl font-bold pb-5 text-center text-[#41c13f]">
        NOUS PRDUISONS AU MAROC ET ON COMMERCIALISE NOS PRODUITS DANS TOUTE
        L'EUROPE
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-2 px-60 gap-10">
        <div className="flex flex-col justify-between  bg-white px-16 py-10 rounded-xl">
          <p className="text-[#4f894f] pb-10 text-xl font-primary">
            L'equipe logistique de Qality Mar est au coeur du systeme global des
            operations qui assure tous les produits arrivent a destination de la
            maniere la plus efficace, le plus rapidement possible afin de
            maximiser leur duree de vie.
          </p>
          <Image
            src="/images/aboutus/logistique.jpg"
            alt="quality"
            width={5000}
            height={5000}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-between  bg-white px-16 py-10 rounded-xl">
          <p className="text-[#4f894f] pb-10 text-xl font-primary">
            Quality Mar exporte a differentes destinations a l'international:
            Union Europeenne, Pays Scandinaves, Russie, Moyen-Orient. Ambitieuse
            et ayant une production consequente, l'entreprise aspire a etendre
            ses ventes vers l'autres continents.
          </p>
          <Image
            src="/images/aboutus/exportation.jpg"
            alt="quality"
            width={5000}
            height={5000}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}