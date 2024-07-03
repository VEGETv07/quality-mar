import ConctactUs from "@/app/_components/ConctactUs";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";
import Products from "@/app/_components/Products";
import Image from "next/image";
export default function Home() {
  return (
    <section>
      <ConctactUs/>
      <div>
        <div className="flex  px-40 py-20">
<Products/>

        </div>
      </div>
    </section>
  );
}



























