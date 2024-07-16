"use client";
import { motion, useMotionValue, animate, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react'
import useMeasure from 'react-use-measure';

const images = [
  "/images/quality/onssa.png",
  "/images/quality/brcfood.png",
  "/images/quality/global.png",
  "/images/quality/globalm.png",
  "/images/quality/sedex.png",
  "/images/quality/ics.png",
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
    <motion.div className=" hidden md:flex justify-between items-center "
    // ref={ref}
    // style={{x:xTranslation}}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt="certif"
          className="w-24 h-24 object-contain filter grayscale"
          width={100}
          height={100}
          style={{ userSelect: "none" }}
          draggable="false"
        ></Image>
      ))}
    </motion.div>
  );
}
