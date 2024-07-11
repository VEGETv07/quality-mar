"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const Links = [
  { name: "ACCUEIL", href: "/" },
  { name: "QUALITE", href: "#quality" },
  { name: "NOS PRODUITS", href: "/products" },
  { name: "NOS STATION", href: "/station" },
  { name: "NOS MARQUES", href: "/marques" },
  { name: "NOS MARCHE", href: "/market" },
  { name: "CONTACT-NOUS", href: "/contact-us" },
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
    if (link === "#quality") {
      router.push("/#quality");
    } else {
      router.push(link);
    }
  }
  return (
    <ul className="hidden lg:flex gap-8 items-center text-black/50 text-sm font-medium">
      {Links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={(e) => handleClick(link.href, e)}
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
