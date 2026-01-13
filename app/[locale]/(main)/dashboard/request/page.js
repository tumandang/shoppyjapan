"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Lexend, DM_Sans } from "next/font/google";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Asidedashboard from "../components/asidedahsbord";
import Tablerequest from "./components/tablerequest";
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

                <div className="mx-auto max-w-4xl flex-1">
                    <div className="mb-8">
                        <h1 className={`${lexend.className} text-4xl mb-2`}>Request</h1>
                        <p className={`${dm_sans.className} text-gray-600`}>
                        Your Request product
                        </p>
                    </div>
                    <div className="w-full mx-auto">
                        <div className="flex flex-wrap -mx-3">
                            <div className="flex flex-col min-w-0 mb-6 wrap-break-word bg-white border border-slate-200 shadow-lg rounded-2xl w-full mx-auto">
                                <div className="p-6 pb-4 border-b border-slate-200 bg-linear-to-r from-slate-50 to-white rounded-t-2xl">
                                    <div className="flexBetween">
                                        <h5 className="text-xl font-semibold text-slate-800">Request Table</h5>
                                        
                                    </div>
                                </div>

                                <div className="flex-auto px-0 pt-0 pb-2">
                                    <div className="p-0 overflow-x-auto">
                                        <table className="items-center w-full mb-0 align-top border-collapse text-slate-500">
                                            <thead className="align-bottom bg-slate-50">
                                                <tr>
                                                    <th className="px-6 py-4 font-semibold text-left uppercase align-middle border-b-2 border-slate-200 text-slate-600 text-xs tracking-wide whitespace-nowrap">
                                                        Product
                                                    </th>
                                                    <th className="px-6 py-4 font-semibold text-left uppercase align-middle border-b-2 border-slate-200 text-slate-600 text-xs tracking-wide whitespace-nowrap">
                                                        Market
                                                    </th>
                                                    <th className="px-6 py-4 font-semibold text-left uppercase align-middle border-b-2 border-slate-200 text-slate-600 text-xs tracking-wide whitespace-nowrap">
                                                        Quantity
                                                    </th>
                                                    <th className="px-6 py-4 font-semibold text-left uppercase align-middle border-b-2 border-slate-200 text-slate-600 text-xs tracking-wide whitespace-nowrap">
                                                         Item Price
                                                    </th>
                                                    <th className="px-6 py-4 font-semibold text-left uppercase align-middle border-b-2 border-slate-200 text-slate-600 text-xs tracking-wide whitespace-nowrap">
                                                         Total Quote
                                                    </th>
                                                    <th className="px-6 py-4 font-semibold text-left uppercase align-middle border-b-2 border-slate-200 text-slate-600 text-xs tracking-wide whitespace-nowrap">
                                                        Status
                                                    </th>
                                                    <th className="px-6 py-4 font-semibold text-left uppercase align-middle border-b-2 border-slate-200 text-slate-600 text-xs tracking-wide whitespace-nowrap">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <Tablerequest ></Tablerequest>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </main>
        </div>
    )
}