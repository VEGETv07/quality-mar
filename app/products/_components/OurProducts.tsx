import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';

export default function OurProducts() {
  return (
    <div className="relative x">
      <h1 className="text-7xl font-semibold pb-12 text-black text-center ">
        Nos Produits
      </h1>
      <div className="grid grid-cols-1 gap-10">
        <div className="px-10">
          <p className="text-base md:text-xl pb-8 text-black/80 font-primary">
            Quality Mar propose une large gamme de produits comprenant diverses
            variétés de tomates (rondes, allongées, cerise grappe), courgettes
            noires, poivrons et pastèques.
          </p>
          <p className="text-base md:text-xl pb-8 text-black/80 font-primary">
            La production est répartie dans les meilleurs terroirs de la région
            Souss-Massa, dans la plaine du sud du Maroc.
          </p>
          <p className="text-base md:text-xl pb-8 text-black/80 font-primary">
            Chaque année, plus de 30 000 tonnes de fruits et légumes sont
            récoltées à Agadir, garantissant des produits fraîchement récoltés
            et de haute qualité.
          </p>
        </div>
        <div className="flex gap-10 py-10 px-40">
          <div className="shadow-xl rotate-6">
            <Image
              src="/images/products/courgette.png"
              alt="quality"
              width={150}
              height={150}
              className="brightness-90 hover:brightness-100 transition-all duration-300"
            />
          </div>
          <div className="shadow-xl -rotate-6">
            <Image
              src="/images/products/poivrons.png"
              alt="quality"
              width={150}
              height={150}
              className="brightness-90 hover:brightness-100 transition-all duration-300"
            />
          </div>
          <div className="shadow-xl rotate-12">
            <Image
              src="/images/products/tomateRonde.png"
              alt="quality"
              width={150}
              height={150}
              className="brightness-90 hover:brightness-100 transition-all duration-300"
            />
          </div>
          <div className="shadow-xl -rotate-12">
            <Image
              src="/images/products/pastèques.png"
              alt="quality"
              width={150}
              height={150}
              className="brightness-90 hover:brightness-100 transition-all duration-3000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

