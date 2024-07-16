"use client";
import { motion, useMotionValue, animate, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react'
import useMeasure from 'react-use-measure';

const images = [
  "/images/certifs/onssa_a.webp",
  "/images/certifs/bcpfood.png",
  "/images/certifs/globalgap.png",
  "/images/certifs/sedex.png",
  "/images/certifs/ICS.png",
];
export default function Certifs() {

  // let [ref, {width}] = useMeasure()
  // const xTranslation = useMotionValue(0)

  // useEffect(()=>{
  //   let controls
  //   let finalPosition = -width / 2 -6
  //   controls = animate(xTranslation,[0, finalPosition],{
  //     ease:"easeInOut",
  //     duration:30,
  //     repeat:Infinity,
  //     repeatType:"loop",
  //     repeatDelay:0,
  //   })

  // },[xTranslation,width])

  return (
    <motion.div className=" hidden md:flex justify-between items-center px-20"
    // ref={ref}
    // style={{x:xTranslation}}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt="certif"
          className="w-24 h-24 object-contain"
          //  filter grayscale
          width={200}
          height={200}
          style={{ userSelect: "none" }}
          draggable="false"
        ></Image>
      ))}
    </motion.div>
  );
}
