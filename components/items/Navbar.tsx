import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <ul className="hidden lg:flex gap-8 items-center text-black/50 text-sm font-medium">
      <li className="hidden lg:block font-semibold text-black">
        <Link href="/">ACCUEIL</Link>
      </li>
      <li>
        <Link href="products" className="hover:text-[#00c552] transition-all duration-300">NOS PRODUITS</Link>
      </li>
      <li>
        <Link href="station" className="hover:text-[#00c552] transition-all duration-300">NOS STATION</Link>
      </li>
      <li>
        <Link href="marques" className="hover:text-[#00c552] transition-all duration-300">NOS MARQUES</Link>
      </li>
      <li>
        <Link href="market" className="hover:text-[#00c552] transition-all duration-300">NOS MARCHE</Link>
      </li>
      <li>
        <Link href="quality" className="hover:text-[#00c552] transition-all duration-300">QUALITE</Link>
      </li>
      <li>
        <Link href="contact-us" className="hover:text-[#00c552] transition-all duration-300">CONTACT-NOUS</Link>
      </li>
    </ul>
  );
}
