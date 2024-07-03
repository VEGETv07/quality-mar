import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";
export default function Home() {
  return (
    <section className="h-1/2  px-40 bg-[url('/images/background.jpg')] bg-cover bg-center">
      <div className="w-1/3 bg-[#3EB152] text-white p-4  rounded-xl h-full ">
        <p className="font-semibold text-3xl">
          PRODUCTION CONDITIONNEMENT ET EXPORTATION DE PRODUITS AGRICOLES
        </p>

        <button className="flex items-center p-4 bg-[#2d8b3d] text-white rounded-xl hover:bg-[#2d8b3d]/80 my-4">
          <Link href="contact-us">CONTACTEZ-NOUS</Link> <FaChevronRight />
        </button>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <h3>Pourquoi nous choisir ?</h3>
          <h2>Nos produits sont des produits de qualité</h2>
          <p>
            Quality Mar aspire à tirer le maximum des ressources naturelles
            marocaines, pour soutenir ses activités et promouvoir une
            agriculture écologiquement responsable.
          </p>
        </div>
        <div className="w-1/2">
          <div className="flex">
            <div className="before:block before:content-[''] before:h-4  before:bg-[#ecf7e3] ">
              <div className="bg-[#7dc642]   text-white p-4 ">
                <LuLeaf />
              </div>
            </div>
            <div className="px-2">
              <h4 className="text-xl font-semibold ">
                Produit frais de qualité
              </h4>
              <p>
                Des produits et des services conformes à la réglementation en
                vigueur et répondant aux exigences des clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

















