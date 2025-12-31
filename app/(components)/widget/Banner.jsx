"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { bannerApi } from '@/lib/api';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";

function Banner() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const loadBanners = async () => {
      try {
        setLoading(true);
        const data = await bannerApi.getAllImages();
        setBanners(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadBanners(); 
  }, []); 

  if (loading) return (
    <div className="flex flex-col items-center space-y-3 text-center p-8">
      <Spinner className="w-6 h-6 text-orange-400"></Spinner>
      Loading banners...
    </div>
  )
  if (error) return <div className="text-red-500 p-8">Error: {error}</div>;

  return (
    <div className="w-full flexCenter">
      <div className="w-[900px] h-[530px] overflow-hidden rounded-xl border border-white/10 mb-3">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          slidesPerView={1}
          centeredSlides
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={banner.id || index} className="h-full w-full relative">
              <div className="absolute w-full h-full">
                 <img
                  src={banner.url}
                  alt={banner.title || 'Banner image'}
                  className="w-full h-full object-cover transition-all duration-2500 ease-out scale-100 rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;