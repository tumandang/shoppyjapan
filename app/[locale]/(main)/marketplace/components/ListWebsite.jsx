"use client";
import Image from "next/image";
import React from "react";
import { marketplaces } from "../const/Marketplace";
import { useTranslations } from "next-intl";
import { Lexend, DM_Sans } from "next/font/google";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

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

  const mp = useTranslations('WebCateg');
  const mpdesc = useTranslations("marketplaceDesc");
  return (
    <div className="padd-cont flex flex-row space-x-4 min-h-screen ">
      <aside className="sticky top-5 self-start bg-white flex flex-col p-4 w-1/4 rounded-lg">
        <h5 className={`${lexend.className} text-lg`}>List Of Website</h5>
        <div className="flex flex-col space-y-5 mt-3">
          <ScrollLink to="Ecommerce" smooth={true} duration={500} offset={-10}  className={`cursor-pointer hover:text-orange-500 transition-colors duration-200 ${dm_sans.className}`}>
            {mp('ecommerce')}
          </ScrollLink>
          <ScrollLink to="Fashion" smooth duration={500} offset={-10} className={`cursor-pointer hover:text-orange-500 transition-colors duration-200 ${dm_sans.className}`}>
            {mp('fashion')}
          </ScrollLink>
          <ScrollLink to="Shoes" smooth duration={500} offset={-10} className={`cursor-pointer hover:text-orange-500 transition-colors duration-200 ${dm_sans.className}`}>
            {mp('shoes')}
          </ScrollLink>
          <ScrollLink to="Sneaker" smooth duration={500} offset={-10} className={`cursor-pointer hover:text-orange-500 transition-colors duration-200 ${dm_sans.className}`}>
            {mp('sneaker')}
            
          </ScrollLink>
          <ScrollLink to="Auto" smooth duration={500} offset={-10} className={`cursor-pointer hover:text-orange-500 transition-colors duration-200 ${dm_sans.className}`}>
            {mp('auto')}
          </ScrollLink>
          <ScrollLink to="Anime" smooth duration={500} offset={-10} className={`cursor-pointer hover:text-orange-500 transition-colors duration-200 ${dm_sans.className}`}>
            {mp('anime')}
          </ScrollLink>
          <ScrollLink to="Card" smooth duration={500} offset={-10} className={`cursor-pointer hover:text-orange-500 transition-colors duration-200 ${dm_sans.className}`}>
            {mp('card')}
          </ScrollLink>
        </div>
      </aside>
      <div className="flex flex-col w-3/4 gap-y-4  ">
        <div className="bg-white p-4 rounded-lg" id="Ecommerce">
          <p className="mb-4"> {mp('ecommerce')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {marketplaces.ecommerce.map((card, index) => {
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
                    <h5 className={`${lexend.className} font-semibold text-sm text-center`}>
                      {card.name}
                    </h5>
                    <p className={`${dm_sans.className} text-xs text-gray-600 text-center`}>
                      {mpdesc(card.desc)}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg" id="Fashion">
          <p className="mb-4">{mp('fashion')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {marketplaces.fashion.map((card, index) => {
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
                    <h5 className={`${lexend.className} font-semibold text-sm text-center`}>
                      {card.name}
                    </h5>
                    <p className={`${dm_sans.className} text-xs text-gray-600 text-center`}>
                      {mpdesc(card.desc)}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg" id="Shoes">
          <p className="mb-4">{mp('shoes')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {marketplaces.shoes.map((card, index) => {
              return (
                <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center hover:shadow-lg"
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
                    <h5 className={`${lexend.className} font-semibold text-sm text-center`}>
                      {card.name}
                    </h5>
                    <p className={`${dm_sans.className} text-xs text-gray-600 text-center`}>
                      {mpdesc(card.desc)}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg" id="Sneaker">
          <p className="mb-4">{mp('sneaker')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {marketplaces.sneaker_resale.map((card, index) => {
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
                    <h5 className={`${lexend.className} font-semibold text-sm text-center`}>
                      {card.name}
                    </h5>
                    <p className="text-xs text-gray-600 text-center">
                      {mpdesc(card.desc)}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg" id="Auto">
          <p className="mb-4">{mp('auto')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {marketplaces.automotive.map((card, index) => {
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
                    <h5 className="font-semibold text-sm text-center">
                      {card.name}
                    </h5>
                    <p className="text-xs text-gray-600 text-center">
                      {mpdesc(card.desc)}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg" id="Anime">
          <p className="mb-4">{mp('anime')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {marketplaces.anime.map((card, index) => {
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
                    <h5 className="font-semibold text-sm text-center">
                      {card.name}
                    </h5>
                    <p className="text-xs text-gray-600 text-center">
                      {mpdesc(card.desc)}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg" id="Card">
          <p className="mb-4">{mp('card')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {marketplaces.card.map((card, index) => {
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
                    <h5 className="font-semibold text-sm text-center">
                      {card.name}
                    </h5>
                    <p className="text-xs text-gray-600 text-center">
                      {mpdesc(card.desc)}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListWebsite;
