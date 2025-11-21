import React from "react";
import { Lexend, DM_Sans } from "next/font/google";
import CardRakuten from "../widget/CardRakuten";
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
function RakutenHome() {
  return (
    <section className="padd-cont  w-full">
      <div className=" flex-col  p-5 rounded-lg bg-white px-5 shadow-lg ">
        <div className=" flexBetween">
          <Image
            src="/logo/Rakuten.png"
            width={100}
            height={50}
            alt="Rakuten"
            className="rounded"
          />
          <Link href="">
                <p className="underline">View All</p>
          </Link>
          
        </div>
        <div className="grid grid-cols-6 gap-4">
          <CardRakuten />
        </div>
      </div>
    </section>
  );
}

export default RakutenHome;
