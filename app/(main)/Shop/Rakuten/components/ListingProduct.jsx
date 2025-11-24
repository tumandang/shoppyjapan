"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowLeftToLine,
  ArrowRight,
  Baby,
  Banana,
  BookOpen,
  Cable,
  Car,
  Cat,
  ChevronDown,
  EyeClosed,
  Heart,
  HouseHeart,
  Shirt,
  Sofa,
  ToolCase,
  ToyBrick,
  Volleyball,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Toggle } from "@/components/ui/toggle";

function ListingProduct() {
  const [bestseller, setbestseller] = useState([]);
  const [categories, setcategories] = useState([]);
  const rakutenCategories = [
    { jp: "家電", en: "Electronics", icon: <Cable /> },
    { jp: "ファッション", en: "Fashion", icon: <Shirt /> },
    { jp: "美容・コスメ・香水", en: "Beauty & Cosmetics", icon: <EyeClosed/> },
    { jp: "食品", en: "Food & Grocery", icon: <Banana /> },
    {
      jp: "スポーツ・アウトドア",
      en: "Sports & Outdoor",
      icon: <Volleyball />,
    },
    { jp: "キッズ・ベビー・マタニティ", en: "Kids & Baby", icon: <Baby /> },
    { jp: "インテリア・収納", en: "Home & Interior", icon: <HouseHeart /> },
    { jp: "ペット", en: "Pet Supplies", icon: <Cat /> },
    { jp: "本・雑誌", en: "Books & Magazines", icon: <BookOpen /> },
    { jp: "おもちゃ", en: "Toys", icon: <ToyBrick /> },
    { jp: "DIY・工具", en: "DIY & Tools", icon: <ToolCase /> },
    { jp: "車・バイク", en: "Auto & Motorbike", icon: <Car /> },
    { jp: "健康・ダイエット", en: "Health & Diet", icon: <Heart /> },
    { jp: "家具", en: "Furniture", icon: <Sofa /> },
  ];
  useEffect(() => {
    fetch(
      "https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?applicationId=1004153375637600271"
    )
      .then((res) => res.json())
      .then((data) => setbestseller(data.Items || []));
  }, []);
  return (
    <div className="min-h-screen rounded-lg shadow-md bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-baseline justify-between border-b border-gray-300 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Image src="/rakutenlogo.png" width={30} height={30} alt="Rakuten" />
          <h3>Rakuten Official</h3>
        </div>
        <div className="flex items-center">
          <div className="relative inline-block text-left ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Sort <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuGroup>
                  <DropdownMenuItem>Most Popular</DropdownMenuItem>
                  <DropdownMenuItem>Best Rating</DropdownMenuItem>
                  <DropdownMenuItem>Newest</DropdownMenuItem>
                  <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                  <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-x-4">
        <section className=" border-r border-gray-300 w-1/4">
          <div className="p-2 flexBetween border-b border-gray-300">
            <h4>Filters</h4>
            <ArrowLeftToLine></ArrowLeftToLine>
          </div>
          <div className="p-2 flex flex-col  border-b border-gray-300">
            <h4>Categories</h4>
            <div className="space-y-4 mt-4">
              {rakutenCategories.map((jenis, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer transition"
                >
                  <span>{jenis.icon}</span>
                  <p className="text-sm font-medium text-gray-700">
                    {jenis.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className=" p-5 w-3/4">
          <div className="flexBetween mb-4">
            <h4>Best Seller Product from Rakuten</h4>
            <a href="/">View All</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mt-4">
            {bestseller.slice(0, 6).map((itemObj, index) => {
              const item = itemObj.Item;
              if (!item) return null;

              return (
                <div className="group bg-white rounded-2xl p-4 border border-gray-100 hover:border-orange-200 transition hover:shadow-md">
                  <Link key={index} href={`/product/${item.itemCode}`}>
                    <div className="flex justify-center items-center bg-neutral-50 rounded-xl h-[180px]">
                      <img
                        src={
                          item.mediumImageUrls?.[0]?.imageUrl || "/noimg.jpg"
                        }
                        alt={item.itemName}
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="mt-4 space-y-2  ">
                    <p className="mt-2 text-sm font-semibold line-clamp-2">
                      {item.itemName}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-600 font-semibold text-sm">
                      ¥{item.itemPrice.toLocaleString()}
                    </span>
                    <Toggle
                      aria-label="Heart"
                      size="sm"
                      variant="outline"
                      className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500"
                    >
                      <Heart />
                    </Toggle>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

    </div>
  );
}

export default ListingProduct;
