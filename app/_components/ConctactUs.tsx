import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

function ConctactUs() {
  return (
    <div className="h-1/2  px-40 bg-[url('/images/background.jpg')] bg-cover bg-center">
      <div className="w-1/2 h-full py-40">
        <div className="my-20 bg-[#3EB152]/50 text-white p-4  rounded-xl shadow-slate-400/50 shadow-sm">
          <p className="font-semibold text-3xl">
            PRODUCTION CONDITIONNEMENT ET EXPORTATION DE PRODUITS AGRICOLES
          </p>

          <button className="flex items-center p-4 bg-[#2d8b3d] text-white rounded-xl hover:bg-[#3FB554]/80 my-4 shadow-slate-400/50 shadow-sm transition-all duration-300 ease-in-out">
            <Link href="contact-us">CONTACTEZ-NOUS</Link> <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConctactUs