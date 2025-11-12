"use client"; 

import Link from "next/link";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
const langs = [
  { code: "GB", label: "ENGLISH" },
  { code: "MY", label: "BAHASA MELAYU" },
  { code: "JP", label: "日本語" },
];
function Header() {
  const [selectedLang, setSelectedLang] = useState(langs[0]);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
  };
  return (
    <header>
      <div className="w-full border-b border-gray-300 relative">
        <div className="padd-cont flexBetween">
          {/* LOGO */}
          <div className="">
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
            <input
              type="text"
              placeholder="Search Product"
              className="flex-1 border px-3 py-2 rounded-s-lg border-gray-400 outline-none"
            />
            <button className="bg-[#DD6657] text-white rounded-r cursor-pointer w-10 flex justify-center items-center">
              <Search className="w-5 h-5"></Search>
            </button>
            <div className="flex items-center space-x-3">
              <DropdownMenu>
                <DropdownMenuTrigger className="bg-white text-black px-2 py-1 rounded flex items-center space-x-2">
                  <span
                    className={`fi fi-${selectedLang.code.toLowerCase()} w-6 h-6`}
                  ></span>
                  <span className="">{selectedLang.label}</span>
                  <ChevronDown></ChevronDown>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-black">
                  {langs.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      className="flex items-center space-x-2"
                      onClick={() => handleSelect(lang)}
                    >
                      <span
                        className={`fi fi-${lang.code.toLowerCase()} w-6 h-6`}
                      ></span>
                      <span>{lang.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
