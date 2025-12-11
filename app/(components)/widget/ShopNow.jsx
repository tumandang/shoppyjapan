import { Button } from '@/components/ui/button';
import React from 'react';
import { Lexend, DM_Sans } from "next/font/google";
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
function ShopNow() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden group">
     
      <div className="absolute inset-0">
        <img
          src="/assets/8401659.webp"
          alt="Shopping banner"
          className="w-full h-full object-cover"
        />
       
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>
      
   
      <div className="relative h-full flex flex-col justify-center items-center px-12 md:px-16 lg:px-24">
        <div className="max-w-xl space-y-6 text-center ">
          <h3 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight ${lexend.className}`}>
            Shopan Japan, 
            <br />
            Real Deals from Japan
          </h3>
          <p className={`text-lg text-white/90 ${dm_sans.className}`}>
            Shop top Japanese brands at the best prices, shipped straight to you.
          </p>
          <button className={`bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer
             ${lexend.className}`}>
            SHOP NOW
          </button>
        </div>
      </div>
      
     
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
    </div>
  );
}

export default ShopNow;