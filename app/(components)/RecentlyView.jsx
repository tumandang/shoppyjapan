
import React from "react";
import { Lexend, DM_Sans } from "next/font/google";
import CardProduct from "./widget/CardProduct";

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
function RecentlyView() {
  return (
    <section className="padd-cont  w-full">
      <div className=" flex-col  p-2 rounded-lg bg-white px-5 shadow-lg ">
        <div className=" flexBetween">
          <h3 className={`${lexend.className} text-lg`}>Recently View</h3>
          <p>View All</p>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <CardProduct/>
        </div>
      </div>
    </section>
  );
}

export default RecentlyView;
