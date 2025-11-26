"use client";

import { useSearchParams } from "next/navigation";
import ListingSearch from "./components/ListingSearch";

export default function SearchProduct() {
  const searchParams = useSearchParams();
  const keyword = searchParams?.get("keyword"); // safely get 'ps5'

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <ListingSearch Search={keyword} />
    </main>
  );
}