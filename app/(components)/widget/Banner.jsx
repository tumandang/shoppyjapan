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
    {
      imgsrc: "/assets/banner1.webp",
      name: "Banner 11.11",
      desc: "Big Sale From Japan",
    },
    {
      imgsrc: "/assets/banner2.webp",
      name: "Banner Product",
      desc: "Authentic Japan Products",
    },
    {
      imgsrc: "/assets/banner3.webp",
      name: "Tokyo Travel",
      desc: "Contact: +81 90-616 3990",
    },
    {
      imgsrc: "/assets/banner5.jpg",
      name: "Delivery",
      desc: "Fast and secure international shipping.",
    },
    {
      imgsrc: "/assets/banner6.jpg",
      name: "Safety",
      desc: "Safety assured with professional handling.",
    },
  ];

  return (
    <div className="w-full flexCenter">
      <div className="w-[900px] h-[530px] overflow-hidden rounded-xl  border border-white/10 mb-3">
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
          className="h-full w-full "
        >
          {banner.map((i, index) => (
            <SwiperSlide key={index} className="h-full! w-3/4 relative ">
              <div className="absolute w-full h-full">
                <Image
                  src={i.imgsrc}
                  alt={i.name}
                  fill
                  sizes="small"
                  className=" object-fill transition-all duration-5000ms ease-out scale-100 swiper-zoom-image rounded-lg"
                  priority={index === 0}
                />
              </div>

              <div className=" absolute bottom-6 left-6 bg-black/35 backdrop-blur-md text-white p-4 rounded-lg max-w-xs z-30">
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
