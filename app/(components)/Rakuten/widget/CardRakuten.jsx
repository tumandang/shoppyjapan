"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Heart } from "lucide-react";
import { Lexend, DM_Sans } from "next/font/google";
import { Toggle } from "@/components/ui/toggle";
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
function CardRakuten() {
  const [bestseller, setbestseller] = useState([]);

  useEffect(() => {
    fetch(
      "https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?applicationId=1004153375637600271"
    )
      .then((res) => res.json())
      .then((data) => setbestseller(data.Items || []));
  }, []);
  return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {bestseller.slice(0, 6).map((itemObj, index) => {
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
                      src={item.mediumImageUrls?.[0]?.imageUrl || "/noimg.jpg"}
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

    // <Link href="/" className="">
    //         <div className="group bg-white border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 my-5 ">
    //           <div className="flexCenter bg-gray-50 rounded-xl p-3 ">
    //             <Image
    //               src="/Product_Example/arsenal_jersey.webp"
    //               width={160}
    //               height={150}
    //               alt="arsenal-item"
    //               className="object-contain group-hover:scale-110 duration-500 transition-transform"
    //             />
    //           </div>

    //           <div className="mt-3 space-y-1">

    //             <p className={`text-sm font-medium leading-snug line-clamp-2 ${lexend.className}`}>
    //               Jersey Arsenal 25/26 home kit
    //             </p>

    //             <span className="text-orange-600 font-semibold text-sm">
    //               ¥8,000
    //             </span>
    //           </div>
    //           <div className="grid grid-cols-4 gap-2 mt-3">
    //             <Button className="col-span-3 text-sm h-9">Add To Cart</Button>

    //             <Button
    //               variant="outline"
    //               size="icon"
    //               className="h-9 w-9 border-gray-300 hover:border-orange-500 hover:bg-orange-50"
    //             >
    //               <Heart
    //                 size={18}
    //                 className="text-gray-600 hover:text-orange-500"
    //               />
    //             </Button>
    //           </div>
    //         </div>
    //       </Link>
  );
}

export default CardRakuten;
