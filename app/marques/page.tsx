"use client"
import OurMarks from "./_components/OurMarks";
import { MarksTabs } from "./_components/MarksTab";
import { motion } from "framer-motion";
import useScrollToTop from "@/components/utils/useScrollToTop";
export default function Marques() {
    useScrollToTop();
  return (
    <div className="">
      <motion.div
        className="relative py-20 bg-[url('/images/aboutus/apropos.jpg')] bg-cover bg-center"
        initial={{ y: -1000, opacity: 0 }}
        animate={{ y: [50, -20, 20, 0], opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-green-500 opacity-50"></div>
        <h1 className="relative text-6xl bg-clip-text  pb-10 text-white font-bold text-center">
          NOS MARQUES
        </h1>
      </motion.div>
      <OurMarks />
      <div className="h-[40rem]">
        <MarksTabs />
      </div>
    </div>
  );
}
