import Image from "next/image";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white">
      <div className="flex justify-between px-40  py-10">
        <div className="w-1/3">
          <Image src="" alt="logo" width={100} height={100} />
          <p className="w-full">
            PRODUCTION CONDITIONNEMENT ET EXPORTATION DE PRODUITS AGRICOLES.
          </p>
        </div>
        <div className="w-1/3">
          <ul>
            <li className="flex items-center hover:text-[#3EB152] transition-all duration-200 ease-out">
              <FaCaretRight />
              <Link href="/products">NOS PRODUITS</Link>
            </li>
            <li className="flex items-center hover:text-[#3EB152] transition-all duration-200 ease-out">
              <FaCaretRight />
              <Link href="/station">NOTRE STATION</Link>
            </li>
            <li className="flex items-center hover:text-[#3EB152] transition-all duration-200 ease-out">
              <FaCaretRight />
              <Link href="/marques">NOS MARQUES</Link>
            </li>
            <li className="flex items-center hover:text-[#3EB152] transition-all duration-200 ease-out">
              <FaCaretRight />
              <Link href="/market">NOS MARCHES</Link>
            </li>
            <li className="flex items-center hover:text-[#3EB152] transition-all duration-200 ease-out">
              <FaCaretRight />
              <Link href="/quality">QUALITE</Link>
            </li>
          </ul>
        </div>
        <div className="w-1/3">
          <ul>
            <li className="flex items-center hover:text-[#3EB152] transition-all duration-200 ease-out">
              <FaCaretRight />
              <Link href="/about-us">QUI SOMME NOUS</Link>
            </li>
            <li className="flex items-center hover:text-[#3EB152] transition-all duration-200 ease-out">
              <FaCaretRight />
              <Link href="/contact-us">CONTACTEZ-NOUS</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center font-light border-t border-gray-500 p-2 ">
        <p>Tous les droits sont reserves 2024</p>
      </div>
    </footer>
  );
}
