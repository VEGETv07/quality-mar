import Image from 'next/image';
import React from 'react'

export default function Certifs() {
  return <div className="bg-[#edf7ed] hidden md:flex justify-between items-center px-20 py-10">
    <Image src={"/images/quality/onssa.png"} alt="certif" className='' width={100} height={100}></Image>
    <Image src={"/images/quality/brcfood.png"} alt="certif" className='' width={100} height={100}></Image>
    <Image src={"/images/quality/global.png"} alt="certif" className='' width={100} height={100}></Image>
    <Image src={"/images/quality/globalm.png"} alt="certif" className='' width={100} height={100}></Image>
    <Image src={"/images/quality/sedex.png"} alt="certif" className='' width={100} height={100}></Image>
    <Image src={"/images/quality/ics.png"} alt="certif" className='' width={100} height={100}></Image>
  </div>;
}
