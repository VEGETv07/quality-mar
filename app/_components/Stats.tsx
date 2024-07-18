"use client";

import Image from "next/image";
import CountUp from "react-countup";

export default function Stats() {
  return (
    <div className="grid grid-cols-2 items-center px-40" >
      {/* text */}
      <div>
        <h1 className="text-5xl font-bold font-jakarta pb-4">Quality Mar en quelque chiffress</h1>
        <p className="text-xl font-normal">
          Plus de 300 hectares de cultures, 40,000 tonnes de production
          annuelle, et une présence internationale avec des exportations vers
          les supermarchés européens.
        </p>
      </div>
      {/* stats */}
      <div className="grid grid-cols-2 gap-8 my-20 text-[#39a737] p-4 text-center w-[80%]">
        <div>
          <h4 className="text-6xl font-bold">
            <CountUp scrollSpyOnce enableScrollSpy end={300} duration={2} />
            <sup>+</sup>
          </h4>
          <p className="text-xl font-semibold text-[#4a874b]"></p>
        </div>
        <div>
          <h4 className="text-6xl font-bold">
            <CountUp scrollSpyOnce enableScrollSpy end={30} duration={2} />
            <sup>+</sup>
          </h4>
          <p className="text-xl font-semibold">Sites de production</p>
        </div>
        <div>
          <h4 className="text-6xl font-bold">
            <CountUp scrollSpyOnce enableScrollSpy end={20} duration={2} />
            <sup>+</sup>
          </h4>
          <p className="text-xl font-semibold">Variétés Fruits/Légumes</p>
        </div>
        <div>
          <h4 className="text-6xl font-bold">
            <CountUp scrollSpyOnce enableScrollSpy end={7} duration={2} />
            <sup>+</sup>
          </h4>
          <p className="text-xl font-semibold">Mois de production</p>
        </div>
      </div>
    </div>
  );
}
