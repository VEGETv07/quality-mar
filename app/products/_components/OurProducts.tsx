import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';
import Images from './Images';
import { FaAppleAlt, FaMapMarkerAlt, FaWeightHanging } from 'react-icons/fa';

export default function OurProducts() {
  return (
    <div className="relative pt-40">
      <h1 className="text-7xl font-semibold pb-12 text-black text-center ">
        Nos Produits
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-20 px-10 lg:px-40">
        <motion.div
          className="bg-white px-6 py-4 flex items-start border-b-2 lg:border-r-2 lg:border-b-0 border-gray-200"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5,delay:0.5 }}
        >
          <div className="flex items-center mr-4">
            <FaAppleAlt className="text-2xl text-red-500 mr-2" />
          </div>
          <div>
            <h2 className="text-xl font-semibold pb-2">Nos Produits</h2>
            <p className="text-sm md:text-xl text-black/80 font-primary">
              Quality Mar propose une large gamme de produits comprenant
              diverses variétés de tomates (rondes, allongées, cerise grappe),
              courgettes noires, poivrons et pastèques.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white px-6 py-4 flex items-start border-b-2 lg:border-r-2 lg:border-b-0 border-gray-200"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5,delay:0.5 }}
        >
          <div className="flex items-center mr-4">
            <FaMapMarkerAlt className="text-2xl text-green-500 mr-2" />
          </div>
          <div>
            <h2 className="text-xl font-semibold pb-2">Région</h2>
            <p className="text-sm md:text-xl text-black/80 font-primary">
              La production est répartie dans les meilleurs terroirs de la
              région Souss-Massa, dans la plaine du sud du Maroc.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white px-6 py-4 flex items-start"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5,delay:0.5 }}
        >
          <div className="flex items-center mr-4">
            <FaWeightHanging className="text-2xl text-blue-500 mr-2" />
          </div>
          <div>
            <h2 className="text-xl font-semibold pb-2">Production Annuelle</h2>
            <p className="text-sm md:text-xl text-black/80 font-primary">
              Chaque année, plus de 30 000 tonnes de fruits et légumes sont
              récoltées à Agadir, garantissant des produits fraîchement récoltés
              et de haute qualité.
            </p>
          </div>
        </motion.div>
      </div>

      <Images />
    </div>
  );
}