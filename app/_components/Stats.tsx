"use client"

import CountUp from "react-countup"; 

export default function Stats() {
  return (
    <div className="bg-[url('/images/Tomate-Slide-02.jpg')] bg-cover bg-center contrast-[80%]">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h4 className="text-white text-5xl font-bold pt-20">
            Quality Mar en quelque chiffres
          </h4>
        </div>
        <div className="flex justify-around gap-4 my-20 bg-white/30 text-black p-4  rounded-xl shadow-slate-400/50 shadow-sm text-center w-[80%]">
          <div>
            <h4 className="text-6xl font-bold">
              <CountUp enableScrollSpy end={300} duration={2} />
              <sup>+</sup>
            </h4>
            <p className="text-xl font-semibold">Hectares cultivés</p>
          </div>
          <div>
            <h4 className="text-6xl font-bold">
              <CountUp enableScrollSpy end={30} duration={2} />
              <sup>+</sup>
            </h4>
            <p className="text-xl font-semibold">Sites de production</p>
          </div>
          <div>
            <h4 className="text-6xl font-bold">
              <CountUp enableScrollSpy end={20} duration={2} />
              <sup>+</sup>
            </h4>
            <p className="text-xl font-semibold">Variétés Fruits/Légumes</p>
          </div>
          <div>
            <h4 className="text-6xl font-bold">
              <CountUp enableScrollSpy end={7} duration={2} />
              <sup>+</sup>
            </h4>
            <p className="text-xl font-semibold">Mois de production</p>
          </div>
        </div>
      </div>
    </div>
  );
}
