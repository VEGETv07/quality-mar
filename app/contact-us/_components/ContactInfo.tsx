import Link from 'next/link';
import React from 'react'
import { IoCallOutline, IoLocationOutline, IoMailOutline } from 'react-icons/io5';

export default function ContactInfo() {
  return (
    <div className="w-full lg:w-1/5  p-4 rounded-xl  md:grid grid-cols-1 gap-4 lg:flex-col justify-evenly hidden  text-center text-xs lg:text-sm">
      <div className="w-1/3 lg:w-full grid justify-items-center py-8 px-6 bg-white rounded-xl shadow-md">
        <div className="">
          <IoLocationOutline className="w-full h-full" />
        </div>
        <p>Imm Annakhil, Sidi Bibi, Chtouka Ait Baha, Maroc</p>
      </div>
      <div className="w-1/3 lg:w-full grid justify-items-center py-2 px-6 bg-white rounded-xl shadow-md">
        <div className="">
          <IoMailOutline className="w-full h-full" />
        </div>
        <Link href="mailto:contact@qualitymar.com">contact@qualitymar.com</Link>
      </div>
      <div className="w-1/3 lg:w-full grid justify-items-center py-2 px-6 bg-white rounded-xl shadow-md">
        <div className="">
          <IoCallOutline className="w-full h-full" />
        </div>
        <Link href="tel:+212(0) 528 81 65 45">+212(0) 528 81 65 45</Link>
      </div>
    </div>
  );
}
