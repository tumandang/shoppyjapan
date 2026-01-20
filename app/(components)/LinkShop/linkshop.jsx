import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { marketplaces } from "@/app/[locale]/(main)/marketplace/const/Marketplace";
import { Lexend, DM_Sans } from "next/font/google";
import Image from "next/image";
import { useTranslations } from "next-intl";
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
  const ls = useTranslations('linkshop')
  const popular = [
    { imagesrc: "/logo/marketplace/amazonjp.webp", name: "Amazon JP", desc: ls('marketplace.amazon') , link: "https://www.amazon.co.jp" },
    { imagesrc: "/logo/marketplace/JDirect.webp", name: "JDirect Shopping", desc: ls('marketplace.ydirect'), link: "https://shopping.yahoo.co.jp" },
    { imagesrc: "/logo/marketplace/mercari.webp", name: "Mercari", desc: ls('marketplace.mercari'), link: "https://www.mercari.com/jp/" },
    { imagesrc: "/logo/marketplace/NewEra.webp", name: "New Era JP", desc: ls('marketplace.newera'), link: "https://www.neweracap.jp/" },
    { imagesrc: "/logo/marketplace/uniqlo.webp", name: "Uniqlo", desc: ls('marketplace.uniqlo'), link: "https://www.uniqlo.com/jp/" },
  ]
  return (
    <section className="padd-cont w-full mb-15">
      <div className="flex-col p-5 rounded-lg bg-white px-5 shadow-lg">
        <div className="flexBetween mb-5">
          <h4>{ls('topText')}</h4>

          <Link href="/marketplace" className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors group" >
            <span>{ls('viewText')}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-5 gap-x-5 space-y-3">
          {popular.map((card, index) => {
            return (
              <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center hover:shadow-lg"
                key={index}>
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
                  <h5 className={`${lexend.className} font-semibold text-sm text-center`} >
                    {card.name}
                  </h5>
                  <p className={`${dm_sans.className} text-xs text-gray-600 text-center`} >
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
