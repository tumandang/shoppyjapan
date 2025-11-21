import Image from "next/image";
import React from "react";
import { marketplaces } from "../const/Marketplace";

import { Lexend, DM_Sans } from "next/font/google";
import Link from "next/link";

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
  return (
    <div className="padd-cont flex flex-row space-x-4 min-h-screen ">
      <aside className="sticky top-5 self-start bg-white flex flex-col p-4 w-1/4 rounded-lg">
        <h5 className={`${lexend.className} text-lg`}>List Of Website</h5>
        <div className="flex flex-col space-y-5 mt-3">
          <p>E-Commerce</p>
          <p>Fashion</p>
          <p>Shoes</p>
          <p>Sneaker / Second-hand</p>
          <p>Automotive / Lifestyle Gear</p>
          <p>Anime / Otaku / Figures / Collectibles</p>
          <p>Cards / Collectibles (Secondary Market)</p>
        </div>
      </aside>
      <div className="flex flex-col w-3/4 gap-y-4  ">
        <div className="bg-white p-4 rounded-lg">
          <p className="mb-4">E-Commerce</p>
          <div className="grid grid-cols-3 gap-x-4 gap-y-3">
            {marketplaces.ecommerce.map((card, index) => {
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl flex flex-col gap-y-3 p-5 gap-x-5 flexBetween hover:shadow-lg">
                  <Link href={card.link} target="_blank">
                    <Image
                      src={card.imagesrc}
                      width={500}
                      height={500}
                      alt={card.name}
                      className=" w-40 h-15 rounded-lg"
                    />
                    <div className="flex flex-col">
                      <h5>{card.name}</h5>
                      <p>{card.desc}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p className="mb-4">Fashion</p>
          <div className="grid grid-cols-3 gap-x-4 gap-y-3">
            {marketplaces.fashion.map((card, index) => {
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl flex flex-col gap-y-3 p-5 gap-x-5 flexBetween"
                >
                  <Image
                    src={card.imagesrc}
                    width={500}
                    height={500}
                    alt={card.name}
                    className=" w-40 h-15 rounded-lg"
                  />
                  <div className="flex flex-col">
                    <h5>{card.name}</h5>
                    <p>{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p className="mb-4">Shoes</p>
          <div className="grid grid-cols-3 gap-x-4 gap-y-3">
            {marketplaces.shoes.map((card, index) => {
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl flex flex-col gap-y-3 p-5 gap-x-5 flexBetween"
                >
                  <Image
                    src={card.imagesrc}
                    width={500}
                    height={500}
                    alt={card.name}
                    className=" w-40 h-15 rounded-lg"
                  />
                  <div className="flex flex-col">
                    <h5>{card.name}</h5>
                    <p>{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p className="mb-4">Sneakers</p>
          <div className="grid grid-cols-3 gap-x-4 gap-y-3">
            {marketplaces.sneaker_resale.map((card, index) => {
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl flex flex-col gap-y-3 p-5 gap-x-5 flexBetween"
                >
                  <Image
                    src={card.imagesrc}
                    width={500}
                    height={500}
                    alt={card.name}
                    className=" w-40 h-15 rounded-lg"
                  />
                  <div className="flex flex-col">
                    <h5>{card.name}</h5>
                    <p>{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p className="mb-4">Automative / LifeStyle Gear</p>
          <div className="grid grid-cols-3 gap-x-4 gap-y-3">
            {marketplaces.automotive.map((card, index) => {
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl flex flex-col gap-y-3 p-5 gap-x-5 flexBetween"
                >
                  <Image
                    src={card.imagesrc}
                    width={500}
                    height={500}
                    alt={card.name}
                    className=" w-40 h-15 rounded-lg"
                  />
                  <div className="flex flex-col">
                    <h5>{card.name}</h5>
                    <p>{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p className="mb-4">Anime / Otaku / Figures</p>
          <div className="grid grid-cols-3 gap-x-4 gap-y-3">
            {marketplaces.anime.map((card, index) => {
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl flex flex-col gap-y-3 p-5 gap-x-5 flexBetween"
                >
                  <Image
                    src={card.imagesrc}
                    width={500}
                    height={500}
                    alt={card.name}
                    className=" w-40 h-15 rounded-lg"
                  />
                  <div className="flex flex-col">
                    <h5>{card.name}</h5>
                    <p>{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p className="mb-4">Cards / Collectibles (Secondary Market)</p>
          <div className="grid grid-cols-3 gap-x-4 gap-y-3">
            {marketplaces.card.map((card, index) => {
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl flex flex-col gap-y-3 p-5 gap-x-5 flexBetween"
                >
                  <Image
                    src={card.imagesrc}
                    width={500}
                    height={500}
                    alt={card.name}
                    className=" w-40 h-15 rounded-lg"
                  />
                  <div className="flex flex-col">
                    <h5>{card.name}</h5>
                    <p>{card.desc}</p>
                  </div>
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
