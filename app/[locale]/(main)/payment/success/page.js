
"use client";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle, ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { useLocale , useTranslations } from "next-intl";
export default function PaymentSuccess({searchparams}) {


const searchParams = useSearchParams();
const sessionId = searchParams.get("session_id");
const locale = useLocale();
const pr = useTranslations('payment');
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
        <div className="mb-6 flex justify-center">
             <div className="bg-green-50 p-4 rounded-full">
               <CheckCircle className="w-12 h-12 text-green-500" />
             </div>
        </div>
          
          <div className="border-b border-gray-200 py-5 mb-5">
            <h1 className="text-2xl font-bold text-green-600">
              {pr('successTitle')}
            </h1>
            <p className="mt-4">
              {pr('successDesc')}
            </p>
          </div>
          <a href={`/${locale}/dashboard/order`} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2">
            <ShoppingBasket className="w-4 h-4"></ShoppingBasket>
             {pr('viewOrder')}
          </a>
      </div>
    </main>
  );
}
