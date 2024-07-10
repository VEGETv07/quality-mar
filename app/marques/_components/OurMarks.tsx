import Image from 'next/image';
import React from 'react'

export default function OurMarks({marques}: {marques: {logo: string, description: string}[]}) {

  return (
    <div className="xl:px-40 grid grid-cols-1 gap-10 py-10 ">
      {marques.map((marque, index) => {
        const [firstWord, ...rest] = marque.description.split(' ');
        return (
          <div
            key={index}
            className={`grid grid-cols-1  md:flex gap-10 items-center p-10 bg-[#F5F5F5] rounded-xl shadow-sm ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
          >
            <Image
              src={marque.logo}
              alt="logo"
              width={1000}
              height={1000}
              className="w-full rounded-xl "
            />
            <p className="w-full font-light text-sm lg:text-lg">
              <span className="font-bold ">{firstWord}</span> {rest.join(' ')}
            </p>
          </div>
        );
      })}
    </div>
  );
}