"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";

function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  const shopLinks = [
    { href: "/rakuten", label: "Rakuten" },
    { href: "/rakuma", label: "Rakuten Rakuma" },
    { href: "/yahoo-auction", label: "Yahoo Auction" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        <div className="hidden lg:flex items-center justify-center h-14 gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors relative py-4 ${
                isActive(link.href)
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
              )}
            </Link>
          ))}


          <DropdownMenu open={shopDropdownOpen} onOpenChange={setShopDropdownOpen}>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-4 outline-none relative group cursor-pointer">
              <span>Shop</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform ${shopDropdownOpen ? 'rotate-180' : ''}`}
              />
              {(isActive("/rakuten") || isActive("/rakuma") || isActive("/yahoo-auction")) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg text-gray-700 min-w-[200px]">
              <DropdownMenuLabel className="text-gray-500 text-xs">
                Integrated Shops
              </DropdownMenuLabel>
              {shopLinks.map((link) => (
                <DropdownMenuItem
                  key={link.href}
                  className={`cursor-pointer hover:bg-gray-50 ${
                    isActive(link.href) ? "bg-orange-50 text-orange-500" : ""
                  }`}
                >
                  <Link href={link.href} className="block w-full">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

     

      </div>
    </nav>
  );
}

export default Navbar;