import React from "react";
import OurMarks from "./_components/OurMarks";
import Image from "next/image";
import { MarksTabs } from "./_components/MarksTabs";

export default function Marques() {

  return (
    <div className="grid grid-cols-1 ">
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold text-black pb-10">NOS MARQUES</h1>
          <h4 className="text-xl lg:text-3xl font-bold text-[#00b254]  pb-8">
            Quality Mar
          </h4>
          <p className="text-sm lg:text-base text-black/50 py-4">
            A su gagner la fldélité de ses clients et à introduire différentes
            marques dans différents marchés gràce à son excellente stratégie
            commerciale. L'entreprise met ses compétences au service de toutes
            les demandes afin d'obtenir l'entiére satisfaction de ses clients
            tout en s'efforqant d'aller au-devant de leurs attentes et
            d'améliorer sans cesse le niveau de qualité de ses produits
            (respect, quantité, qualité, délai).
          </p>
          <p className="text-sm lg:text-base text-black/50 py-4">
            <span className="">Quality Mar</span> est davantage orienté Client,
            la satisfaction de ses partenaires ainsi que celles des
            consommateurs sont au coeur de ses préoccupations et faisant de la
            qualité sa riorité en rocédant à diverses certifications
            internationales.
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

      <OurMarks marques={marques} /> */}
      <MarksTabs />
    </div>
  );
}
