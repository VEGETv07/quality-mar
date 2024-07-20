"use client"
import React from 'react'
import OurProducts from './_components/OurProducts'
import { MarksTabs } from './_components/MarksTabs';

export default function Products() {
  return (
    <div className="grid grid-cols-1 gap-20 ">
      <OurProducts />

      {/* <Images /> */}
      <div className="bg-[#f7f9f8] py-20 rounded-t-3xl">
        <h1 className="text-3xl lg:text-6xl text-center font-semibold py-10 text-[#39a737] ">
          NOS MARQUES
        </h1>
        <p className="text-sm lg:text-xl  text-center leading-[1.75] text-[#256d24]/80 lg:px-40 px-10 font-primary">
          Quality Mar a gagné la fidélité de ses clients et introduit
          différentes marques sur divers marchés grâce à une excellente
          stratégie commerciale. Nous nous efforçons d'obtenir la satisfaction
          totale de nos clients en répondant à leurs attentes et en améliorant
          constamment la qualité de nos produits. Orientée client, notre
          priorité est la satisfaction de nos partenaires et consommateurs,
          soutenue par diverses certifications internationales.
        </p>
        <MarksTabs />
      </div>
    </div>
  );
}
