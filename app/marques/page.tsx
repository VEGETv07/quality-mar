import React from "react";
import OurMarks from "./_components/OurMarks";
import Image from "next/image";

export default function Marques() {
  const marques = [
    {
      logo: "/images/marques/ifrian.jpg",
      name: "IFRIAN",
      description:
        "IFRIAN est notre marque emblématique, reconnue pour sa sélection minutieuse de fruits de premiére qualité. Chaque fruit portant Ie label IFRIAN est cultivé avec soin, récolté å maturité optimale et rigoureusement contrlé pour vous offrir une expérience gustative supérieur.",
    },
    {
      logo: "/images/marques/soussi.jpg",
      name: "SOUSSI",
      description:
        "SOUSSI est notre marque symbolique, II représente l'origine de nos produits et l'identité de notre société. Soussi est caractérisé par la fiabilité et la crédibilité en termes produits et sa qualité.",
    },
    {
      logo: "/images/marques/bak.jpg",
      name: "BAK",
      description:
        "BAK est notre marque de qualité et fraicheur avec des de meilleure qualité triée soigneusement pour satisfaire vos besoins au niveau du calibre, coloration, maturité.",
    },
    {
      logo: "/images/marques/tamam.png",
      name: "TAMAM",
      description:
        "Avec Tamam, nous comprenons que chaque client a des préférences et des exigences spécifiques. C'est pourquoi nous avons développé Tamam comme une marque dédiée å la personnalisation de nos produits pour répondre å vos besoins.",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-20 px-10 lg:px-20 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-2xl font-bold py-4">NOS MARQUES</h1>
          <p className="text-md font-light pb-4">
            <span className="">Quality Mar</span> a su gagner la fldélité de ses
            clients et å introduire différentes marques dans différents marchés
            gråce å son excellente stratégie commerciale. L'entreprise met ses
            compétences au service de toutes les demandes afin d'obtenir
            l'entiére satisfaction de ses clients tout en s'efforqant d'aller
            au-devant de leurs attentes et d'améliorer sans cesse le niveau de
            qualité de ses produits (respect, quantité, qualité, délai).
          </p>
          <p className="text-md font-light pb-4">
            <span className="">Quality Mar</span> est davantage orienté
            Client, la satisfaction de ses partenaires ainsi que celles des
            consommateurs sont au coeur de ses préoccupations et faisant de la
            qualité sa riorité en rocédant å diverses certifications
            internationales.
          </p>
        </div>
        <div>
          <Image
            src="/images/home/PHOTO1.jpg"
            alt="quality"
            width={5000}
            height={5000}
            className="rounded-xl hidden md:block"
          ></Image>
        </div>
      </div>

      <OurMarks marques={marques} />
    </div>
  );
}
