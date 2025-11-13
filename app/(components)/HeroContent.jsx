import { Button } from "@/components/ui/button";
import { BookOpenCheck, ShoppingBagIcon, UserPlus, Users2 } from "lucide-react";
import React from "react";
import { Inter , Lexend } from "next/font/google";

const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
  weight:["600"],
});

function HeroContent() {
  return (
    <main className="flex  flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] padd-cont">
      <div className="max-w-xl pl-6 z-10 mt-[90%] md:mt-[60%] lg:mt-0">

        {/* Main Heading */}

        <h1 className={`${lexend.className} font-lexend text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8 text-black`}>
          Your Gateway to Japan's Hidden Treasures
        </h1>
        <p className=" text-base sm:text-lg tracking-wider text-black max-w-100 lg:max-w-120">
          From timeless crafts to modern innovations, ShoppeJapan brings Japan’s
          unique charm to your everyday life.
        </p>

        <div className="mt-4 space-x-3">
          <Button
            variant="Solid"
            className="bg-orange-500  text-white hover:bg-orange-600 p-6">
            Why Choose Us
            <Users2 size={15}></Users2>
          </Button>
          <Button
            variant="Outline"
            className="border border-gray-800 text-black hover:bg-black hover:text-white p-6"
          >
            Usage Guide
            <BookOpenCheck size={15}></BookOpenCheck>
          </Button>
        </div>
      </div>
    </main>
  );
}

export default HeroContent;
