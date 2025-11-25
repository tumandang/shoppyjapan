import React from 'react'
import { Lexend, DM_Sans } from "next/font/google";

import Image from "next/image";
import Link from "next/link";
import CardJDirect from '../widget/CardJDirect';
import { ArrowRight } from 'lucide-react';
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
function JDirectHome() {
  return (
     <section className="padd-cont  w-full">
      <div className=" flex-col  p-5 rounded-lg bg-white px-5 shadow-lg ">
        <div className=" flexBetween">
            <p className={`${lexend.className} text-xl text-black`}>JDirectItems Auction</p>
            <Link
              href="/"
              className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors group"
            >
              <span>View All</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          
        </div>
        <div className="grid grid-cols-6 gap-4">
          <CardJDirect/>
        </div>
      </div>
    </section>
  )
}

export default JDirectHome