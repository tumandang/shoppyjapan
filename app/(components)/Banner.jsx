"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
function Banner() {
  const banner = [
    { imgsrc: "/banner1.jpg", name: "Banner 11.11" },
    { imgsrc: "/banner3.jpg", name: "Tokyo Travel" },
  ];

   return (
    <div className="padd-cont flexCenter">
      <div className="relative w-[750px] h-[450px] border border-gray-400 overflow-hidden rounded-lg">
        <Swiper modules={[Pagination,Autoplay]}
        grabCursor
        initialSlide={2}
        centeredSlides
        slidesPerView= {Autoplay}
        speed={800}
        loop={true}
        slideToClickedSlide
        pagination={{ clickable: true }}
        breakpoints={{ 
            320: {spaceBetween:40},
            650: {spaceBetween:30},
            1000: {spaceBetween:20}
         }}
        >
          {banner.map((i, index) => (
            <SwiperSlide key={index}>
                <img src={i.imgsrc} alt={i.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;
