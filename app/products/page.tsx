import React from 'react'
import OurProducts from './_components/OurProducts'
import {Images} from './_components/Images'
import { MarksTabs } from './_components/MarksTabs';

export default function Products() {
  return (
    <div className="grid grid-cols-1 gap-20 p-20">
      <OurProducts />
      <Images />
      <div className=" py-20">
        <h1 className="text-3xl lg:text-7xl font-bold  text-center pb-10">
          NOS MARQUES
        </h1>
        <p className="text-base md:text-xl  text-white/80 text-center">
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
