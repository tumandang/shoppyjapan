import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
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
function CardRakuten() {
  return (
    <Link href="/" className="">
            <div className="group bg-white border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 my-5 ">
              <div className="flexCenter bg-gray-50 rounded-xl p-3 ">
                <Image
                  src="/Product_Example/arsenal_jersey.webp"
                  width={160}
                  height={150}
                  alt="arsenal-item"
                  className="object-contain group-hover:scale-110 duration-500 transition-transform"
                />
              </div>

              <div className="mt-3 space-y-1">

                <p className={`text-sm font-medium leading-snug line-clamp-2 ${lexend.className}`}>
                  Jersey Arsenal 25/26 home kit
                </p>

                <span className="text-orange-600 font-semibold text-sm">
                  ¥8,000
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2 mt-3">
                <Button className="col-span-3 text-sm h-9">Add To Cart</Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 border-gray-300 hover:border-orange-500 hover:bg-orange-50"
                >
                  <Heart
                    size={18}
                    className="text-gray-600 hover:text-orange-500"
                  />
                </Button>
              </div>
            </div>
          </Link>
  )
}

export default CardRakuten