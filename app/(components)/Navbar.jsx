"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full border-b border-gray-300 bg-white">
      <div className="padd-cont flexCenter">
        <div className="flex-1 ms-6 mx-0 lg:max-6 max-w-xl hidden lg:flex items-center space-x-6">
          
          {/* Home */}
          <Link href="/" className="hover:text-[#DD6657] transition-colors">
            Home
          </Link>

          {/* Shop Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="none" className="hover:border border-gray-300 transition-colors duration-300">
                <h5 className="font-normal">Shop</h5>
                <ChevronDown></ChevronDown>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuLabel>Integrated Shop</DropdownMenuLabel>

              <DropdownMenuItem>
                <Link href="/rakuten" className="block w-full">
                  Rakuten
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/rakuma" className="block w-full">
                  Rakuten Rakuma
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/yahoo-auction" className="block w-full">
                  Yahoo Auction
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>


          <Link
            href="/about"
            className="flexCenter hover:text-[#DD6657] transition-colors"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="flexCenter hover:text-[#DD6657] transition-colors"
          >
            Contact Us
          </Link>


          <Link
            href="/delivery-calculator"
            className="flexCenter hover:text-[#DD6657] transition-colors"
          >
            Delivery Calculator
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
