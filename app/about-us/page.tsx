import React from 'react'
import OurMarket from './_components/OurMarket'
import OurStation from './_components/OurStation'

export default function AboutUs() {
  return (
    <div className="bg-[#f7f9f8]">
      <div className="x">
        <h1 className="text-6xl bg-clip-text text-black font-bold text-center py-20">
          À propos de nous
        </h1>
      </div>
      <OurMarket />
      <OurStation />
    </div>
  );
}