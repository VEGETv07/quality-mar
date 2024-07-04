import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex bg-[#f33a3a] text-white py-1 px-20 font-light text-sm justify-between">
        <div className="flex justify-between">
          <div className="flex items-center">
            <FaPhoneAlt />
            <Link className="pl-2" href="tel:+212(0) 528 81 65 45">
              +212(0) 528 81 65 45
            </Link>
          </div>
          <div className="flex items-center pl-8">
            <IoMail />
            <Link className="pl-2" href="mailto:contact@qualitymar.com">
              contact@qualitymar.com
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <Link href="/" className="pl-8">
            <FaFacebookF />
          </Link>
          <Link href="/" className="pl-8">
            <FaInstagram />
          </Link>
          <Link href="/" className="pl-8">
            <FaLinkedinIn />
          </Link>
          <Link href="/" className="pl-8">
            <FaTwitter />
          </Link>
        </div>
      </div>
      <nav className="flex justify-between items-center px-20 p-6 shadow-sm">
        <div>
          <Image src="/logo.svg" alt="logo" width={180} height={180} />
        </div>
        <div>
          <ul className="flex gap-8 items-center text-black/50 text-sm font-medium">
            <li className="font-semibold text-black">
              <Link href="/">ACCUEIL</Link>
            </li>
            <li>
              <Link href="">NOS PRODUITS</Link>
            </li>
            <li>
              <Link href="">NOS STATION</Link>
            </li>
            <li>
              <Link href="">NOS MARQUES</Link>
            </li>
            <li>
              <Link href="">NOS MARCHE</Link>
            </li>
            <li>
              <Link href="">QUALITE</Link>
            </li>
            <li>
              <Link href="">CONTACT-NOUS</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
