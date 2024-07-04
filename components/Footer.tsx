import Image from "next/image";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white">
      <div>
        <div>
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            tenetur tempore a aperiam, veritatis optio dolor, iusto sequi
            temporibus accusamus consequuntur possimus!{" "}
          </p>
        </div>
        <div>
          <Link href="/">
            <FaFacebookF />
          </Link>
          <Link href="/">
            <FaInstagram />
          </Link>
          <Link href="/">
            <FaLinkedinIn />
          </Link>
          <Link href="/">
            <FaTwitter />
          </Link>
        </div>
      </div>
      <div>
        <div>
          <p>Explore</p>
        </div>
        <div>
          <ul className="font-light text-sm">
            <li className="flex gap-2">
              <FaLeaf />
              <Link href="">NOS PRODUITS</Link>
            </li>
            <li className="flex gap-2">
              <FaLeaf />
              <Link href="">NOS STATION</Link>
            </li>
            <li className="flex gap-2">
              <FaLeaf />
              <Link href="">NOS MARQUES</Link>
            </li>
            <li className="flex gap-2">
              <FaLeaf />
              <Link href="">NOS MARCHE</Link>
            </li>
            <li className="flex gap-2">
              <FaLeaf />
              <Link href="">QUALITE</Link>
            </li>
            <li className="flex gap-2">
              <FaLeaf />
              <Link href="">CONTACT-NOUS</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>News</div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <div>
          <p>Contact</p>
        </div>
        <div>
          <div>
            <FaPhoneAlt />
            <Link className="pl-2" href="tel:+212(0) 528 81 65 45">
              +212(0) 528 81 65 45
            </Link>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}
