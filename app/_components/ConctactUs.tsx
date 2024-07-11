import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

function ConctactUs() {
  return (
    <div className="h-1/2  px-40 bg-[url('/images/home/background.jpg')] bg-cover bg-center">
      <div className="flex items-center justify-center lg:justify-start lg:w-1/3 h-full py-20">
        <div className="my-20  text-white p-4  ">
          <p className="text-md font-light pb-4">Bienvenue à Quality Mar</p>
          <p className="text-6xl font-semibold mb-6">Agriculture Ecologique</p>
          <p className="font-light text-md">
            PRODUCTION CONDITIONNEMENT ET EXPORTATION DE PRODUITS AGRICOLES
          </p>

          <button className="flex items-center p-4 bg-[#41c13f] text-white rounded-xl hover:bg-[#3FB554]/80 my-4 transition-all duration-300 ease-in-out">
            <Link href="#contact-us">CONTACTEZ-NOUS</Link> <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConctactUs