"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
    const Links = [
      { name: "ACCUEIL", href: "/" },
      { name: "NOS PRODUITS", href: "/products" },
      { name: "NOS STATION", href: "/station" },
      { name: "NOS MARQUES", href: "/marques" },
      { name: "NOS MARCHE", href: "/market" },
      { name: "QUALITE", href: "/quality" },
      { name: "CONTACT-NOUS", href: "/contact-us" },
    ];

export default function Navbar() {
   const [activeLink, setActiveLink] = useState("/");
      useEffect(() => {
        setActiveLink(window.location.pathname);
      }, []);

    function handleClick(link:string){
        setActiveLink(link)
    }
  return (
    <ul className="hidden lg:flex gap-8 items-center text-black/50 text-sm font-medium">

      {Links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} onClick={() => handleClick(link.href)}
              className={
                activeLink === link.href
                  ? "font-bold"
                  : "hover:text-[#00c552] transition-all duration-300"
              }
            >
              {link.name}  
          </Link>
        </li>
      ))}
    </ul>
  );
}
