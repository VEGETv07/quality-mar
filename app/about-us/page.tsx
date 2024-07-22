import React from 'react'
import OurMarket from './_components/OurMarket'
import OurStation from './_components/OurStation'

export default function AboutUs() {
  return (
    <div className="bg-[#f7f9f8]">
      <div className="pt-40 pb-20">
        <h1 className="text-6xl bg-clip-text text-black font-bold text-center">
          À propos de nous
        </h1>
      </div>
      <OurMarket />
      <OurStation />
    </div>

  );
}