"use client";

import React, { useEffect } from "react";
import { DM_Sans, Lexend } from "next/font/google";
import Image from "next/image";
import { Trash, Minus, Plus } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["600"],
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

function CartCard() {
  const {user, loading, logout} = useAuth();
  const router = useRouter();
  useEffect(() => {
    if(!loading && !user){
      router.push('/login');
    }
  }, [user, loading, router])
  
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

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

    if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Spinner></Spinner>
      </div>
    );
  }

    if (!user) {
    return null;
  }

  return (
    <div className="space-y-6 mt-14">

      <div>
        {/* <p className="text-sm text-gray-500">Breadcrumb</p> */}
        <h2 className={`text-2xl font-semibold ${lexend.className}`}>
          Your Cart
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        <div className="lg:col-span-2 space-y-4 bg-white rounded-2xl">
          {items.map((product, index) => (
            <div
              key={index}
              className="flex gap-4 p-4    border-b border-gray-100"
            >
              <Image
                src={product.image}
                width={90}
                height={90}
                alt={product.name}
                className="rounded-xl bg-gray-100 object-contain"
              />

              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-start">
                  <h4 className={`text-sm font-semibold ${lexend.className}`}>
                    {product.name}
                  </h4>
                  <button className="text-gray-400 hover:text-red-500 transition">
                    <Trash size={16} />
                  </button>
                </div>

                <div className="flex gap-2 text-xs text-gray-500">
                  <span className="px-2 py-1 bg-gray-100 rounded-full">
                    Size: {product.size}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 rounded-full">
                    Color: {product.color}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/rakutenlogo.png"
                      width={16}
                      height={16}
                      alt="Rakuten"
                    />
                    <span className="text-xs text-gray-500">{product.shop}</span>
                  </div>

                  <p className="font-semibold text-base">RM {product.price.toFixed(2)}</p>
                </div>

          
                <div className="flex items-center gap-3 w-fit rounded-md bg-gray-100">
                  <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200">
                    <Minus size={14} />
                  </button>
                  <span className="text-sm">{product.qty}</span>
                  <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200">
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="bg-white rounded-2xl shadow-sm p-5 space-y-4 h-fit">
          <h4 className={`font-semibold ${lexend.className}`}>
            Order Summary
          </h4>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>RM {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>RM {subtotal.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full py-3 rounded-xl bg-black text-white text-sm hover:opacity-90 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;