import { RiScrollToBottomLine } from "react-icons/ri";
import {  motion } from "framer-motion";
export const ScrollDown =()=> {

  return (
    <motion.div
      animate={{
        y: [0, 20, 0], // Keyframes for up and down animation
      }}
      transition={{
        duration: 2, // Duration of one cycle
        repeat: Infinity, // Repeat infinitely
        ease: "easeInOut", // Easing function
      }}
    >
      <RiScrollToBottomLine className="text-3xl"/>
    </motion.div>
  );
}
