"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

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
          className="fixed inset-0 w-full h-full bg-black/50 backdrop-blur-sm grid justify-end"
        >
          <div
            className={`flex flex-col justify-between relative w-64 h-full bg-white shadow-lg p-6 transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <AiOutlineClose
              onClick={toggleOpen}
              className="absolute top-4 right-4 text-2xl text-black/50 cursor-pointer"
            />
            <ul
              className={`flex flex-col gap-8 text-black/80  text-lg font-semibold mt-16 `}
            >
              {Links.map((link) => (
                <li
                  key={link.href}
                  className="  hover:text-[#00c552] transition-all duration-300"
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          <div className="flex flex-col gap-4 text-sm font-semibold py-10">
            <div className="flex items-center">
              <FaPhoneAlt className="text-[#eec044]" />
              <Link className="pl-2" href="tel:+212(0) 528 81 65 45">
                +212(0) 528 81 65 45
              </Link>
            </div>
            <div className="flex items-center">
              <IoMail className="text-[#eec044]" />
              <Link className="pl-2" href="mailto:contact@qualitymar.com">
                contact@qualitymar.com
              </Link>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
