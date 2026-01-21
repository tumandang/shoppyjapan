"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Lexend, DM_Sans } from "next/font/google";
import { useAuth } from "@/context/AuthContext";
import Asidedashboard from "../components/asidedahsbord";
import { FileImage, ImageDown, Search } from "lucide-react";
import OrderTable from "./components/OrderTable";

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
    const [buttonStatus, setbuttonStatus] = useState("View all");
    const filters = [
    'View all',
    'In Progress',
    'Pending Payment',    
    'Shipping',
    'Refunded'
  ];
    useEffect(() => {
    if (!loading && !user) {
        router.push('/login');
    }
    }, [user, loading, router]);

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

                <div className="mx-auto max-w-4xl flex-1 space-y-5">
                    <div className="mb-8">
                        <h1 className={`${lexend.className} text-4xl mb-2`}>Order Summary</h1>
                        <p className={`${dm_sans.className} text-gray-600`}>
                            Order Overview, Purchase Summary, or Order Details
                        </p>
                    </div>
                    <div className=" p-2 flexBetween">
                        <div className="flex overflow-hidden rounded-lg border border-gray-200 shadow-md ">
                            {filters.map((filter) => (
                                <button key={filter} onClick={() => setbuttonStatus(filter)}
                                className={`px-4 py-2 transition-colors duration-500 cursor-pointer ${
                                    buttonStatus === filter
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-200'
                                }`}
                                >
                                {filter}
                                </button>
                            ))}
                        </div>
                        <div className="flexStart gap-x-2  p-2 rounded-lg shadow-md border border-gray-300">
                            <label htmlFor="search" id="search">
                                <Search className="w-4 h-4"></Search>
                            </label>
                            <input id="search" name="search" className="focus:outline-none" type="text" placeholder="Order ID, Product name.."/>
                        </div>
                    </div>

                    <OrderTable/>
                  
                </div>
            </main>
        </div>
    )
}