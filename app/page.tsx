"use client"


import {Slider} from "@/app/_components/Slider";
import ChooseUs from "@/app/_components/ChooseUs";
import Stats from "./_components/Stats";
import Head from "next/head";
import ContactUsForm from "./_components/ContactUsForm";
import WhoAreWe from "./_components/WhoAreWe";
import OurQuality from "./_components/OurQuality";
import AgriImportant from "./_components/AgriImportant";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const controls = useAnimation();
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      const direction = event.deltaY > 0 ? 1 : -1;
      const currentSection = Math.round(window.scrollY / window.innerHeight);
      const nextSection = Math.min(
        Math.max(currentSection + direction, 0),
        sectionsRef.current.length - 1
      );

      window.scrollTo({
        top: nextSection * window.innerHeight,
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section>
        <motion.div animate={controls}>
          <div ref={(el) => {if(el) sectionsRef.current[0] = el}}>
            <Slider />
          </div>
          <div ref={(el) => el && (sectionsRef.current[1] = el)}>
            <WhoAreWe />
          </div>
          <div ref={(el) => el && (sectionsRef.current[2] = el)}>
            <ChooseUs />
          </div>
          <div ref={(el) => el && (sectionsRef.current[3] = el)}>
            <OurQuality />
          </div>
          {/* <AgriImportant/> */}
          {/* <Stats /> */}
        </motion.div>
      </section>
    </>
  );
}
