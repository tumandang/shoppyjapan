import React from 'react'
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
function GlassmorphNav() {
  return (

    <nav className='fixed left-1/2 w-11/12  top-0 z-50 flexCenter gap-x-5 h-16 mt-7 rounded-full max-w-7xl -translate-x-1/2 bg-[#1D1616]/20 backdrop-blur-lg text-white'>

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

    </nav>
  )
}

export default GlassmorphNav