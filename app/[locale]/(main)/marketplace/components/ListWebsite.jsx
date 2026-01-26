"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Lexend, DM_Sans } from "next/font/google";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
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
const dm_sans_bold = DM_Sans({
  variable: "--font-DM_Sans",
  subsets: ["latin"],
  weight: ["800"],
});

function ListWebsite() {
  const { marketplaces, loading } = useAuth();
  const [categorizedMarketplaces, setCategorizedMarketplaces] = useState({});
  
  const mp = useTranslations('WebCateg');
  const mpdesc = useTranslations("marketplaceDesc");


  useEffect(() => {
    if (marketplaces && marketplaces.length > 0) {
      const grouped = marketplaces.reduce((acc, marketplace) => {

        const categories = marketplace.categories || [];
        
        categories.forEach(category => {
          const categoryName = category.name || category.category_name;
          if (!acc[categoryName]) {
            acc[categoryName] = [];
          }
          acc[categoryName].push(marketplace);
        });
        
        return acc;
      }, {});
      
      setCategorizedMarketplaces(grouped);
    }
  }, [marketplaces]);

  if (loading) {
    return <div className="padd-cont min-h-screen flex items-center justify-center">
      <p>Loading marketplaces...</p>
    </div>;
  }


  const categories = Object.keys(categorizedMarketplaces);

  return (
    <div className="padd-cont flex flex-row space-x-4 min-h-screen">
      <aside className="sticky top-5 self-start bg-white flex flex-col p-4 w-1/4 rounded-lg">
        <h5 className={`${lexend.className} text-lg`}>List Of Website</h5>
        <div className="flex flex-col space-y-5 mt-3">
          {categories.map((category) => (
            <ScrollLink
              key={category}
              to={category}
              smooth={true}
              duration={500}
              offset={-10}
              className={`cursor-pointer hover:text-orange-500 transition-colors duration-200 ${dm_sans.className}`}
            >
              {category}
            </ScrollLink>
          ))}
        </div>
      </aside>

      <div className="flex flex-col w-3/4 gap-y-4">
        {categories.map((category) => (
          <div className="bg-white p-4 rounded-lg" id={category} key={category}>
            <p className="mb-4 font-semibold">{category}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {categorizedMarketplaces[category].map((marketplace) => (
                <div
                  className="border border-gray-200 rounded-xl p-4 flex flex-col items-center hover:shadow-lg"
                  key={marketplace.id}
                >
                  <Link
                    href={marketplace.link_marketplace || marketplace.link || '#'}
                    target="_blank"
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-32 h-20 flex items-center justify-center">
                      {marketplace.logo && (
                        <img
                          src={marketplace.logo_url}
                          alt={marketplace.name}
                          width={400}
                          height={200}
                          className="object-contain max-h-full max-w-full"
                        />
                      )}
                    </div>
                    <h5 className={`${lexend.className} font-semibold text-sm text-center`}>
                      {marketplace.name}
                    </h5>
                    <p className={`${dm_sans.className} text-xs text-gray-600 text-center`}>
                      {marketplace.description}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {categories.length === 0 && (
          <div className="bg-white p-4 rounded-lg text-center">
            <p>No marketplaces found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListWebsite;