import React from 'react'
import Certifs from './items/Certifs';

export default function OurQuality() {
  
  return (
    <div className="bg-[#def2e6]">
      <div
        className="lg:py-10 bg-[#def2e6] text-[#39a737] rounded-t-3xl"
        id="quality"
      >
        <h3 className="text-3xl lg:text-8xl text-center font-semibold py-10">
          Qualité
        </h3>
        {/* <p className="text-sm lg:text-lg text-black/50 py-4">
          <span className="font-medium text-black">Quality Mar</span> vise
          toujours s'améliorer et rester au niveau des certifications
          internationales. Dans le but de préserver la santé, qualité,
          l'hygiéne, la sécurité, le milieu social et l'environnement.
        </p>
        <p className="text-sm lg:text-lg text-black/50 py-4">
          <span className="font-medium text-black">Quality Mar</span> a adopté
          les certifications référentielles internationales pour pouvoir
          répondre aux exigences de ses partenaires commerciaux étrangers.
        </p>
        <p className="text-sm lg:text-lg text-black/50 py-4">
          <span className="font-medium text-black">Quality Mar</span> a la
          certification GlobalGAP. L'entreprise est aux normes internationales
          sur l'ensemble de ses activités production, conditionnement et vente.
        </p>
        <p className="text-sm lg:text-lg text-black/50 py-4">
          <span className="font-medium text-black">Quality Mar</span> a
          constamment pour objectif d'améliorer ses performances et la qualité
          de ses prestations. Elle veille à la valorisation de ses produits et
          la qualité reste au centre de ses préoccupations. Le haut niveau
          d'expertise et de compétence de ses équipes techniques ainsi que des
          vergers certifiés lui permettent de garantir l'approvisionnement de
          ses produits répondant aux normes de sécurité alimentaire
          internationales.
        </p>
        <p className="text-sm lg:text-lg text-black/50 py-4">
          Les fruits et légumes livrés par{" "}
          <span className="font-medium text-black">Quality Mar</span>{" "}
          s'inscrivent dans des programmes de production fiables et méthodiques.
          Les sites de production et de conditionnement sont audités
          réguliérement et répondent aux normes européennes les plus exigeantes.
        </p>
        <p className="text-sm lg:text-lg text-black/50 py-4">
          Des méthodes de production durables et responsables respectueuses de
          l'environnement et de la santé des consommateurs sont au centre de nos
          préoccupations quotidiennes et de long terme.
        </p> */}
        <p className="text-sm lg:text-xl  pb-10 text-center leading-[1.75] text-[#256d24]/80 lg:px-40 px-10">
          Quality Mar s'engage à respecter les normes internationales de santé,
          hygiène, sécurité, milieu social et environnement. Certifiée
          GlobalGAP, notre entreprise adhère aux standards internationaux pour
          la production, le conditionnement et la vente. Nos fruits et légumes
          sont cultivés selon des méthodes durables et responsables,
          garantissant leur fraîcheur et qualité. Nos sites de production et de
          conditionnement, régulièrement audités, répondent aux exigences
          européennes les plus strictes, assurant la sécurité alimentaire et la
          satisfaction de nos partenaires commerciaux étrangers.
        </p>
        <Certifs />
      </div>
    </div>
  );
}
