import { Coins, QrCode, ShieldEllipsis, Trophy } from "lucide-react";
import Link from "next/link";
import React from "react";
import Banner from "./Banner";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function LayoutContainer() {
  return (
    <div className="padd-cont flex flex-row gap-x-4 my-5">
      <div className="w-1/4  flex flex-col gap-y-2">
        <div className="flex flex-col px-5 gap-y-2 rounded-lg bg-white py-5 shadow-lg ">
          <h4 className="text-orange-500">Integrated Shop</h4>
          <Link href="/">
            <div className="flex flex-row gap-x-2">
              <Image
                src="/rakutenlogo.png"
                width={200}
                height={200}
                alt="Rakuten Logo"
                className=" w-8 h-8 rounded-lg"
              />
              <span>Rakuten</span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex flex-row gap-x-2">
              <Image
                src="/rakutenrakuma.png"
                width={200}
                height={200}
                alt="Rakuten Rakuma Logo"
                className=" w-8 h-8 rounded-lg"
              />
              <span>Rakuten Rakuma</span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex flex-row gap-x-2">
              <Image
                src="/yahoologo.jpg"
                width={200}
                height={200}
                alt="Yahoo AuctionLogo"
                className=" w-8 h-8 rounded-lg"
              />
              <span>Yahoo Auction</span>
            </div>
          </Link>
          <div className="">
            <span>
              Not found the marketplace
            </span>
            <span>List of Website</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg  flexCenter flex-col p-2 gap-y-5">
          <h4>Our APP</h4>
          <QrCode width={100} height={100}></QrCode>
          <Button
            variant="outline"
            className="  border border-gray-400 px-2 py-1 shadow-md rounded-lg "
          >
            Android
          </Button>
        </div>
      </div>
      <div className="w-3/4 flex flex-col p-x-2 gap-y-4">
        <div className="  flex flex-row gap-x-4">
          <div className="bg-white rounded-lg shadow-lg w-3/4 p-2">
            <Banner />
          </div>
          <div className="flex flex-col gap-y-2 w-1/4">
            <div className="relative bg-white rounded-lg shadow-lg  p-2">
              <Image
                src="/calculator.jpg"
                width={200}
                height={200}
                alt="Shopan Logo"
                className="h-full w-full rounded-lg"
              />
              <Button
                variant="outline"
                className="absolute  bottom-4 left-1/2 -translate-x-1/2 bg-white hover:bg-gray-100 text-black font-semibold shadow-lg transition-colors duration-200"
              >
                Calculate Shipping
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg  p-6">
          <div className="flex flex-row flexBetween w-full gap-x-4 ">
            <div className="flex flex-row gap-x-2 ">
              <ShieldEllipsis></ShieldEllipsis>
              <h5>Guaranteed Authentic</h5>
            </div>
            <div className="flex flex-row gap-x-2 ">
              <Coins></Coins>
              <h5>Hassle-Free Refunds</h5>
            </div>
            <div className="flex flex-row gap-x-2">
              <Trophy></Trophy>
              <h5>Premium Quality, Every Time</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutContainer;
