"use client"; 
import { ChevronDown, GlobeIcon, HelpCircle } from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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

  const handleSelect = (lang) => {
    setSelectedLang(lang);
  };

  return (
    <div className="w-full bg-black text-white text-sm">
      <div className="flexBetween py-3 px-[8%] lg:px-[12%] flex-col md:flex-row">
        <div className="flex space-x-4 flex-wrap">
          <p>Shop in Japan easily from the comfort of your own home, with fast and reliable service.</p>
        </div>
        <div className="flex space-x-4 flex-wrap">
          <Link
            href="#"
            className="pr-3 border-r-2 border-gray-300 hover:underline flex items-center">
            Delivery Policy
          </Link>
          <Link
            href="#"
            className="pr-3 border-r-2 border-gray-300 hover:underline flex items-center">
            First Time Use?
          </Link>
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
    // <div className="bg-black w-full p-3 flex justify-end px-9 gap-x-5">
    //   <div className="flex items-center space-x-3">
    //     <DropdownMenu>
    //       <DropdownMenuTrigger className="bg-white text-black px-2 py-1 rounded flex items-center space-x-1">
    //         <HelpCircle></HelpCircle>
    //         <ChevronDown size={15} ></ChevronDown>
    //       </DropdownMenuTrigger>
    //       <DropdownMenuContent>
    //         <DropdownMenuLabel>My Account</DropdownMenuLabel>
    //         <DropdownMenuSeparator />
    //         <DropdownMenuItem>Profile</DropdownMenuItem>
    //         <DropdownMenuItem>Billing</DropdownMenuItem>
    //         <DropdownMenuItem>Team</DropdownMenuItem>
    //         <DropdownMenuItem>Subscription</DropdownMenuItem>
    //       </DropdownMenuContent>
    //     </DropdownMenu>
    //   </div>
    //   <div className="flex items-center space-x-3">
    //     <DropdownMenu>
    //       <DropdownMenuTrigger className="bg-white text-black px-2 py-1 rounded flex items-center space-x-2">
    //         <span
    //           className={`fi fi-${selectedLang.code.toLowerCase()} w-6 h-6`}
    //         ></span>
    //         <span className="">{selectedLang.label}</span>
    //         <ChevronDown></ChevronDown>
    //       </DropdownMenuTrigger>
    //       <DropdownMenuContent className="bg-white text-black">
    //         {langs.map((lang) => (
    //           <DropdownMenuItem
    //             key={lang.code}
    //             className="flex items-center space-x-2"
    //             onClick={() => handleSelect(lang)}
    //           >
    //             <span
    //               className={`fi fi-${lang.code.toLowerCase()} w-6 h-6`}
    //             ></span>
    //             <span>{lang.label}</span>
    //           </DropdownMenuItem>
    //         ))}
    //       </DropdownMenuContent>
    //     </DropdownMenu>
    //   </div>
    // </div>
  );
}

export default Headerbar;
