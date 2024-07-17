"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FormPopUp } from "@/app/contact-us/_components/FormPopUp";


const Links = [
  { name: "ACCUEIL", href: "/" },
  { name: "NOS PRODUITS", href: "/products" },
  { name: "À PROPOS", href: "/about-us" },
];

export default function Navbar() {
  // State to keep track of the active link
  const [activeLink, setActiveLink] = useState("/");
  const router = useRouter();
  const pathname = usePathname();

  // Update the active link based on the current pathname
  useEffect(() => {
    // setActiveLink(window.location.pathname);
    setActiveLink(pathname || "/");
  }, [pathname]);
  
  // Handle link click events  
  function handleClick(link: string, e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setActiveLink(link);
      router.push(link);
    
  }
  return (
    <ul className="hidden lg:flex gap-8 items-center text-black/50 text-lg font-medium">
      {Links.map((link) => (
        <motion.li key={link.href}
        // whileHover={{scale:1.05}}
        transition={{duration:0.3}}
        whileTap={{scale:0.95}}
        >
          <span
            className={
              activeLink === link.href
                ? "font-bold"
                : "hover:text-[#00c552] transition-all duration-300"
            }
          >
            <Link
              href={link.href}
              onClick={(e) => handleClick(link.href, e)}
            >
              {link.name}
            </Link>
          </span>
        </motion.li>
      ))}
      <div className="flex items-center gap-4">
        <FormPopUp/>    
      </div>
    </ul>
  );
}