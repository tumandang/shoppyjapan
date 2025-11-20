import DotGrid from "@/components/react-bits/DotGrid";
import { Lexend, Sansation, DM_Sans } from "next/font/google";
import React from "react";
const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
  weight: ["600"],
});
const sansation = Sansation({
  variable: "--font-Sansation",
  subsets: ["latin"],
  weight: ["400"],
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
function AboutShoppan() {
  return (
    <div className="h-full">
      <section style={{ width: "100%", height: "600px", position: "relative" }}>
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#F7F7F7"
          activeColor="#ffb029"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />

        <div className="absolute inset-0 z-10 ">
          <div className="padd-cont flexCenter flex-col text-center py-7">
            <p
              className={`${dm_sans_bold.className} text-xl  mb-3 text-[#C4C4C4] `}
            >
              About Shopan
            </p>

            <h1 className={`${lexend.className} text-7xl mb-15 w-3xl `}>
              Your Trusted Gateway to Japan
            </h1>

            <p className={`${dm_sans.className} text-[#7f7f7f] text-xl w-lg`}>
              Shopan makes it effortless for anyone around the world to access
              authentic Japanese products. From limited-edition collectibles and
              the latest gadgets to traditional crafts and fashion, we bring the
              best of Japan directly to your doorstep.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#f5f5f5]  flex padd-cont-img gap-x-30 ">
        <div className="flex flex-row gap-x-3 w-[1408px] ">
          <div className={`${sansation.className}  h-[54px] flexCenter `}>
            <span>01</span>
          </div>
          <div className="">
            <div className="flex flex-col gap-y-6">
              <h2>A Seamless Proxy Shopping Experience</h2>
              <div className="">
                <p className="text-xl my-5">We act as your personal proxy:</p>
                <ul role="list" className="list-disc marker:text-orange-400 mb-3">
                  <li>
                    <p className="text-xl">You choose the item</p>
                  </li>
                  <li>
                    <p className="text-xl ">
                      We place the order or bid on Japanese online shops and
                      auction sites
                    </p>
                  </li>
                  <li>
                    <p className="text-xl">
                      We manage the purchase, inspection, packaging, and
                      international shipping
                    </p>
                  </li>
                </ul>
                <p className="text-xl">
                  Everything is handled end-to-end to ensure a smooth and
                  reliable experience — even for first-time users.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-amber-300">
          <img
            src="/assets/4278441.webp"
            className="img relative w-full h-full object-cover"
            alt="step1"
          />
        </div>
      </section>
    </div>
  );
}

export default AboutShoppan;
