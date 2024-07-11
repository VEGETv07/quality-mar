import Image from "next/image";
import React from "react";

export default function WhoAreWe() {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8  pb-10 lg:pb-20 lg:px-40">
      <div className="relative hidden w-full md:block pt-8 lg:pt-0">
        <Image
          className="rounded-3xl"
          src="/images/home/whoAreWe2.png"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="lg:py-10">
        <h1 className="text-3xl lg:text-5xl font-semibold text-black text-center pb-20">
          Qui sommes-nous?
        </h1>
        <h4 className="text-lg lg:text-xl font-bold text-[#00b254]  pb-8">
          Quality Mar
        </h4>
        <p className="font-light text-base md:text-lg pb-8 text-black/50">
          Est une société marocaine de production et exportation des fruits et
          légumes. Avec un production de plus 300 hectares dédiés aux tomates,
          poivron et courgette. Plus de 40 000 tonnes de fruits et légumes
          produites chaque année.{" "}
        </p>
        <p className="font-light text-base md:text-xl text-black/50">
          Nous approvisionnons les grandes surfaces européennes. Nous
          travaillons nos produits dans les meilleures conditions, avec un soin
          particulier apporté aux fruits et légumes fragiles et périssables.
        </p>
      </div>
    </div>
  );
}
