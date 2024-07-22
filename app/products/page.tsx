"use client"
import React from 'react'
import OurProducts from './_components/OurProducts'
import { MarksTabs } from './_components/MarksTabs';
import useScrollToTop from '@/components/utils/useScrollToTop';
import { motion } from 'framer-motion'

export default function Products() {
  useScrollToTop()
  return (
    <div className="">
      <motion.div
        className="relative py-20 bg-[url('/images/aboutus/apropos.jpg')] bg-cover bg-center"
        initial={{ y: -1000, opacity: 0 }}
        animate={{ y: [50, -20, 20, 0], opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-green-500 opacity-50"></div>
        <h1 className="relative text-6xl bg-clip-text  pb-10 text-white font-bold text-center">
          Nos Produits
        </h1>
        {/* <div className="grid grid-cols-1 gap-20 ">
      <h1 className="text-7xl font-semibold pb-12 text-black text-center py-10">
        Nos Produits
      </h1> */}
      </motion.div>
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
