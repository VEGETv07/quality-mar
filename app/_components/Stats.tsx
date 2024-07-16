"use client"


import Image from "next/image";
import CountUp from "react-countup"; 

export default function Stats() {
  return (
    <div className="bg-[#def2e6] grid grid-cols-2">
      <div>
        <Image
          src="/images/home/Tomate-Slide-02.jpg"
          alt="Tomate"
          width={1000}
          height={1000}
          className="w-4/5 p-8 rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-center ">
        <div>
          <h4 className="text-black text-xl font-bold pt-20 px-4">
            Quality Mar en quelque chiffress
          </h4>
        </div>
        <div className=" grid grid-cols-2 gap-8 my-20 text-[#39a737] p-4 text-center w-[80%]">
          <div>
            <h4 className="text-6xl font-bold">
              <CountUp scrollSpyOnce enableScrollSpy end={300} duration={2} />
              <sup>+</sup>
            </h4>
            <p className="text-xl font-semibold text-[#4a874b]">
              Hectares cultivés
            </p>
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
    </div>
  );
}
