// import React from "react";
// import Image from "next/image";

// export default function Images() {


//   return (
//     <div className="px-20 grid grid-cols-3 gap-8">
//       {images.map((image, index) => (
//         <div key={index} className="relative">
//           <Image
//             src={image.src}
//             alt={image.alt}
//             width={1000}
//             height={1000}
//             className="rounded-lg"
//           />
//           <div className="flex  absolute bottom-8 left-1/2 transform -translate-x-1/2">
//             <Image
//               src="/images/products/vegetables.png"
//               alt="certif"
//               width={50}
//               height={50}
//               className="bg-[#41c13f] rounded-lg shadow-md p-2 mb-2"
//             />
//             <p className="h-full flex items-center text-center text-[#41c13f] bg-white shadow-md rounded-lg px-4 py-1">
//               {image.alt}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client"; 
import React, { useEffect, useRef } from "react";
import Image from "next/image";



const images = [
  "/images/products/organic.jpg",
  "/images/products/agriculture.jpg",
  "/images/products/fresh.jpg",
  "/images/products/organic.jpg",
  "/images/products/agriculture.jpg",
  "/images/products/fresh.jpg",
];

export function Images() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-96 overflow-hidden" ref={parallaxRef}>
      <div className="px-20 grid grid-cols-3 gap-8">
        {images.map((src, index) => (
          <div key={index} className="relative">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={1000}
              height={1000}
              className="rounded-lg"
            />
            <div className="flex absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <Image
                src="/images/products/vegetables.png"
                alt="certif"
                width={50}
                height={50}
                className="bg-[#41c13f] rounded-lg shadow-md p-2 mb-2"
              />
              <p className="h-full flex items-center text-center text-[#41c13f] bg-white shadow-md rounded-lg px-4 py-1">
                Image {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}