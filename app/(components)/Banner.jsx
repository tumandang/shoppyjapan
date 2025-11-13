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
    { imgsrc: "/banner1.jpg", name: "Banner 11.11" },
    { imgsrc: "/banner2.jpg", name: "Banner Product" },
    { imgsrc: "/banner3.jpg", name: "Tokyo Travel" },
  ];

  return (
    <>

      
      <div className="padd-cont flexCenter pb-16">
        <div className="relative w-full max-w-[750px] h-[450px] border border-gray-400 overflow-hidden rounded-lg">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            grabCursor
            initialSlide={0}
            centeredSlides
            slidesPerView={1}
            speed={800}
            loop={true} 
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false, 
            }}
            navigation={true}
            pagination={{ clickable: true }}
            className="h-full"
          >
            {banner.map((i, index) => (
              <SwiperSlide key={index} className="!h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={i.imgsrc}
                    alt={i.name}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Banner;