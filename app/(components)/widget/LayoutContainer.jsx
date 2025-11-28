import {
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Banner from "./Banner";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
function LayoutContainer() {
  return (
    <div className=" padd-cont flex flex-col">
      <div className=" flex flex-row gap-x-4 my-2">
        <div className="w-1/4  flex flex-col gap-y-2 ">
          <div className="flex flex-col px-5 gap-y-2 rounded-lg bg-white py-5 shadow-lg ">
            <h4 className={`text-orange-500 ${lexend.className}`}>
              Integrated Shop
            </h4>
            <Link href="/Shop/Rakuten/">
              <div className="flex flex-row gap-x-2 hover:bg-gray-100 rounded-md p-2">
                <Image
                  src="/rakutenlogo.png"
                  width={200}
                  height={200}
                  alt="Rakuten Logo"
                  className=" w-8 h-8 rounded-lg"
                />
                <span className={` ${dm_sans.className} flex items-center`}>
                  Rakuten
                </span>
              </div>
            </Link>
            <Link href="/">
              <div className="flex flex-row gap-x-2 hover:bg-gray-100 rounded-md p-2">
                <Image
                  src="/rakutenrakuma.png"
                  width={200}
                  height={200}
                  alt="Rakuten Rakuma Logo"
                  className=" w-8 h-8 rounded-lg"
                />
                <span className={` ${dm_sans.className} flex items-center`}>
                  Rakuten Rakuma
                </span>
              </div>
            </Link>
            <Link href="/">
              <div className="flex flex-row gap-x-2 hover:bg-gray-100 rounded-md p-2">
                <Image
                  src="/yahoologo.jpg"
                  width={200}
                  height={200}
                  alt="Yahoo AuctionLogo"
                  className=" w-8 h-8 rounded-lg"
                />
                <span className={` ${dm_sans.className} flex items-center`}>
                  Yahoo Auction
                </span>
              </div>
            </Link>
            <div className="flex flex-col ">
              <h4 className={`text-orange-500 ${lexend.className}`}>
                Not found the marketplace
              </h4>
              <Link
                href="/marketplace"
                className=" hover:bg-gray-100 rounded-md p-2 "
              >
                <span className=" italic cursor-pointer">List of Website</span>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg  flexCenter flex-col p-2 gap-y-5">
            <h4 className={`${lexend.className}`}>Our Application</h4>
            <Image
              src="/assets/Shopan_App.png"
              width={100}
              height={100}
              alt="Qr"
              className=" w-30 h-30 rounded-lg"
            />
            <Button
              variant="outline"
              asChild
              className="border border-gray-400 px-2 py-1 shadow-md rounded-lg"
            >
              <Link
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.shoppyjapan&hl=en"
              >
                PlayStore
              </Link>
            </Button>
          </div>
        </div>
        <div className="w-3/4 flex flex-col p-x-2 gap-y-4">
          <div className="bg-white rounded-lg shadow-lg w-full p-2 h-full flexCenter">
            <Banner />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg  p-2">
        <div className=" flexBetween w-full">
          <div className="flexCenter  gap-10 px-4 py-3">
            <div className={`${lexend.className}`}>
              <h4>Announcement</h4>
            </div>
            <div className="flex flex-row gap-2">
              <p>13/3/2025</p>
              <p>13:43</p>
            </div>
            <div className="text-nowrap">
              <p
                className={`text-sm font-semibold line-clamp-2 text-gray-800 ${lexend.className}`}
              >
                UPDATED SHIPPING FEE POLICY
              </p>
            </div>
          </div>
          <div className="">
            <Link
              href="/"
              className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors group"
            >
              <span>View All</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutContainer;
