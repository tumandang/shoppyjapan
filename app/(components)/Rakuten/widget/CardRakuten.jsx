"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function CardRakuten() {
  const [bestseller, setBestseller] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?applicationId=1004153375637600271"
    )
      .then((res) => res.json())
      .then((data) => {
        setBestseller(data.Items || []);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-[250px] bg-gray-100 rounded-xl animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {bestseller.slice(0, 6).map((itemObj, index) => {
        const item = itemObj.Item;
        if (!item) return null;
        return (
          <div
            key={index}
            className="group bg-white border rounded-xl p-4 hover:border-orange-300 hover:shadow-md transition"
          >
            <Link href={`/Shop/Rakuten/Product/${item.itemCode}`}>
              <div className="flex justify-center items-center bg-gray-50 rounded-xl h-[180px] overflow-hidden">
                <img
                  src={item.mediumImageUrls?.[0]?.imageUrl || "/noimg.jpg"}
                  loading="lazy"
                  alt={item.itemName}
                  className="object-contain h-full group-hover:scale-105 transition"
                />
              </div>
            </Link>
            <p className="mt-3 text-sm font-semibold line-clamp-2 text-gray-800">
              {item.itemName}
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-orange-600 font-bold">
                ¥{item.itemPrice.toLocaleString()}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardRakuten;
