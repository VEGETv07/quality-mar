import Image from 'next/image';
import React from 'react'

export default function OurMarks({marques}: {marques: {logo: string,name:string, description: string}[]}) {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-20 py-10 ">
      {marques.map((marque, index) => {
        return (
          <div
            key={index}
            className="p-8 rounded-xl shadow-md grid grid-cols-1"
          >
            <div className="w-full h-32  md:h-48 relative mb-6">
              <Image
                src={marque.logo}
                alt="logo"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="w-full  grid grid-cols-1 gap-1">
              <h4 className="text-sm md:text-md lg:text-lg font-bold">
                {marque.name}
              </h4>
              <p className="w-full font-light  text-xs lg:text-base">
                {marque.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}