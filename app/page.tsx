import ConctactUs from "@/app/_components/ConctactUs";
import Products from "@/app/_components/ChooseUs";
import Stats from "./_components/Stats";
export default function Home() {
  return (

    <section>
      <ConctactUs/>
      <div className="flex  px-40 pt-20">
        <Products/>
      </div>
      <Stats/>
    </section>
  );
}



























