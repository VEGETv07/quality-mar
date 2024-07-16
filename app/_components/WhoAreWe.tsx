"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

const infos = [
  {
    src:"images/whoArewe/agriculture.svg",
    title:"Agriculture",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
  },
  {
    src:"images/whoArewe/fruits.svg",
    title:"Fruits et légumes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
  },
  {
    src:"images/whoArewe/vegetables.svg",
    title:"Végétal",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
  }
]
export default function WhoAreWe() {


  return (
    <div className="bg-[#f7f9f8] py-40 flex flex-col items-center">
      <div className="px-60 ">
        <h1 className="text-2xl font-semibold text-[#00b254] text-center ">
          Qui sommes-nous?
        </h1>
        {/* <h4 className="text-lg lg:text-5xl font-bold text-black text-center pb-8">
          Quality Mar
        </h4> */}
        <h4 className="font-extrabold text-4xl text-center pb-4 font-primary">
          Société marocaine, produit et exporte des fruits et légumes.
        </h4>
        <p className="text-base md:text-xl pb-8 text-black/80 text-center font-primary">
          Avec plus de 300 hectares de cultures et 40 000 tonnes annuelles, nous
          approvisionnons les grandes surfaces européennes, garantissant des
          produits de qualité.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 px-60 py-10">
        {infos.map((info, index) => (
          <motion.div
            key={index}
          whileHover={{scale:1.05}}
            className="flex flex-col items-center justify-center gap-4 bg-white p-10 rounded-lg shadow-md"
          >
            <Image
              src={info.src}
              alt={info.title}
              width={100}
              height={100}
              className="w-24 h-24 fill-current text-green-500"
            />
            <h3 className="text-2xl font-bold">{info.title}</h3>
            <p className="text-center text-black/60 font-primary">{info.description}</p>
          </motion.div>
        ))}
      </div>
      <Link href="/about-us" className="bg-[#00b254] text-white px-4 py-2 rounded-full hover:bg-[#288b56] transition-all duration-300">
        En savoir plus
      </Link>
      {/* <motion.div className="relative hidden w-full md:block">
        <Image
          className="h-full"
          src="/images/home/whoAreWe2.png"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </motion.div> */}
    </div>
  );
}