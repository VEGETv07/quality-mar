'use client'
import React from 'react'
import OurMarket from './_components/OurMarket'
import OurStation from './_components/OurStation'
import useScrollToTop from '@/components/utils/useScrollToTop';
import { motion } from 'framer-motion';

export default function AboutUs() {
  useScrollToTop();
  return (
    <div className="bg-[#f7f9f8]">
      <motion.div className="relative py-20 bg-[url('/images/aboutus/apropos.jpg')] bg-cover bg-center"
      initial={{y:-1000, opacity:0}}
      animate={{y:[50,-20,20 ,0], opacity:1}}
      transition={{delay:1, duration:0.5}}
      >
        <div className="absolute inset-0 bg-green-500 opacity-50"></div>
        <h1 className="relative text-6xl bg-clip-text  pb-10 text-white font-bold text-center">
          À propos de nous
        </h1>
        <p className="relative text-center text-white text-xl font-jakarta">
          Quality Mar est une entreprise marocaine qui produit et commercialise
          des produits alimentaires de haute qualite.
        </p>
      </motion.div>
      <OurStation />
      <OurMarket />
    </div>
  );
}