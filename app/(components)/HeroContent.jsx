import { Button } from "@/components/ui/button";
import { BookOpenCheck, ShoppingBagIcon, UserPlus, Users2 } from "lucide-react";
import React from "react";
import { Inter, Lexend } from "next/font/google";
import SplitText from "@/components/react-bits/SplitText";
import TextType from "@/components/react-bits/TextType";
const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
  weight: ["600"],
});
const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

function HeroContent() {
  return (
    <main className="flex  flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] padd-cont">
      <div className="max-w-xl pl-6 z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        {/* Main Heading */}
        <SplitText
          text="Discover Japan, Delivered to You"
          className={`${lexend.className} font-lexend text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider  text-black`}
          
          delay={10}
          duration={0.7}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
        <TextType
          text={[
            "From timeless crafts to modern innovations, Shopan brings Japan’s unique charm to your everyday life.",
            "From traditional treasures to modern wonders, Shopan brings the best of Japan right to your doorstep.",
            "Experience the magic of Japan every day — Shopan combines classic crafts and cutting-edge innovations for your life.",
            "Discover Japan like never before — from timeless crafts to modern must-haves, Shopan delivers its unique charm straight to your life."
          ]}
          className={`${inter.className} text-base sm:text-lg tracking-wider text-black max-w-100 lg:max-w-120`}
          typingSpeed={40}
          pauseDuration={15000}
          showCursor={true}
          cursorCharacter="|"
        />
        {/* <p className=" text-base sm:text-lg tracking-wider text-black max-w-100 lg:max-w-120">
          From timeless crafts to modern innovations, Shopan brings Japan’s
          unique charm to your everyday life.
        </p> */}

        <div className="mt-4 space-x-3">
          <Button
            variant="Solid"
            className="bg-orange-500  text-white hover:bg-orange-600 p-6"
          >
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
