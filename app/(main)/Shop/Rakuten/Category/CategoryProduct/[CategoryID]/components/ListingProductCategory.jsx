"use client";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  ArrowRight,
  Baby,
  Banana,
  BookOpen,
  Briefcase,
  Camera,
  Cat,
  CookingPot,
  Disc3,
  EyeClosed,
  Flower2,
  Footprints,
  Gamepad,
  Gem,
  GlassWater,
  Guitar,
  Heart,
  HeartPulse,
  HouseHeart,
  KeySquare,
  Laptop,
  Lollipop,
  MonitorSmartphone,
  Shirt,
  Smartphone,
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
const dm_sans_bold = DM_Sans({
  variable: "--font-DM_Sans",
  subsets: ["latin"],
  weight: ["800"],
});

function CategoryProduct({ categoryID }) {
  const [bestseller, setbestseller] = useState([]);
  const [SelectedCategory, setSelectedCategory] = useState("");
  const [page, setpage] = useState(1);
  const itemsPerPage = 30;
  const [totalPages, setTotalPages] = useState(1);
  const rakutenCategories = [
    {
      id: "womens",
      jp: "レディースファッション",
      en: "Women's Fashion",
      icon: <Shirt />,
    },
    {
      id: "bags",
      jp: "バッグ・小物・ブランド雑貨",
      en: "Bags & Accessories",
      icon: <Briefcase />,
    },
    {
      id: "mens",
      jp: "メンズファッション",
      en: "Men's Fashion",
      icon: <Shirt />,
    },
    { id: "shoes", jp: "靴", en: "Shoes", icon: <Footprints /> },
    {
      id: "jewelry",
      jp: "ジュエリー・アクセサリー",
      en: "Jewelry & Accessories",
      icon: <Gem />,
    },
    {
      id: "kids",
      jp: "キッズ・ベビー・マタニティ",
      en: "Kids & Baby",
      icon: <Baby />,
    },
    { id: "toys", jp: "おもちゃ", en: "Toys", icon: <ToyBrick /> },
    {
      id: "sports",
      jp: "スポーツ・アウトドア",
      en: "Sports & Outdoor",
      icon: <Volleyball />,
    },
    { id: "home", jp: "家電", en: "Home Appliances", icon: <HouseHeart /> },
    {
      id: "tv",
      jp: "TV・オーディオ・カメラ",
      en: "TV Audio & Camera",
      icon: <Camera />,
    },
    {
      id: "computers",
      jp: "パソコン・周辺機器",
      en: "Computers & Peripherals",
      icon: <Laptop />,
    },
    {
      id: "smartphones",
      jp: "スマートフォン・タブレット",
      en: "Smartphones & Tablets",
      icon: <Smartphone />,
    },
    {
      id: "internet",
      jp: "光回線・モバイル通信",
      en: "Internet & Mobile Services",
      icon: <MonitorSmartphone />,
    },
    { id: "food", jp: "食品", en: "Food", icon: <Banana /> },
    {
      id: "sweets",
      jp: "スイーツ・お菓子",
      en: "Sweets & Snacks",
      icon: <Lollipop />,
    },
    {
      id: "water",
      jp: "水・ソフトドリンク",
      en: "Water & Soft Drinks",
      icon: <GlassWater />,
    },
    {
      id: "kitchen",
      jp: "キッチン用品・食器・調理器具",
      en: "Kitchenware",
      icon: <CookingPot />,
    },
    {
      id: "books",
      jp: "本・雑誌・コミック",
      en: "Books & Comics",
      icon: <BookOpen />,
    },
    { id: "cd", jp: "CD・DVD", en: "CD & DVD", icon: <Disc3 /> },
    { id: "video", jp: "テレビゲーム", en: "Video Games", icon: <Gamepad /> },
    {
      id: "musical",
      jp: "楽器・音響機器",
      en: "Musical Instruments",
      icon: <Guitar />,
    },
    {
      id: "car",
      jp: "車用品・バイク用品",
      en: "Car Accessories",
      icon: <KeySquare />,
    },
    {
      id: "beauty",
      jp: "美容・コスメ・香水",
      en: "Beauty & Cosmetics",
      icon: <EyeClosed />,
    },
    {
      id: "medicine",
      jp: "医薬品・コンタクト・介護",
      en: "Medical & Care",
      icon: <HeartPulse />,
    },
    {
      id: "pets",
      jp: "ペット・ペットグッズ",
      en: "Pets & Supplies",
      icon: <Cat />,
    },
    {
      id: "flowers",
      jp: "花・ガーデン・DIY",
      en: "Flowers & Garden",
      icon: <Flower2 />,
    },
  ];

  const genreMap = {
    womens: 100371,
    mens: 551177,
    bags: 216131,
    shoes: 558885,
    jewelry: 216129,
    kids: 100533,
    toys: 566382,
    sports: 101070,
    home: 562637,
    tv: 211742,
    computers: 100026,
    smartphones: 564500,
    internet: 565004,
    food: 100227,
    sweets: 551167,
    water: 100316,
    kitchen: 558944,
    books: 200162,
    cd: 101240,
    video: 101205,
    musical: 112493,
    car: 503190,
    beauty: 100939,
    medicine: 551169,
    pets: 101213,
    flowers: 100005,
  };

  useEffect(() => {
    if (!categoryID) return;

    const genreId = genreMap[categoryID];
    if (!genreId) return;

    const foundCategory = rakutenCategories.find(
      (cat) => cat.id === categoryID
    );

    if (foundCategory) {
      setSelectedCategory(foundCategory.en);
    }

    fetch(
      `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?applicationId=1004153375637600271&genreId=${genreId}&hits=30&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setbestseller(data.Items || []);
        setTotalPages(data.pageCount || 1); 
      });
  }, [categoryID, page]);

  return (
    <div className="min-h-screen rounded-xl shadow-sm bg-white mx-auto max-w-7xl px-6 py-6">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Image src="/rakutenlogo.png" width={26} height={26} alt="Rakuten" />
          <span className={`font-medium ${lexend.className}`}>
            Rakuten Official
          </span>
        </div>
        <Link href="/Shop/Rakuten">
          <Button>Back</Button>
        </Link>
      </div>

      <div className="flex gap-6 mt-6">
        <section className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className={`font-semibold text-lg ${dm_sans_bold.className}`}>
              {SelectedCategory}
            </h3>
            <p className={`text-sm text-gray-500 italic ${lexend.className}`}>
              Total products: {bestseller.length} per page
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-5">
            {bestseller.map((itemObj, index) => {
                const item = itemObj.Item;
                if (!item) return null;

                return (
                  <div
                    key={index}
                    className="group bg-white border rounded-xl p-4 hover:border-orange-300 hover:shadow-md transition"
                  >
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

                    <p
                      className={`mt-3 text-sm font-semibold line-clamp-2 text-gray-800 ${lexend.className}`}
                    >
                      {item.itemName}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <span
                        className={`text-orange-600 font-bold ${dm_sans_bold.className}`}
                      >
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
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => setpage((prev) => Math.max(prev - 1, 1))}
                />
              </PaginationItem>

              {page > 3 && (
                <>
                  <PaginationItem>
                    <PaginationLink href="#" onClick={() => setpage(1)}>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  {page > 4 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                </>
              )}

              {[...Array(5)].map((_, i) => {
                const pageNum = page - 2 + i;
                if (pageNum < 1 || pageNum > totalPages) return null;
                return (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      href="#"
                      isActive={page === pageNum}
                      onClick={() => setpage(pageNum)}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              {page < totalPages - 2 && (
                <>
                  {page < totalPages - 3 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={() => setpage(totalPages)}
                    >
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    setpage((prev) => Math.min(prev + 1, totalPages))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>
      </div>
    </div>
  );
}

export default CategoryProduct;
