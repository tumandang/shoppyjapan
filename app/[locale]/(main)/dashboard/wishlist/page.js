"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Lexend, DM_Sans } from "next/font/google";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Asidedashboard from "../components/asidedahsbord";
import { Minus, Plus } from "lucide-react";

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

export default function WishlistPage(){

    const { user, loading, logout } = useAuth();
    const router = useRouter();
    const [expanded, setexpanded] = useState(true);
    useEffect(() => {
    if (!loading && !user) {
        router.push('/login');
    }
    }, [user, loading, router]);

    const items = [
    {
      image: "/Product_Example/arsenal_jersey.webp",
      name: "Arsenal Home Kit 25/26",
      price: 259,
      size: "Medium",
      color: "None",
      shop: "Rakuten",
      qty: 1,
    },
    {
      image: "/Product_Example/arsenal_jersey.webp",
      name: "Arsenal Home Kit 25/26",
      price: 259,
      size: "Medium",
      color: "None",
      shop: "Rakuten",
      qty: 1,
    },
    {
      image: "/Product_Example/arsenal_jersey.webp",
      name: "Arsenal Home Kit 25/26",
      price: 259,
      size: "Medium",
      color: "None",
      shop: "Rakuten",
      qty: 1,
    },
  ];
    if (loading) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4"></div>
            <p className={`${dm_sans.className} text-gray-600`}>Loading...</p>
        </div>
        </div>
    );
    }

    if (!user) {
    return null;
    }
    return(
        <div className="min-h-screen bg-background padd-cont ">
            <main className="flex gap-6 mt-6 ">
                <Asidedashboard></Asidedashboard>

                <div className="mx-auto max-w-4xl flex-1">
                    <div className="mb-8">
                        <h1 className={`${lexend.className} text-4xl mb-2`}>Wishlist</h1>
                        <p className={`${dm_sans.className} text-gray-600`}>
                            Your Wishlist product
                        </p>
                    </div>
                    
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {items.map((product ,index)=> (
                            <div key={index} className="group bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                   
                                <div className="relative bg-gray-50 p-6">
                                    <Image
                                        src={product.image}
                                        width={200}
                                        height={200}
                                        alt="jersey_arsenal"
                                        className="w-full h-48 object-contain rounded-lg"
                                    />
                        
                                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                                        aria-label="Remove from wishlist">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                        
                                <div className="p-5 space-y-4">
                            
                                    <h4 className={`text-lg font-semibold text-gray-900 line-clamp-2 ${lexend.className}`}>
                                        {product.name}
                                    </h4>

                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                                            {product.size}
                                        </span>
                                        <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                                            {product.color}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                                                <Image
                                                    src="/rakutenlogo.png"
                                                    width={16}
                                                    height={16}
                                                    alt="Rakuten"
                                                />
                                            </div>
                                            <span className="text-sm text-gray-600">Rakuten</span>
                                        </div>
                                        <p className="text-xl font-bold text-gray-900">RM {product.price}</p>
                                    </div>

                            
                                    <div className="flex items-center gap-3 pt-2">
                                
                                        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-200">
                                            <button className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors"
                                                aria-label="Decrease quantity">
                                                <Minus className="w-4 h-4"></Minus>
                                            </button>
                                            <span className="text-sm font-semibold text-gray-900 min-w-5 text-center">2</span>
                                            <button className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors"
                                                aria-label="Increase quantity" >
                                                <Plus className="w-4 h-4"></Plus>
                                            </button>
                                        </div>

                                        
                                        <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white p-2.5 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}