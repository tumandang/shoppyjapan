"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Heart, Search, ShoppingBag, Menu, X } from "lucide-react";
import Image from "next/image";

const platforms = [
  { label: "Rakuten", value: "rakuten" },
  { label: "Rakuten Rakuma", value: "rakuma" },
  { label: "JDirect Auction", value: "JDirect Auction" },
];
  const shopLinks = [
    { href: "/rakuten", label: "Rakuten" },
    { href: "/rakuma", label: "Rakuten Rakuma" },
    { href: "/yahoo-auction", label: "JDirect Auction" },
  ];



const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

function Header() {
  const pathname = usePathname();
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isActive = (path) => pathname === path;
  const [cartCount] = useState(0);
  const [wishlistCount] = useState(0);

  const handleSelect = (platform) => {
    setSelectedPlatform(platform);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
        
          <Link href="/" className="shrink-0">
            
            <Image
              src="/logoshoppyJapan.png"
              width={160}
              height={50}
              alt="Shopan Logo"
              className="h-10 w-auto"
            />
          </Link>

          
          <div className="hidden lg:flex flex-1 max-w-2xl">
            <div className="flex w-full shadow-sm">
             
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-r-0 border-gray-300 hover:bg-gray-50 transition-colors rounded-l-lg text-sm font-medium text-gray-700 outline-none min-w-[160px]">
                  <span className="flex-1 text-left">
                    {selectedPlatform.label}
                  </span>
                  <ChevronDown size={16} className="text-gray-500" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg min-w-40 ">
                  {platforms.map((platform) => (
                    <DropdownMenuItem
                      key={platform.value}
                      className="cursor-pointer hover:bg-gray-50 px-4 py-2"
                      onClick={() => handleSelect(platform)}
                    >
                      <span className="font-medium">{platform.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

          
              <input
                type="text"
                placeholder="Search by product or link URL"
                className="flex-1 px-4 py-2.5 border-t border-b border-gray-300 outline-none focus:border-orange-500 transition-colors text-sm"
              />

              <button
                className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 rounded-r-lg flex items-center justify-center"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>
          </div>


          <div className="hidden lg:flex items-center gap-3">

            <Link
              href="/wishlist"
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors group"
            >
              <Heart
                size={24}
                className="text-gray-700 group-hover:text-orange-500 transition-colors"
              />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
              <span className="sr-only">Wishlist ({wishlistCount} items)</span>
            </Link>

            <Link
              href="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors group"
            >
              <ShoppingBag
                size={24}
                className="text-gray-700 group-hover:text-orange-500 transition-colors"
              />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">Cart ({cartCount} items)</span>
            </Link>

  
            <Link href="/login">
              <Button
                variant="outline"
                className="rounded-lg px-5 py-2 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-5 py-2">
                Register
              </Button>
            </Link>
          </div>


          <div className="lg:hidden flex items-center gap-3">
 
            <Link
              href="/wishlist"
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Heart size={24} className="text-gray-700" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>


            <Link
              href="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ShoppingBag size={24} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className="lg:hidden mt-4">
          <div className="flex shadow-sm">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 bg-white border border-r-0 border-gray-300 rounded-l-lg text-sm font-medium text-gray-700 outline-none">
                <span className="text-xs">{selectedPlatform.label}</span>
                <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                {platforms.map((platform) => (
                  <DropdownMenuItem
                    key={platform.value}
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSelect(platform)}
                  >
                    {platform.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-3 py-2 border-t border-b border-gray-300 outline-none text-sm"
            />

            <button
              className="bg-orange-500 text-white px-4 rounded-r-lg"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-orange-50 text-orange-500"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-2">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">
                  Shop
                </div>
                {shopLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors block ${
                      isActive(link.href)
                        ? "bg-orange-50 text-orange-500"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
