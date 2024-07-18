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
import Section1 from "./_components/Section1";

export default function Home() {
//   const controls = useAnimation();
//   const sectionsRef = useRef<HTMLDivElement[]>([]);

// useEffect(() => {
//   // Function to handle scroll events
//   const handleScroll = (event: WheelEvent) => {
//     // Check if the screen width is at least 1024px
//     const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
//     console.log(`Is large screen: ${isLargeScreen}`);

//     if (isLargeScreen) {
//       event.preventDefault();
//       // Determine scroll direction (1 for down, -1 for up)
//       const direction = event.deltaY > 0 ? 1 : -1;
//       // Calculate the current section based on the scroll position
//       const currentSection = Math.floor(window.scrollY / window.innerHeight);
//       // Calculate the next section to scroll to based on the current section and the scroll direction
//       const nextSection = Math.min(
//         Math.max(currentSection + direction, 0),
//         sectionsRef.current.length - 1
//       );

//       console.log(
//         `Current section: ${currentSection}, Next section: ${nextSection}`
//       );
//       // Scroll to the next section if it's different from the current section
//       if (currentSection !== nextSection) {
//         window.scrollTo({
//           top: nextSection * window.innerHeight,
//           behavior: "smooth",
//         });
//       }
//     } else {
//       console.log("Normal scrolling");
//     }
//   };
//   // Add the scroll event listener
//   window.addEventListener("wheel", handleScroll, { passive: false });
//   // Clean up the scroll event listener when the component unmount
//   return () => window.removeEventListener("wheel", handleScroll);
// }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section>
        {/* <motion.div animate={controls}> */}
          {/* <div
            ref={(el) => {
              if (el) sectionsRef.current[0] = el;
            }}
          > */}
            <Section1/>
            {/* <Slider /> */}
          {/* </div> */}
          {/* <div ref={(el) => el && (sectionsRef.current[1] = el)}> */}
            <WhoAreWe />
          {/* </div> */}
          {/* <div ref={(el) => el && (sectionsRef.current[2] = el)}> */}
            <ChooseUs />
          {/* </div> */}
          {/* <div ref={(el) => el && (sectionsRef.current[3] = el)}> */}
            <OurQuality />
          {/* </div> */}
          <Stats />
          {/* <div ref={(el) => el && (sectionsRef.current[4] = el)}
            style={{ height: "1px" }}
          ></div> */}
          {/* Placeholder for footer */}
        {/* </motion.div> */}
      </section>
    </>
  );
}











