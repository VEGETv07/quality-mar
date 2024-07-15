import Image from 'next/image';
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function OurMarks({marques}: {marques: {logo: string,name:string, description: string}[]}) {

  return (
    <div className="px-10 lg:px-40">
      <Carousel>
        <CarouselContent className="flex items-stretch">
          {marques.map((marque, index) => {
            return (
              <CarouselItem className="lg:basis-1/2 flex p-8">
                <div
                  key={index}
                  className="p-8 rounded-xl shadow-md grid grid-cols-1 flex-grow"
                >
                  <div className="w-full h-32  md:h-48 relative mb-6">
                    <Image
                      src={marque.logo}
                      alt="logo"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="w-full  grid grid-cols-1 gap-1">
                    <h4 className="text-sm md:text-md lg:text-lg font-bold">
                      {marque.name}
                    </h4>
                    <p className="w-full font-light  text-xs lg:text-base">
                      {marque.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
    </div>
  );
}