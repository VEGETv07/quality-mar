import Image from 'next/image';
import React from 'react'

export default function OurMarks({marques}: {marques: {logo: string,name:string, description: string}[]}) {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 py-10 px-20">
      {marques.map((marque, index) => {
        return (
          <div
            key={index}
            className="p-8 rounded-xl shadow-md">
            <Image
              src={marque.logo}
              alt="logo"
              width={1000}
              height={1000}
              className="w-full h-1/2 rounded-xl mb-6 "
            />
            <div className="w-full h-1/2 grid grid-cols-1 gap-1">
              <h4 className="text-sm md:text-md lg:text-lg font-bold">{marque.name}</h4>
              <p className="w-full font-light  text-xs lg:text-md">
                {marque.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}