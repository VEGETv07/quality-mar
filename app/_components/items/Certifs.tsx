"use client";
import { motion, useMotionValue, animate } from 'framer-motion';
import Image from 'next/image';
import React from 'react'

const images = [
  "/images/quality/onssa.png",
  "/images/quality/brcfood.png",
  "/images/quality/global.png",
  "/images/quality/globalm.png",
  "/images/quality/sedex.png",
  "/images/quality/ics.png",
];
export default function Certifs() {


  return (
    <div className="bg-[#edf7ed] hidden md:flex justify-between items-center px-20 py-10">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt="certif"
          className="w-24 h-24 object-contain"
          width={100}
          height={100}
        ></Image>
      ))}
    </div>
  );
}
