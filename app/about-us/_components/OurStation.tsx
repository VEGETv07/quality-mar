'use client'
import Image from 'next/image';
import React, { useRef } from 'react'
import CountUp from 'react-countup';
import {motion, useInView} from 'framer-motion'

export default function OurStation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });

  return (
    <div className="grid grid-cols-2 px-40 mt-20" ref={ref}>
      {isInView && (
        <>
          <motion.div
            className="my-10 p-10 w-full px-20 font-jakarta bg-white rounded-xl"
            initial={{ x: -100 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-7xl font-semibold text-center pb-10">
              Nos Station
            </h2>
            <p>
              Tous Ies fruits et Iégumes récoltés sont emballés dans notre
              station de conditionnement, chacune équipée de : un pré calibrage
              avec tris couleurs.
            </p>
            <p>
              Des lignes de conditionnement. Des lignes d'emballage spécifiques
              : pour Ies cartons, pour les plateaux, pour les barquettes et pour
              les filets.
            </p>
            <p>
              Un laboratoire permettant d'effectuer les contröles qualité de nos
              fruits.
            </p>
            <p>
              Fruits récoltés et emballés sur place Quality Mar a incorporé dans
              son processus de onditionnement toutes Ies bonnes pratiques
              relatives au conditionnement de ses produits.
            </p>
            <p>
              La station de conditionnement Quality Mar est dotée d'un
              équipement de pointe et de systémes d'information (no de
              traqabilité, code-barres, ...) respectant les derniers standards
              de certification.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 p-10 h-full">
            <Image
              src="/images/certifs/quality-bg.jpg"
              alt="station"
              width={500}
              height={500}
              className="rounded-xl w-full h-full"
            />
            <div className="grid grid-cols-2 gap-4 bg-white rounded-xl p-8">
              <motion.div
                className="bg-[#f7f9f8] rounded-xl p-4"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <h4 className="text-3xl font-medium">
                  <CountUp
                    scrollSpyOnce
                    enableScrollSpy
                    end={300}
                    duration={2}
                  />
                  <sup>+</sup>
                </h4>
                <p className="text-sm  font-jakarta font-semibold text-[#39a737]">
                  Hectares cultivés
                </p>
              </motion.div>
              <motion.div
                className="bg-[#f7f9f8] rounded-xl p-4"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <h4 className="text-3xl font-medium">
                  <CountUp
                    scrollSpyOnce
                    enableScrollSpy
                    end={30}
                    duration={2}
                  />
                  <sup>+</sup>
                </h4>
                <p className="text-sm  font-jakarta font-semibold text-[#39a737]">
                  Sites de production
                </p>
              </motion.div>
              <motion.div
                className="bg-[#f7f9f8] rounded-xl p-4"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <h4 className="text-3xl font-medium">
                  <CountUp
                    scrollSpyOnce
                    enableScrollSpy
                    end={20}
                    duration={2}
                  />
                  <sup>+</sup>
                </h4>
                <p className="text-sm  font-jakarta font-semibold text-[#39a737]">
                  Variétés Fruits/Légumes
                </p>
              </motion.div>
              <motion.div
                className="bg-[#f7f9f8] rounded-xl p-4"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <h4 className="text-3xl font-medium">
                  <CountUp scrollSpyOnce enableScrollSpy end={7} duration={2} />
                  <sup>+</sup>
                </h4>
                <p className="text-sm  font-jakarta font-semibold text-[#39a737]">
                  Mois de production
                </p>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}