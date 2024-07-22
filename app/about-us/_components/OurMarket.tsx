"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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
      <div className="grid grid-cols-2 px-40 gap-10">
        <motion.div
          className="flex flex-col items-center gap-4 px-16 py-8 rounded-xl bg-white shadow-sm"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          {/* <p className="absolute right-20 bottom-0 w-1/2 text-black pb-10 text-xl font-jakarta bg-white p-6 rounded-xl"> */}
          <motion.div className="w-full" whileHover={{ scale: 1.05 }}>
            <Image
              src="/images/aboutus/logistique.jpg"
              alt="quality"
              width={500}
              height={500}
              className="rounded-xl object-contain w-full h-full"
            />
          </motion.div>
          <h5 className="text-lg font-bold">
            Le rôle essentiel de l'équipe logistique chez Quality Mar
          </h5>
          <p>
            L'equipe logistique de Quality Mar est au coeur du systeme global
            des operations qui assure tous les produits arrivent a destination
            de la maniere la plus efficace, le plus rapidement possible afin de
            maximiser leur duree de vie.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col gap-4 px-16 py-8 rounded-xl bg-white shadow-sm"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          {/* <p className="absolute left-20 -bottom-8 w-1/2 text-black/80 pb-10 text-xl font-normal font-jakarta bg-white/80 p-6 rounded-xl"> */}
          <motion.div className="w-full" whileHover={{ scale: 1.05 }}>
            <Image
              src="/images/aboutus/exportation.jpg"
              alt="quality"
              width={500}
              height={500}
              className="rounded-xl object-contain w-full h-full"
            />
          </motion.div>
          <h5 className="text-lg font-bold">
            Expansion internationale de Quality Mar
          </h5>
          <p>
            Quality Mar exporte a differentes destinations a l'international:
            Union Europeenne, Pays Scandinaves, Russie, Moyen-Orient. Ambitieuse
            et ayant une production consequente, l'entreprise aspire a etendre
            ses ventes vers l'autres continents.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
