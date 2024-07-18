
"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Images } from "./Images";
import Image from "next/image";
import { ScrollDown } from "./scroll-down";

export function Slider1() {
  return (
    <HeroHighlight>
      <div className="flex justify-center items-center pb-20">
        <Image src="/logo.svg" alt="1" width={500} height={500} />
      </div>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700  max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        With insomnia, nothing&apos;s real. Everything is far away. Everything
        is a{" "}
        <Highlight className="text-white">
          copy, of a copy, of a copy.
        </Highlight>
      </motion.h1>
      <div className="flex justify-center items-center pt-60">
        <ScrollDown />
      </div>
    </HeroHighlight>
  );
}
