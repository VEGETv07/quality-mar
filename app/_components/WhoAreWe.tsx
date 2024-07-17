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
 const ref = useRef(null);
 const inView = useInView(ref);
 const controls1 = useAnimation();
 const controls2 = useAnimation();

 useEffect(() => {
          if (inView) {
            controls1.start({
              opacity:1,
                y: [100, 0], // Start from 100px below and move to original position
                transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                },
            });
            controls2.start({
              opacity:1,
                y: [-100, 0],
                transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                },
            });
        } else {
            controls1.start({
                opacity:0 // Hide when not in view
            });
            controls2.start({
                opacity:0 // Hide when not in view
            });
          }
 }, [inView, controls1, controls2]);

  return (
    <div ref={ref} className="h-screen bg-[#f7f9f8] flex flex-col items-center">
      <motion.div className="px-60" animate={controls2}>
        <h1 className="text-7xl font-semibold p-20 text-black text-center ">
          Qui sommes-nous?
        </h1>
        {/* <h4 className="text-lg lg:text-5xl font-bold text-black text-center pb-8">
          Quality Mar
        </h4> */}
        <h4 className="font-extrabold text-4xl text-[#00b254] text-center pb-4 font-primary">
          Société marocaine, produit et exporte des fruits et légumes.
        </h4>
        <p className="text-base md:text-xl pb-8 text-black/80 text-center font-primary">
          Avec plus de 300 hectares de cultures et 40 000 tonnes annuelles, nous
          approvisionnons les grandes surfaces européennes, garantissant des
          produits de qualité.
        </p>
      </motion.div>
      <div className="flex flex-col md:flex-row gap-8 px-60 py-10">
        {infos.map((info, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            animate={controls1}

            className="flex flex-col items-center justify-center gap-4 bg-white p-10 rounded-lg shadow-md"
          >
            <Image
              src={info.src}
              alt={info.title}
              width={100}
              height={100}
              className="w-24 h-24 "
            />
            <h3 className="text-xl font-bold">{info.title}</h3>
            <p className="text-center text-black/60 font-primary">
              {info.description}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.div
      whileTap={{scale:0.9}}
      animate={controls1}>
        <Link
          href="/about-us"
          className="bg-[#00b254] text-white px-4 py-2 rounded-full hover:bg-[#288b56] transition-all duration-300"
        >
          En savoir plus
        </Link>
      </motion.div>
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