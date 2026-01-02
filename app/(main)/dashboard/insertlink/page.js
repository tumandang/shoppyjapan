"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Lexend, DM_Sans } from "next/font/google";

import { useAuth } from "@/context/AuthContext";

import LinkForm from "../../link-form/components/LinkForm";
import Asidedashboard from "../components/asidedahsbord";
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
        <Asidedashboard></Asidedashboard>
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