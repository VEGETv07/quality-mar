import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
export default function Home() {
  return (
    <section className="h-1/2 bg-slate-400">
      <div className="w-1/3">
        <p className="font-semibold">PRODUCTION CONDITIONNEMENT ET EXPORTATION DE PRODUITS AGRICOLES</p>
        
          <button className="flex items-center p-4 bg-green-800 text-white rounded-xl hover:bg-green-900">
            <Link href='contact-us'>CONTACTEZ-NOUS</Link> <FaChevronRight />
          </button>
      </div>
    </section>
  );
}





