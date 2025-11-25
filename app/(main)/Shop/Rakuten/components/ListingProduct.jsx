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
  ArrowRightToLine,
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
import { Lexend, DM_Sans } from "next/font/google";
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

function ListingProduct() {
  const [bestseller, setbestseller] = useState([]);
  const [expanded, setexpanded] = useState(true);

const rakutenCategories = [
  { id: "electronics", jp: "家電", en: "Electronics", icon: <Cable /> },
  { id: "fashion", jp: "ファッション", en: "Fashion", icon: <Shirt /> },
  { id: "beauty", jp: "美容・コスメ・香水", en: "Beauty & Cosmetics", icon: <EyeClosed /> },
  { id: "food", jp: "食品", en: "Food & Grocery", icon: <Banana /> },
  { id: "sports", jp: "スポーツ・アウトドア", en: "Sports & Outdoor", icon: <Volleyball /> },
  { id: "kids", jp: "キッズ・ベビー・マタニティ", en: "Kids & Baby", icon: <Baby /> },
  { id: "home", jp: "インテリア・収納", en: "Home & Interior", icon: <HouseHeart /> },
  { id: "pet", jp: "ペット", en: "Pet Supplies", icon: <Cat /> },
  { id: "books", jp: "本・雑誌", en: "Books & Magazines", icon: <BookOpen /> },
  { id: "toys", jp: "おもちゃ", en: "Toys", icon: <ToyBrick /> },
  { id: "diy", jp: "DIY・工具", en: "DIY & Tools", icon: <ToolCase /> },
  { id: "auto", jp: "車・バイク", en: "Auto & Motorbike", icon: <Car /> },
  { id: "health", jp: "健康・ダイエット", en: "Health & Diet", icon: <Heart /> },
  { id: "furniture", jp: "家具", en: "Furniture", icon: <Sofa /> },
];

  useEffect(() => {
    fetch(
      "https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?applicationId=1004153375637600271"
    )
      .then((res) => res.json())
      .then((data) => setbestseller(data.Items || []));
  }, []);

  return (
    <div className="min-h-screen rounded-xl shadow-sm bg-white mx-auto max-w-7xl px-6 py-6">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Image src="/rakutenlogo.png" width={26} height={26} alt="Rakuten" />
          <span className={`font-medium ${lexend.className}`}>Rakuten Official</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              Sort <ChevronDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
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

      <div className="flex gap-6 mt-6">
        <aside className={`transition-all duration-300 border-r pr-4 ${expanded ? "w-64" : "w-14"}`}>
          <div className="flexBetween pb-3 border-b">
            <h4 className={`text-lg font-semibold transition-all ${dm_sans_bold.className} ${expanded ? "opacity-100" : "opacity-0 w-0"}`}>
              Filters
            </h4>
            <button
              onClick={() => setexpanded((prev) => !prev)}
              className="p-1 hover:bg-gray-100 rounded-md ">
              {expanded ? <ArrowLeftToLine /> : <ArrowRightToLine  />}
            </button>
          </div>

          <div className="mt-5">
            <h4
              className={`text-sm font-semibold text-gray-700 transition-all ${dm_sans.className}  ${expanded ? "opacity-100 mb-3" : "opacity-0"}`}>
              Categories
            </h4>

            <div className="space-y-2">
              {rakutenCategories.map((cat, index) => (
                <Link key={index}  href={`/Shop/Rakuten/Category/${cat.id}`}>
                  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer transition">
                    <span className="text-gray-600">{cat.icon}</span>
                    {expanded && (
                      <p className={`text-sm text-gray-700 font-medium ${lexend.className}`}>
                        {cat.en}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
        <section className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className={`font-semibold text-lg ${dm_sans_bold.className}`}>Best Seller Products</h3>
            <Link
              href="/Shop/Rakuten/Product/Ranking"
              className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors group"
            >
              <span>View All</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestseller.slice(0, 6).map((itemObj, index) => {
              const item = itemObj.Item;
              if (!item) return null;

              return (
                <div
                  key={index}
                  className="group bg-white border rounded-xl p-4 hover:border-orange-300 hover:shadow-md transition">
                  <Link href={`/Shop/Rakuten/Product/${item.itemCode}`}>
                    <div className="flex justify-center items-center bg-gray-50 rounded-xl h-[180px] overflow-hidden">
                      <img
                        src={
                          item.mediumImageUrls?.[0]?.imageUrl || "/noimg.jpg"
                        }
                        alt={item.itemName}
                        className="object-contain h-full group-hover:scale-105 transition"
                      />
                    </div>
                  </Link>

                  <p className={`mt-3 text-sm font-semibold line-clamp-2 text-gray-800 ${lexend.className}`}>
                    {item.itemName}
                  </p>

                  <div className="flex items-center justify-between mt-2">
                    <span className={`text-orange-600 font-bold ${dm_sans_bold.className}`}>
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
