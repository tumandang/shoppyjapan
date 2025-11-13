"use client";
import { ChevronDown, X } from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const langs = [
  { code: "GB", label: "ENGLISH" },
  { code: "MY", label: "BAHASA MELAYU" },
  { code: "JP", label: "日本語" },
];

function Headerbar() {
  const [selectedLang, setSelectedLang] = useState(langs[0]);
  const [showBanner, setShowBanner] = useState(true);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
  };

  return (
    <>

      <div className="w-full px-[5%] lg:px-[9%] bg-gray-50 border-b border-gray-200 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="hidden md:flex items-center">
            <div

              className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Shop in Japan easily from home with fast, reliable service.
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium hidden sm:block"
            >
              Delivery Policy
            </Link>
            
            <div className="w-px h-4 bg-gray-300 hidden sm:block" />

            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              First Time?
            </Link>

            <div className="w-px h-4 bg-gray-300" />

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium">
                <span className={`fi fi-${selectedLang.code.toLowerCase()} w-5 h-5`} />
                <span className="hidden sm:inline">{selectedLang.label}</span>
                <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                {langs.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-3 py-2"
                    onClick={() => handleSelect(lang)}
                  >
                    <span className={`fi fi-${lang.code.toLowerCase()} w-5 h-5`} />
                    <span className="font-medium">{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
}

export default Headerbar;