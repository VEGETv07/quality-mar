import Link from 'next/link';
import React from 'react'
import { IoCallOutline, IoLocationOutline, IoMailOutline } from 'react-icons/io5';

export default function ContactInfo() {
  return (
    <div className="w-full lg:w-1/5 bg-white p-4 rounded-xl shadow-md  lg:flex-col justify-evenly hidden md:flex text-center text-xs lg:text-sm">
      <div className="w-1/3 lg:w-full flex flex-col  items-center lg:justify-between lg:border-b-2 border-black-gray-500 py-2 px-6 ">
        <div className="w-2/5 h-2/5 lg:w-1/2 lg:h-1/2">
          <IoLocationOutline className="w-full h-full" />
        </div>
        <p>Imm Annakhil, Sidi Bibi, Chtouka Ait Baha, Maroc</p>
      </div>
      <div className="w-1/3 lg:w-full flex flex-col items-center lg:justify-between lg:border-b-2 border-black-gray-500 py-2 px-6 ">
        <div className="w-2/5 h-2/5 lg:w-1/2 lg:h-1/2">
          <IoMailOutline className="w-full h-full" />
        </div>
        <Link href="mailto:contact@qualitymar.com">contact@qualitymar.com</Link>
      </div>
      <div className="w-1/3 lg:w-full flex flex-col items-center lg:justify-between py-2 px-6 ">
        <div className="w-2/5 h-2/5 lg:w-1/2 lg:h-1/2">
          <IoCallOutline className="w-full h-full" />
        </div>
        <Link href="tel:+212(0) 528 81 65 45">+212(0) 528 81 65 45</Link>
      </div>
    </div>
  );
}
