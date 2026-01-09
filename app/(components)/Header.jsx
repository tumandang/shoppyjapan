"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Heart, Search, ShoppingBag, Menu, X, Link2, Calculator, User, LogOut } from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useLocale , useTranslations } from 'next-intl';

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
  const h = useTranslations('Header');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isActive = (path) => pathname === path;
  const [cartCount] = useState(0);
  const [wishlistCount] = useState(0);
  const { user, logout } = useAuth();
  const handleSelect = (platform) => {
    setSelectedPlatform(platform);
  };
  const [link, setLink] = useState("");
    const handleLogout = async () => {
    await logout();
    router.push('/');
  };
  const router = useRouter();
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const locale = useLocale();
  const handleSearch = () => {
    if (!link) return;

    if (link.startsWith("http")) {
      try {
        const url = new URL(link);

        if (!url.hostname.includes("rakuten.co.jp")) {
          router.push(`/${locale}/invalid-link?url=${encodeURIComponent(link)}`);
          return;
        }
        const pathSegments = url.pathname.split("/").filter(Boolean);
        const shopCode = pathSegments[0]; 
        const itemCode =
          url.searchParams.get("xuseflg_ichiba01") ||
          pathSegments[pathSegments.length - 1];

        if (!itemCode) {
          router.push(`/${locale}/invalid-link?url=${encodeURIComponent(link)}`);
          return;
        }
        const productID = `${shopCode}:${itemCode}`;
        router.push(`/${locale}/Shop/Rakuten/Product/${encodeURIComponent(productID)}`);
        return;
      } catch (err) {
        router.push(`/${locale}/invalid-link?url=${encodeURIComponent(link)}`);
        return;
      }
    }

    const keyword = link.trim();
    router.push(`/${locale}/Shop/Rakuten/Search?keyword=${encodeURIComponent(keyword)}`);
  };
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
            <div className="flex w-full px-4">

              <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder={h('SearchPlaceHolder')}
                className="flex-1 px-4 py-2.5 border border-gray-300 outline-none focus:border-orange-500 transition-colors text-sm rounded-l-lg"
              />

              <button
                onClick={handleSearch}
                className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 rounded-r-lg flex items-center justify-center cursor-pointer"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={`/${locale}/link-form`}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors group"
            >
              <Link2
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
              href={`/${locale}/shipping_calculator`}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors group"
              aria-label="Go to shipping calculator" 
            >
              <Calculator
                size={24}
                className="text-gray-700 group-hover:text-orange-500 transition-colors"
              />
            </Link>

            <Link
              href={`/${locale}/cart`}
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

            {user ? (
              <div className="flex flex-row gap-x-4">
                <Link href={`/${locale}/dashboard/profile`}>
                  <Button
                    variant="outline"
                    className="rounded-lg px-5 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                  >
                    <User size={18} />
                    {user.name}
                  </Button>
                </Link>
                <Button 
                  onClick={handleLogout}
                  variant="destructive"
                  className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-5 py-2 cursor-pointer flex items-center gap-2"
                >
                  <LogOut size={18} />
                  Logout
                </Button>
              </div>
            ):(
             <div className="flex flex-row gap-x-4">
                <Link href={`/${locale}/login`}>
                  <Button
                    variant="outline"
                    className="rounded-lg px-5 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer"
                  >
                    {h('loginText')}
                  </Button>
                </Link>
                <Link href={`/${locale}/register`}>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-5 py-2 cursor-pointer">
                    {h('registerText')}
                  </Button>
                </Link>
             </div>
            )}

           
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <Link
              href={`/${locale}/wishlist`}
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
              href={`/${locale}/cart`}
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
          <div className="flex ">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-3 py-2 border border-gray-300 outline-none text-sm rounded-l-lg"
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
