import Image from 'next/image'
import React from 'react'


const products = [
  {
    image: "/images/products/fresh.jpg",
    category: "Agriculture",
    product: "Products",
  },
];

export default function Images() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 xl:px-40 lg:px-10 sm:px-40">
        {[...products, ...products, ...products].map((product, index) => (
          <div className="relative shadow-lg" key={index}>
            <Image
              src={product.image}
              alt="product-1"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute -bottom-5 left-[50%] bg-white p-2 rounded-lg shadow-md transform -translate-x-1/2 w-[6rem] md:w-[12rem] lg:w-[10rem] xl:w-[18rem]">
              <h4 className="text-xl lg:text-2xl font-light text-black font-shadow text-center ">
                {product.category}
              </h4>
              <p className="text-base lg:text-xl font-medium flex items-center relative text-[#49a760] font-jakarta">
                <span className="flex items-center justify-center flex-grow h-px bg-[#49a760] mr-2 min-w-[10px] "></span>
                {product.product}
                <span className="flex items-center justify-center flex-grow h-px bg-[#49a760] ml-2 min-w-[10px]"></span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
