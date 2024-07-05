"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="z-50">
      <RxHamburgerMenu
        onClick={toggleOpen}
        className="text-2xl text-black/50 cursor-pointer"
      />
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-md flex justify-end">
          <div className="relative w-64 h-full bg-white shadow-lg p-6">
            <AiOutlineClose
              onClick={toggleOpen}
              className="absolute top-4 right-4 text-2xl text-black/50 cursor-pointer"
            />
            <ul className="flex flex-col gap-8 text-black text-2xl font-semibold mt-16">
              <li>
                <Link href="/">ACCUEIL</Link>
              </li>
              <li>
                <Link href="/products">NOS PRODUITS</Link>
              </li>
              <li>
                <Link href="/station">NOS STATION</Link>
              </li>
              <li>
                <Link href="/marques">NOS MARQUES</Link>
              </li>
              <li>
                <Link href="/market">NOS MARCHE</Link>
              </li>
              <li>
                <Link href="/quality">QUALITE</Link>
              </li>
              <li>
                <Link href="/contact-us">CONTACT-NOUS</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
