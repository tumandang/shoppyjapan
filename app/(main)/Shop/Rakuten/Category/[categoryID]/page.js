"use client";
import CategoryProduct from "./components/CategoryProduct";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const { categoryID } = useParams();

  if (!categoryID) return <p>Loading...</p>;

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
        <CategoryProduct categoryID={categoryID}/>
    </main>
  );
}