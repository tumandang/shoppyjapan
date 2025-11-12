"use client"; 

import Link from "next/link";
import { Button } from '@/components/ui/button'
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Heart, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
const langs = [
  { label: "Rakuten" },
  { label: "Rakuten Rakuma" },
  { label: "Yahoo Auction" },
];
function Header() {
  const [selectedLang, setSelectedLang] = useState(langs[0]);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
  };
  return (
    <header className="bg-white">
      <div className="w-full border-b border-gray-300 relative">
        <div className="padd-cont flexBetween">
          {/* LOGO */}
          <div className="pl-[1.5rem]">
            <Link href={"/"}>
              <Image
                src={"/logoshoppyJapan.png"}
                width={200}
                height={70}
                alt="Shopan Logo"
              ></Image>
            </Link>
          </div>
          {/* SearchBar */}
          <div className="flex-1 ms-6 mx-0 lg:max-6 max-w-xl relative hidden lg:flex">
            <div className="flex items-center space-x-3">
              <DropdownMenu className="">
                <DropdownMenuTrigger className="flexBetween space-x-2 border px-3  py-2 rounded-s-lg border-gray-400 outline-none w-44">
                  <span className="">{selectedLang.label}</span>
                  <ChevronDown size={14} strokeWidth={3}></ChevronDown>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-black">
                  {langs.map((lang, index) => (
                    <DropdownMenuItem
                      key={index}
                      className="flex items-center space-x-2"
                      onClick={() => handleSelect(lang)}>
                      <span>{lang.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <input
              type="text"
              placeholder="Search Product"
              className="flex-1 border px-3 py-2  border-gray-400 outline-none"
            />
            <button className="bg-orange-500  hover:bg-orange-600 text-white rounded-r-lg cursor-pointer w-10 flex justify-center items-center">
              <Search className="w-5 h-5"></Search>
            </button>
            
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <Link  href={"/"}>
              <ShoppingBag></ShoppingBag>
            </Link>
            <Link  href={"/"}>
              <Heart></Heart>
            </Link>
            <Link  href={"/"}>
              <Button variant="outline" className="rounded-xl px-5 py-2">Login</Button>
            </Link>
            <Link  href={"/"}>
              <Button variant="solid" className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-5 py-2" >Register</Button>
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
