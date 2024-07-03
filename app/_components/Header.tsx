import { IoMail } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex bg-green-700 px-12 py-2 text-white">
        <div className="flex  items-center px-2">
          <FaPhoneSquareAlt />
          <p className="pl-2">
            <a href="tel:+212(0) 528 81 65 45">+212(0) 528 81 65 45</a>
          </p>
        </div>
        <div className="flex  items-center px-2">
          <IoMail />
          <p className="pl-2">
            <a href="mailto:contact@qualitymar.com">contact@qualitymar.com</a>
          </p>
        </div>
      </div>
      <nav className="flex justify-between py-4 px-12 font-medium shadow-md">
        <div>Logo</div>
        <div>
          <ul className="flex j">
            <li className="pl-4 hover:text-green-700">
              ACCUEIL
            </li>
            <li className="pl-4 hover:text-green-700"><Link href="/about-us">QUI SOMME NOUS</Link></li>
            <li className="pl-4 hover:text-green-700"><Link href="/products">NOS PRODUITS</Link></li>
            <li className="pl-4 hover:text-green-700"><Link href="/station">NOTRE STATION</Link></li>
            <li className="pl-4 hover:text-green-700"><Link href="/marques">NOS MARQUES</Link></li>
            <li className="pl-4 hover:text-green-700"><Link href="/market">NOS MARCHES</Link></li>
            <li className="pl-4 hover:text-green-700"><Link href="/quality">QUALITE</Link></li>
            <li className="pl-4 hover:text-green-700"><Link href="/contact-us">CONTACTEZ-NOUS</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
