import Link from "next/link";
import React from "react";

export default function Navbar() {
    const Links = [
      { name: "NOS PRODUITS", href: "/products" },
      { name: "NOS STATION", href: "/station" },
      { name: "NOS MARQUES", href: "/marques" },
      { name: "NOS MARCHE", href: "/market" },
      { name: "QUALITE", href: "/quality" },
      { name: "CONTACT-NOUS", href: "/contact-us" },
    ];
  return (
    <ul className="hidden lg:flex gap-8 items-center text-black/50 text-sm font-medium">
      <li className="hidden lg:block font-semibold text-black">
        <Link href="/">ACCUEIL</Link>
      </li>
{Links.map(link=>(
<li key={link.href}>
  <Link href={link.href} className="hover:text-[#00c552] transition-all duration-300">{link.name}</Link>
</li>))}
      
    </ul>
  );
}
