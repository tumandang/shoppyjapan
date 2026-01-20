"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Heart } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Toggle } from "@/components/ui/toggle";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Lexend, DM_Sans } from "next/font/google";
const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
  weight: ["600"],
});
const dm_sans = DM_Sans({
  variable: "--font-DM_Sans",
  subsets: ["latin"],
  weight: ["400"],
});
const dm_sans_bold = DM_Sans({
  variable: "--font-DM_Sans",
  subsets: ["latin"],
  weight: ["800"],
});

function ListingSearch({ Search }) {
  const [bestseller, setbestseller] = useState([]);
  const [page, setpage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 30;
  useEffect(() => {
    if (!Search) return;

    fetch(
      `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?applicationId=1004153375637600271&keyword=${Search}&hits=30&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setbestseller(data.Items || []);
        setTotalPages(data.pageCount || 1); 
      })
      .catch((err) => console.error("Rakuten API error:", err));
  }, [Search, page]);
  return (
    <div className="min-h-screen rounded-xl shadow-sm bg-white mx-auto max-w-7xl px-6 py-6">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Image src="/rakutenlogo.png" width={26} height={26} alt="Rakuten" />
          <span className={`font-medium ${lexend.className}`}>
            Rakuten Official
          </span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              Sort <ChevronDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuGroup>
              <DropdownMenuItem>Most Popular</DropdownMenuItem>
              <DropdownMenuItem>Best Rating</DropdownMenuItem>
              <DropdownMenuItem>Newest</DropdownMenuItem>
              <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
              <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex gap-6 mt-6">
        <section className="flex-1 ">
          <div className="flex items-center justify-between mb-4">
            <h3 className={`font-semibold text-lg ${dm_sans_bold.className}`}>
              Best Seller Products
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-4">
            {bestseller.map((itemObj, index) => {
                const item = itemObj.Item;
                if (!item) return null;

                return (
                  <div
                    key={index}
                    className="group bg-white border rounded-xl p-4 hover:border-orange-300 hover:shadow-md transition"
                  >
                    <Link href={`/Shop/Rakuten/Product/${item.itemCode}`}>
                      <div className="flex justify-center items-center bg-gray-50 rounded-xl h-[180px] overflow-hidden">
                        <img
                          src={
                            item.mediumImageUrls?.[0]?.imageUrl || "/noimg.jpg"
                          }
                          alt={item.itemName}
                          className="object-contain h-full group-hover:scale-105 transition"
                        />
                      </div>
                    </Link>

                    <p
                      className={`mt-3 text-sm font-semibold line-clamp-2 text-gray-800 ${lexend.className}`}
                    >
                      {item.itemName}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <span
                        className={`text-orange-600 font-bold ${dm_sans_bold.className}`}
                      >
                        ¥{item.itemPrice.toLocaleString()}
                      </span>

                      <Toggle
                        aria-label="Heart"
                        size="sm"
                        variant="outline"
                        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500"
                      >
                        <Heart />
                      </Toggle>
                    </div>
                  </div>
                );
              })}
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => setpage((prev) => Math.max(prev - 1, 1))}
                />
              </PaginationItem>

              {page > 3 && (
                <>
                  <PaginationItem>
                    <PaginationLink href="#" onClick={() => setpage(1)}>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  {page > 4 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                </>
              )}

              {[...Array(5)].map((_, i) => {
                const pageNum = page - 2 + i;
                if (pageNum < 1 || pageNum > totalPages) return null;
                return (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      href="#"
                      isActive={page === pageNum}
                      onClick={() => setpage(pageNum)}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              {page < totalPages - 2 && (
                <>
                  {page < totalPages - 3 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={() => setpage(totalPages)}
                    >
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    setpage((prev) => Math.min(prev + 1, totalPages))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>
      </div>
    </div>
  );
}

export default ListingSearch;
