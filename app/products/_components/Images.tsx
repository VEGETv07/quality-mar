import React from 'react'
import Image from 'next/image'

export default function Images() {

    // const images = [
    //     {
    //         src: "/images/products/tomate.jpg",
    //         alt: "Tomate",
    //     },
    //    {
    //         src: "/images/products/tomateCerise.jpg",
    //         alt: "Tomate",
    //     },
    //     {
    //         src: "/images/products/pepper.jpg",
    //         alt: "Tomate",
    //     },
    //     {
    //         src: "/images/products/chiliPepper.jpg",
    //         alt: "Tomate",
    //     },
    //     {
    //         src: "/images/products/courgette.jpg",
    //         alt: "Tomate",
    //     },
    //     {
    //         src: "/images/products/watermelon.jpg",
    //         alt: "Tomate",
    //     },
    // ]
    const images = [
      {
        src: "/images/products/organic.jpg",
        alt: "organic",
      },
      {
        src: "/images/products/agriculture.jpg",
        alt: "agriculture",
      },
      {
        src: "/images/products/fresh.jpg",
        alt: "fresh",
      },
    ];
  return (
    <div className="px-80 grid grid-cols-3 gap-8">
      {images.map((image, index) => (
        <div key={index}>
          <Image src={image.src} alt={image.alt} width={1000} height={1000} />
        </div>
      ))}
    </div>
  );
}
