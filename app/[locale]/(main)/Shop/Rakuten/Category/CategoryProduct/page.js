"use client";
import { useParams } from "next/navigation";
import CategoryProduct from "./components/ListingProductCategory";

export default function CategoryPage() {
  const { CategoryID } = useParams();

  if (!CategoryID) return <p>Loading...</p>;

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
        <CategoryProduct categoryID={CategoryID}/>
    </main>
  );
}