"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const Links = [
    { name: "ACCUEIL", href: "/" },
    { name: "NOS PRODUITS", href: "/products" },
    { name: "NOS STATION", href: "/station" },
    { name: "NOS MARQUES", href: "/marques" },
    { name: "NOS MARCHE", href: "/market" },
    { name: "QUALITE", href: "/quality" },
    { name: "CONTACT-NOUS", href: "/contact-us" },
  ];

  function toggleOpen() {
    setIsOpen(!isOpen);
  }
  function handleClose(e) {
    if (e.target.id === "overlay") {
      setIsOpen(false);
    }
  }

  return (
    <div className="z-50 ">
      <RxHamburgerMenu
        onClick={toggleOpen}
        className="text-2xl text-black/50 cursor-pointer"
      />
      {isOpen && (
        <div
          id="overlay"
          onClick={handleClose}
          className="absolute inset-0 w-full h-full bg-black/50 backdrop-blur-sm grid justify-end"
        >
          <div
            className={`relative w-64 h-full bg-white shadow-lg p-6 transition-transform duration-300 transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <AiOutlineClose
              onClick={toggleOpen}
              className="absolute top-4 right-4 text-2xl text-black/50 cursor-pointer"
            />
            <ul
              className={`flex flex-col gap-8 text-black text-2xl font-semibold mt-16 `}
            >
              {Links.map((link) => (
                <li>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
