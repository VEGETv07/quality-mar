import React from "react";
import OurMarks from "./_components/OurMarks";

export default function Marques() {
  const marques = [
    {
      logo: "/images/marques/ifrian.jpg",
      description:
        "IFRIAN est notre marque emblématique, reconnue pour sa sélection minutieuse de fruits de premiére qualité. Chaque fruit portant Ie label IFRIAN est cultivé avec soin, récolté å maturité optimale et rigoureusement contrlé pour vous offrir une expérience gustative supérieur.",
    },
    {
      logo: "/images/marques/soussi.jpg",
      description:
        "SOUSSI est notre marque symbolique, II représente l'origine de nos produits et l'identité de notre société. Soussi est caractérisé par la fiabilité et la crédibilité en termes produits et sa qualité.",
    },
    {
      logo: "/images/marques/bak.jpg",
      description:
        "BAK est notre marque de qualité et fraicheur avec des de meilleure qualité triée soigneusement pour satisfaire vos besoins au niveau du calibre, coloration, maturité.",
    },
    {
      logo: "/images/marques/tamam.png",
      description:
        "Tamam comprend que chaque client a des préférences et des exigences spécifiques. C'est pourquoi nous avons développé Tamam comme une marque dédiée à la personnalisation de nos produits pour répondre à vos besoins.",
    },
  ];
  return (
    <div className="px-10 lg:px-40 py-20">
      <p className="text-xl font-light">
        <span className="font-bold">Quality Mar</span> a su gagner la fldélité de ses clients et å introduire
        différentes marques dans différents marchés gråce å son excellente
        stratégie commerciale. L'entreprise met ses compétences au service de
        toutes les demandes afin d'obtenir l'entiére satisfaction de ses clients
        tout en s'efforqant d'aller au-devant de leurs attentes et d'améliorer
        sans cesse le niveau de qualité de ses produits (respect, quantité,
        qualité, délai).
      </p>
      <p className="text-xl font-light">
        <span className="font-bold">Quality Mar</span> est davantage orienté Client, la satisfaction de ses
        partenaires ainsi que celles des consommateurs sont au coeur de ses
        préoccupations et faisant de la qualité sa riorité en rocédant å
        diverses certifications internationales.
      </p>

      <OurMarks marques={marques} />
    </div>
  );
}
