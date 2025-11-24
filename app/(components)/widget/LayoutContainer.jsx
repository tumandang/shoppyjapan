import {
  Coins,
  Compass,
  MessageCircle,
  QrCode,
  ShieldEllipsis,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Banner from "./Banner";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function LayoutContainer() {
  return (
    <div className=" padd-cont flex flex-col">
      <div className=" flex flex-row gap-x-4 my-2">
        <div className="w-1/4  flex flex-col gap-y-2 ">
          <div className="flex flex-col px-5 gap-y-2 rounded-lg bg-white py-5 shadow-lg ">
            <h4 className="text-orange-500">Integrated Shop</h4>
            <Link href="/Shop/Rakuten/">
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
            <div className="flex flex-col">
              <h4 className="text-orange-500">Not found the marketplace</h4>
              <Link href="/marketplace">
                <span className="underline italic cursor-pointer">
                  List of Website
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg  flexCenter flex-col p-2 gap-y-5">
            <h4>Our APP</h4>
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
              href="https://play.google.com/store/apps/details?id=com.shoppyjapan&hl=en">
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
          <div className="flex flex-row gap-x-2">
            <MessageCircle></MessageCircle>
            <h5>24/7 Support</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutContainer;
