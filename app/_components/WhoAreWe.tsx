"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function WhoAreWe() {


  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8  ">
      <div className="px-20 py-40">
        <h1 className="text-3xl lg:text-7xl font-semibold text-black text-center pb-4">
          Qui sommes-nous?
        </h1>
        <h4 className="text-lg lg:text-3xl font-bold text-[#00b254]  pb-8">
          Quality Mar
        </h4>
        <p className="text-base md:text-xl pb-8 text-black/80">
          société marocaine, produit et exporte des fruits et légumes. Avec plus
          de 300 hectares de cultures et 40 000 tonnes annuelles, nous
          approvisionnons les grandes surfaces européennes, garantissant des
          produits de qualité.
        </p>
      </div>
      <div className="relative hidden w-full md:block">
        <Image
          className="h-full"
          src="/images/home/whoAreWe2.png"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}