"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Lexend, DM_Sans } from "next/font/google";

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
export default function Page() {
  const searchParams = useSearchParams();
  const producturl = searchParams.get("url");

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!producturl) return;

    const urlSegments = producturl.split("/");
    const keyword = urlSegments[urlSegments.length - 2];
    //nak amik second last segment - which is product code

    fetch(
      `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?applicationId=1004153375637600271&keyword=${keyword}`
    )
      .then((res) => res.json()) // tukar api ke json
      .then((data) => {
        if (data.Items && data.Items.length > 0) {
          const item = data.Items[0].Item;
          setProduct(item);
        } else {
          console.log("No items found:", data);
        }
      })
      .catch((err) => console.error("Rakuten API error:", err));
  }, [producturl]);

  if (!product) return <p className="p-8">Loading product...</p>;

  return (
    <div className="padd-cont ">
      <div className="grid grid-cols-2">
        <div className="max-w-4xl mx-auto p-8">
          
          <img
            src={product.mediumImageUrls[0].imageUrl}
            alt={product.itemName}
            className="w-full mb-4 rounded"
          />
        </div>
        <div className="max-w-4xl mx-auto p-8">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
            <Image
              src="/rakutenlogo.png"
              width={16}
              height={16}
              alt="Rakuten"
              className="rounded"
            />
            <span className={` ${lexend.className}`}>Rakuten</span>
          </div>
          <h1 className="text-2xl font-bold mb-4">{product.itemName}</h1>
          <p>Review: {product.reviewAverage}</p>
          <p className="text-lg font-semibold">Price: ¥{product.itemPrice}</p>
          <p>{product.itemCaption}</p>
        </div>
      </div>
    </div>
  );
}
