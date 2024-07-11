import Image from 'next/image';
import React from 'react'

export default function OurProducts() {
  return (
    <div className="flex flex-col gap-10 lg:flex-row">
      <div className="lg:w-1/4">
        <Image
          src="/images/products/main.jpg"
          alt="quality"
          width={5000}
          height={5000}
          className="rounded-xl"
        ></Image>
      </div>
      <div className="px-10 lg:w-1/2">
        <h1 className="text-4xl font-bold pb-5">Nos Produits</h1>
        <p className="text-md font-light pb-5">
          <span className="font-semibold">Quality Mar</span> propose une large
          gamme de produits qui comprend, entre autres, diverses variétés de
          tomates (rondes, allongées, cerise grappe), courgettes noires,
          poivrons et pastéques.
        </p>
        <p className="text-md font-light">
          <span className="font-semibold">Quality Mar</span> dispose d'une
          production répartie dans les meilleurs terroirs des régio s de
          productions agricoles dans la plaine du sud, la Région sous Massa.
        </p>
        <p className="text-md font-light">
          Plus de 30 000 tonnes de fruits et légumes sont récoltées chaque année
          dans ce versant des meilleures saveurs marocaines, chaque terroir
          ayant sa spécificité en matiére de variété, situés å Agadir. Nous vous
          garantissons des fruits et légumes fraichement récoltés et de qualité.
        </p>
      </div>
      <div className="flex lg:flex-col justify-between flex-row  lg:w-1/4">
        <Image
          src="/images/products/Blueberry.png"
          alt="quality"
          width={100}
          height={100}
        ></Image>
        <Image
          src="/images/products/Strawberry.png"
          alt="quality"
          width={100}
          height={100}
        ></Image>
        <Image
          src="/images/products/apple.png"
          alt="quality"
          width={100}
          height={100}
        ></Image>
        <Image
          src="/images/products/Maize.png"
          alt="quality"
          width={100}
          height={100}
        ></Image>
      </div>
    </div>
  );
}
