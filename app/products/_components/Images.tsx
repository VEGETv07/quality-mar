import React from "react";
import Image from "next/image";

export default function Images() {
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
    <div className="px-20 grid grid-cols-3 gap-8">
      {images.map((image, index) => (
        <div key={index} className="relative">
          <Image
            src={image.src}
            alt={image.alt}
            width={1000}
            height={1000}
            className="rounded-lg"
          />
          <div className="flex  absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Image
              src="/images/products/vegetables.png"
              alt="certif"
              width={50}
              height={50}
              className="bg-[#41c13f] rounded-lg shadow-md p-2 mb-2"
            />
            <p className="h-full flex items-center text-center text-[#41c13f] bg-white shadow-md rounded-lg px-4 py-1">
              {image.alt}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
