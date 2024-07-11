import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Navbar from "./items/Navbar";
import SideBar from "./items/SideBar";
import BreadcrumbBar from "./items/BreadcrumbBar";

export default function Header() {
  return (
    <header className="lg:sticky top-0 z-50 shadow-md w-full">
      <div className="hidden lg:flex justify-center lg:justify-between bg-[#f33a3a] text-white py-1 px-10 lg:px-20 font-light text-sm ">
        <div className="flex justify-between">
          <div className="flex items-center">
            <FaPhoneAlt />
            <Link className="pl-2 " href="tel:+212(0) 528 81 65 45">
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
        <div className="hidden  lg:flex items-center">
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
      <nav className=" flex justify-between items-center px-10 lg:px-20 p-6 bg-white">
        <div>
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={180} height={180} />
          </Link>
        </div>
        <div>
          <Navbar />
        </div>
        <div className="lg:hidden h-full px-8">
          <SideBar />
        </div>
      </nav>

    </header>
  );
}
