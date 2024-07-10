import Image from "next/image";
import React from "react";

export default function WhoAreWe() {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 px-10 pb-20 lg:px-40">
      <div className="hidden w-full md:block pt-8 lg:pt-0">
        <Image
          className="rounded-3xl"
          src="/images/home/whoAreWe.jpg"
          alt=""
          width={1000}
          height={1000}
        />
      </div>
      <div className="lg:p-10">
        <h1 className="text-4xl font-bold text-[#00b254] text-center pb-20">
          Qui sommes-nous?
        </h1>
        <p className="font-light text-lg pb-8 text-black/80">
          <span className=" font-semibold">Quality Mar</span> est une société marocaine de production et
          exportation des fruits et légumes. Avec un production de plus 300
          hectares dédiés aux tomates, poivron et courgette. Plus de 40 000
          tonnes de fruits et légumes produites chaque année.{" "}
        </p>
        <p className="font-light text-xl text-black/80">
          Nous approvisionnons les grandes surfaces européennes. Nous
          travaillons nos produits dans les meilleures conditions, avec un soin
          particulier apporté aux fruits et légumes fragiles et périssables.
        </p>
      </div>
    </div>
  );
}
