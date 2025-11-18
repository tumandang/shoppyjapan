"use client";

import React, { useRef } from "react";
import { Lexend, Sansation, DM_Sans } from "next/font/google";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ReactLenis, useLenis } from "lenis/react";

const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
  weight: ["600"],
});
const sansation = Sansation({
  variable: "--font-Sansation",
  subsets: ["latin"],
  weight: ["400"],
});
const dm_sans = DM_Sans({
  variable: "--font-DM_Sans",
  subsets: ["latin"],
  weight: ["400"],
});
function UsageBuy() {
  const lenis = useLenis(({ scroll }) => {});
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const card = document.querySelectorAll(".card");
      const images = document.querySelectorAll(".img");
      const totalcard = card.length;
      gsap.set(card[0], { y: 0, scale: 1, rotation: 0 });
      gsap.set(images[0], { scale: 1 });
      for (let index = 1; index < totalcard; index++) {
        gsap.set(card[index], { y: "100%", scale: 1, rotation: 0 });
        gsap.set(images[index], { scale: 1 });
      }

      const scrolltimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-card",
          start: "top top",
          end: `+=${window.innerHeight * (totalcard - 1)}`,
          pin: true,
          scrub: 0.5,
        },
      });

      gsap.fromTo(
        ".intro",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".sticky-card", 
            start: "top 80%", 
            toggleActions: "play none none none", 
          },
        }
      );
      for (let index = 0; index < totalcard - 1; index++) {
        const currentcard = card[index];
        const currentimage = images[index];
        const nextcard = card[index + 1];
        const positon = index;

        scrolltimeline.to(
          currentcard,
          {
            scale: 0.5,
            rotation: 10,
            duration: 1,
            ease: "none",
          },
          positon
        );
        scrolltimeline.to(
          nextcard,
          {
            y: "0%",
            duration: 1,
            ease: "none",
          },
          positon
        );
        if (index === totalcard - 2) {
          scrolltimeline.to(
            ".outro",
            {
              opacity: 1,
              duration: 1,
              ease: "none",
            },
            positon + 1
          );
        }
      }
      return () => {
        scrolltimeline.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );
  return (
    // CONTAINER
    <ReactLenis root>
      <div className=" bg-[#1f1f1f]" ref={container}>
        <section className="sticky-card relative w-screen h-screen p-[2em] overflow-hidden flexCenter bg-[#1f1f1f] text-white ">
          <div
            className={`intro absolute top-10 left-1/2 -translate-x-1/2 opacity-0 text-center  ${dm_sans.className}`}
          >
            <h1 className="text-3xl font-semibold text-gray-200 mb-3">
                How Your ShoPan Order Works
            </h1>
            <p className="text-gray-300">
                Click the card for more information
            </p>
          </div>
          {/* STICKY CARD */}
          <div className="relative w-full max-w-lg h-1/2 aspect-video overflow-hidden rounded-md">
            {/* CARD CONTAINER*/}
            <div className="card absolute w-full h-full overflow-hidden rounded-md cursor-pointer">
              {/* CARD */}
              <div className="absolute top-1 left-1 p-2 m-2 w-auto  rounded-sm bg-[#1f1f1f] z-1">
                {/* TAG */}
                <p className={`uppercase ${lexend.className} text-xs text-white`}>
                  Register the ShoPan account
                </p>
              </div>
              <img
                src="/assets/4278441.jpg"
                className="img relative w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="card absolute w-full h-full overflow-hidden rounded-md cursor-pointer">
              <div className="absolute top-1 left-1 p-2 m-2 w-auto  rounded-sm bg-[#1f1f1f] z-1">
                <p
                  className={`uppercase ${lexend.className} text-xs text-white`}
                >
                  Add item to cart
                </p>
              </div>
              <img
                src="/assets/step1.jpg"
                className="img relative w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="card absolute w-full h-full overflow-hidden rounded-md cursor-pointer">
              <div className="absolute top-1 left-1 p-2 m-2 w-auto  rounded-sm bg-[#1f1f1f] z-1">
                <p
                  className={`uppercase ${lexend.className} text-xs text-white`}
                >
                  Make payment & Check item availability
                </p>
              </div>
              <img
                src="/assets/step2.jpg"
                className="img relative w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="card absolute w-full h-full overflow-hidden rounded-md cursor-pointer">
              <div className="absolute top-1 left-1 p-2 m-2 w-auto  rounded-sm bg-[#1f1f1f] z-1">
                <p
                  className={`uppercase ${lexend.className} text-xs text-white`}
                >
                  Make courier payment & Item post out
                </p>
              </div>
              <img
                src="/assets/8401659.jpg"
                className="img relative w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="card absolute w-full h-full overflow-hidden rounded-md cursor-pointer">
              <div className="absolute top-1 left-1 p-2 m-2 w-auto  rounded-sm bg-[#1f1f1f] z-1">
                <p
                  className={`uppercase ${lexend.className} text-xs text-white`}
                >
                  Order received
                </p>
              </div>
              <img
                src="/assets/4305991.jpg"
                className="img relative w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div
            className={`outro absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 text-center ${dm_sans.className}`}
          >
            <h1 className="text-lg">
              Still unsure? Chat with our support chatbot <br /> - AIKA.
            </h1>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}

export default UsageBuy;
