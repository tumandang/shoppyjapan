import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { marketplaces } from "@/app/(main)/marketplace/const/Marketplace";
import { Lexend, DM_Sans } from "next/font/google";
import Image from "next/image";

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
function Linkshop() {
  return (
    <section className="padd-cont w-full mb-15">
      <div className="flex-col p-5 rounded-lg bg-white px-5 shadow-lg">
        <div className="flexBetween mb-5">
          <h4>Top Marketplace</h4>

          <Link
            href="/marketplace"
            className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors group"
          >
            <span>View All</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-5 gap-x-5 space-y-3">
          {marketplaces.popular.map((card, index) => {
            return (
              <div
                className="border border-gray-200 rounded-xl p-4 flex flex-col items-center hover:shadow-lg"
                key={index}
              >
                <Link
                  href={card.link}
                  target="_blank"
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-32 h-20 flex items-center justify-center">
                    <Image
                      src={card.imagesrc}
                      alt={card.name}
                      width={400}
                      height={200}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  <h5
                    className={`${lexend.className} font-semibold text-sm text-center`}
                  >
                    {card.name}
                  </h5>
                  <p
                    className={`${dm_sans.className} text-xs text-gray-600 text-center`}
                  >
                    {card.desc}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Linkshop;
