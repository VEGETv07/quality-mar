import React from 'react'
import OurMarket from './_components/OurMarket'
import OurStation from './_components/OurStation'

export default function AboutUs() {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center py-10" style={{ textDecoration: 'underline', textDecorationColor: '#ff6347', textDecorationThickness: '5px' }}>
        À Propos de nous
      </h1>
      <OurMarket />
      {/* <OurStation /> */}
    </div>
  );
}