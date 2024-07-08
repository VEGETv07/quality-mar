import ConctactUs from "@/app/_components/ConctactUs";
import ChooseUs from "@/app/_components/ChooseUs";
import Stats from "./_components/Stats";
import Head from "next/head";
import ContactUsForm from "./_components/ContactUsForm";
export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
      <section>
        <ConctactUs />
        <div className="flex px-10 lg:px-40 pt-20 ">
          <ChooseUs />
        </div>
        <Stats />
        <ContactUsForm />

      </section>
    </>
  );
}




























