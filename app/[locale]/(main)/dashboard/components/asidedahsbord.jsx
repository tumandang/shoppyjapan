"use client";
import React ,{useState} from 'react'
import { ArrowLeftToLine, ArrowRightToLine, Calculator, Heart, Link2, Paperclip, ShoppingBasketIcon, User } from "lucide-react";
import Link from "next/link";
import { Lexend, DM_Sans } from "next/font/google";
import { useLocale ,useTranslations } from 'next-intl';

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
function Asidedashboard() {
  const locale = useLocale();
  const aside = useTranslations('DahsboardTrans');
  const [expanded, setexpanded] = useState(true);
  return (
    <aside className={`transition-all duration-300 border-r pr-4 ${expanded ? "w-64" : "w-14"}`}>
          <div className="flexBetween pb-3 border-b">
            <h4 className={`text-lg font-semibold transition-all ${dm_sans_bold.className} ${expanded ? "opacity-100" : "opacity-0 w-0"}`}>
              {aside('sidebar.DashboardText')}
            </h4>
            <button
              onClick={() => setexpanded((prev) => !prev)}
              className="p-1 hover:bg-gray-100 rounded-md ">
              {expanded ? <ArrowLeftToLine /> : <ArrowRightToLine  />}
            </button>
          </div>

          <div className="mt-5">
            <div className="space-y-2">
              <Link href={`/${locale}/dashboard/profile`}>
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer transition">
                      <span className="text-gray-600">
                        <User></User>
                      </span>
                      {expanded && (
                        <p className={`text-sm text-gray-700 font-medium ${lexend.className}`}>
                          {aside('sidebar.ProfileText')}
                        </p>
                      )}
                    </div>
              </Link>
              <Link href={`/${locale}/dashboard/insertlink`}>
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer transition">
                      <span className="text-gray-600">
                        <Link2></Link2>
                      </span>
                      {expanded && (
                        <p className={`text-sm text-gray-700 font-medium ${lexend.className}`}>
                          {aside('sidebar.InsertURlText')}
                        </p>
                      )}
                    </div>
              </Link>
              <Link href={`/${locale}/dashboard/request`}>
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer transition">
                      <span className="text-gray-600">
                        <Paperclip></Paperclip>
                      </span>
                      {expanded && (
                        <p className={`text-sm text-gray-700 font-medium ${lexend.className}`}>
                          {aside('sidebar.RequestText')}
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
                           {aside('sidebar.OrdersText')}
                        </p>
                      )}
                    </div>
              </Link>
                 <Link href={`/${locale}/dashboard/wishlist`}>
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer transition">
                      <span className="text-gray-600">
                        <Heart/>
                      </span>
                      {expanded && (
                        <p className={`text-sm text-gray-700 font-medium ${lexend.className}`}>
                          {aside('sidebar.Wishlist')}
                        </p>
                      )}
                    </div>
              </Link>
           
            </div>
          </div>
        </aside>
  )
}

export default Asidedashboard