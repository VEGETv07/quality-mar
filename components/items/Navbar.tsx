import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <ul className="hidden lg:flex gap-8 items-center text-black/50 text-sm font-medium">
      <li className="hidden lg:block font-semibold text-black">
        <Link href="/">ACCUEIL</Link>
      </li>
      <li>
        <Link href="products">NOS PRODUITS</Link>
      </li>
      <li>
        <Link href="station">NOS STATION</Link>
      </li>
      <li>
        <Link href="marques">NOS MARQUES</Link>
      </li>
      <li>
        <Link href="market">NOS MARCHE</Link>
      </li>
      <li>
        <Link href="quality">QUALITE</Link>
      </li>
      <li>
        <Link href="contact-us">CONTACT-NOUS</Link>
      </li>
    </ul>
  );
}
