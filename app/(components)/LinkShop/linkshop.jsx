"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Lexend, DM_Sans } from "next/font/google";
import { useTranslations, useLocale } from "next-intl";
import { useAuth } from "@/context/AuthContext";

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
  const ls = useTranslations('linkshop');
  const locale = useLocale();
  const { marketplaces, loading } = useAuth();
  const [randomMarketplaces, setRandomMarketplaces] = useState([]);


  useEffect(() => {
    if (marketplaces && marketplaces.length > 0) {
   
      const shuffled = [...marketplaces].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 5);
      setRandomMarketplaces(selected);
    }
  }, [marketplaces]);


  if (loading) {
    return (
      <section className="padd-cont w-full mb-15">
        <div className="flex-col p-5 rounded-lg bg-white px-5 shadow-lg">
          <div className="flex items-center justify-center py-10">
            <p className="text-gray-500">Loading marketplaces...</p>
          </div>
        </div>
      </section>
    );
  }


  if (randomMarketplaces.length === 0) {
    return (
      <section className="padd-cont w-full mb-15">
        <div className="flex-col p-5 rounded-lg bg-white px-5 shadow-lg">
          <div className="flex items-center justify-center py-10">
            <p className="text-gray-500">No marketplaces available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="padd-cont w-full mb-15">
      <div className="flex-col p-5 rounded-lg bg-white px-5 shadow-lg">
        <div className="flexBetween mb-5">
          <h4>{ls('topText')}</h4>
          <Link 
            href={`/${locale}/marketplace`} 
            className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors group"
          >
            <span>{ls('viewText')}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {randomMarketplaces.map((marketplace) => (
            <div 
              className="border border-gray-200 rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition-shadow"
              key={marketplace.id}
            >
              <Link
                href={marketplace.link_marketplace || marketplace.link || '#'}
                target="_blank"
                className="flex flex-col items-center gap-2"
              >
                <div className="w-32 h-20 flex items-center justify-center">
                  {marketplace.logo_url ? (
                    <img
                      src={marketplace.logo}
                      alt={marketplace.name}
                      className="object-contain max-h-full max-w-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-gray-400 text-xs">No logo</span>
                    </div>
                  )}
                </div>
                <h5 className={`${lexend.className} font-semibold text-sm text-center`}>
                  {marketplace.name}
                </h5>
                <p className={`${dm_sans.className} text-xs text-gray-600 text-center line-clamp-2`}>
                  {marketplace.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Linkshop;