"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Lexend, DM_Sans } from "next/font/google";

import { useAuth } from "@/context/AuthContext";
import { ArrowLeftToLine, ArrowRightToLine, Calculator, Heart, Link2, ShoppingBasketIcon, User } from "lucide-react";
import Link from "next/link";
import LinkForm from "../../link-form/components/LinkForm";

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

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [expanded, setexpanded] = useState(true);
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

  return (
    <div className="min-h-screen bg-background padd-cont">
      

   
      <main className="flex gap-6 mt-6">
        <aside className={`transition-all duration-300 border-r pr-4 ${expanded ? "w-64" : "w-14"}`}>
          <div className="flexBetween pb-3 border-b">
            <h4 className={`text-lg font-semibold transition-all ${dm_sans_bold.className} ${expanded ? "opacity-100" : "opacity-0 w-0"}`}>
              My Dashboard
            </h4>
            <button
              onClick={() => setexpanded((prev) => !prev)}
              className="p-1 hover:bg-gray-100 rounded-md ">
              {expanded ? <ArrowLeftToLine /> : <ArrowRightToLine  />}
            </button>
          </div>

          <div className="mt-5">
            <div className="space-y-2">
              <Link href="/dashboard/profile">
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer transition">
                      <span className="text-gray-600">
                        <User></User>
                      </span>
                      {expanded && (
                        <p className={`text-sm text-gray-700 font-medium ${lexend.className}`}>
                          My Profile
                        </p>
                      )}
                    </div>
              </Link>
              <Link href="/dashboard/insertlink">
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer transition">
                      <span className="text-gray-600">
                        <Link2></Link2>
                      </span>
                      {expanded && (
                        <p className={`text-sm text-gray-700 font-medium ${lexend.className}`}>
                          Insert URL
                        </p>
                      )}
                    </div>
              </Link>
              <Link href="/">
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer transition">
                      <span className="text-gray-600">
                        <ShoppingBasketIcon/>
                      </span>
                      {expanded && (
                        <p className={`text-sm text-gray-700 font-medium ${lexend.className}`}>
                          My Orders
                        </p>
                      )}
                    </div>
              </Link>
                 <Link href="/">
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer transition">
                      <span className="text-gray-600">
                        <Heart/>
                      </span>
                      {expanded && (
                        <p className={`text-sm text-gray-700 font-medium ${lexend.className}`}>
                          Wishlist
                        </p>
                      )}
                    </div>
              </Link>
              <Link href="/shipping_calculator">
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer transition">
                      <span className="text-gray-600">
                        <Calculator/>
                      </span>
                      {expanded && (
                        <p className={`text-sm text-gray-700 font-medium ${lexend.className}`}>
                          Calculate Courier Fee
                        </p>
                      )}
                    </div>
              </Link>
           
            </div>
          </div>
        </aside>
        <div className="mx-auto max-w-4xl flex-1">
        
          <div className="mb-8">
            <h1 className={`${lexend.className} text-4xl mb-2`}>Insert Link</h1>
            <p className={`${dm_sans.className} text-gray-600`}>
              Make your order manually
            </p>
          </div>

          <LinkForm/>
                      
                      
          



        </div>
      </main>
    </div>
  );
}