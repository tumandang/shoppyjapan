"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Banner() {
  const banner = [
    { imgsrc: "/banner1.jpg", name: "Banner 11.11", desc: "Big Sale From Japan" },
    { imgsrc: "/banner2.jpg", name: "Banner Product", desc: "Authentic Japan Products" },
    { imgsrc: "/banner3.jpg", name: "Tokyo Travel", desc: "Contact: +81 90-616 3990" },
  ];

  return (
    <div className="w-full flexCenter p-4 pb-16">
      <div className="relative w-full max-w-[1300px] aspect-[16/6] overflow-hidden rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.25)] border border-white/10">

      
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          slidesPerView={1}
          centeredSlides
          loop={true}
          speed={900}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          className="h-full w-full advanced-swiper"
        >
          {banner.map((i, index) => (
            <SwiperSlide key={index} className="h-full! relative">
              <div className="absolute w-full h-full">
                <Image
                  src={i.imgsrc}
                  alt={i.name}
                  fill
                  className="object-fill transition-all duration-5000ms ease-out scale-100 swiper-zoom-image"
                  priority={index === 0}
                />
              </div>

              <div className="absolute bottom-6 left-6 bg-black/35 backdrop-blur-md text-white p-4 rounded-lg max-w-xs z-30">
                <h2 className="text-xl font-bold">{i.name}</h2>
                <p className="text-sm text-white">{i.desc}</p>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>

    </div>
  );
}

export default Banner;
