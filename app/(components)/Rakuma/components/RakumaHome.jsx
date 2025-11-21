import React from 'react'
import { Lexend, DM_Sans } from "next/font/google";
import CardRakuma from '../widget/CardRakuma';
import Image from "next/image";
import Link from "next/link";
const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
  weight: ["600"],
});
const dm_sans = DM_Sans({
  variable: "--font-DM_Sans",
  subsets: ["latin"],
  weight: ["400"],
});
const dm_sans_bold = DM_Sans({
  variable: "--font-DM_Sans",
  subsets: ["latin"],
  weight: ["800"],
});
function RakumaHome() {
  return (
     <section className="padd-cont  w-full">
      <div className=" flex-col  p-5 rounded-lg bg-white px-5 shadow-lg ">
        <div className=" flexBetween">
          <Image
            src="/logo/rakuma.webp"
            width={150}
            height={150}
            alt="Rakuten"
            className="rounded"
          />
          <Link href="">
                <p className="underline">View All</p>
          </Link>
          
        </div>
        <div className="grid grid-cols-6 gap-4">
          <CardRakuma/>
        </div>
      </div>
    </section>
  )
}

export default RakumaHome