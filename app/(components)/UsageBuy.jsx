"use client";
import React, { useRef } from "react";
import { Lexend, Sansation, DM_Sans } from "next/font/google";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
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
const dm_sans_bold = DM_Sans({
  variable: "--font-DM_Sans",
  subsets: ["latin"],
  weight: ["800"],
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
            <p className="text-gray-300">Click the card for more information</p>
          </div>
          {/* STICKY CARD */}
          <div className="relative w-full max-w-lg h-1/2 aspect-video overflow-hidden rounded-md">
            {/* CARD CONTAINER*/}
            
            <Dialog>
              <DialogTrigger asChild>
                <div className="card absolute w-full h-full overflow-hidden rounded-md cursor-pointer">
                  {/* CARD */}
                  <div className="absolute top-1 left-1 p-2 m-2 w-auto  rounded-sm bg-[#1f1f1f] z-1">
                    {/* TAG */}
                    <p
                      className={`uppercase ${lexend.className} text-xs text-white`}
                    >
                      Register the ShoPan account
                    </p>
                  </div>
                  <img
                    src="/assets/4278441.jpg"
                    className="img relative w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </DialogTrigger>
              
                <DialogContent className="min-w-screen h-3/4 fixed bottom-0 left-1/2 -translate-x-1/2 translate-y-0 top-auto rounded-t-lg">
                  <DialogHeader>
                    <DialogTitle className={`${dm_sans_bold.className} font-bold text-3xl flexCenter`}>Register the ShoPan account</DialogTitle>
                    <DialogDescription className={`${lexend.className} text-center`}>
                      Create your ShoPan account to start purchasing items from
                      Japan securely and efficiently.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="">
                    <h4>1. Complete Your Registration Form</h4>
                    <p>
                      Fill in your personal information on the ShoPan registration
                      page, including your name, email address, and preferred
                      password. Make sure everything is correct, as this
                      information will be used for order confirmation and
                      shipping.
                    </p>
                  </div>
                  <div className="">
                    <h4>2. Verify Your Email Address</h4>
                    <p>
                      After submitting the form, ShoPan will automatically send a verification email to the address you provided.
                      Open the email and click "Activate ShoPan User" to confirm your account.
                      This step ensures that your account is valid and secure before you make any purchases.
                    </p>
                  </div>
                  <div className="">
                    <h4>3. Log In to Your ShoPan Dashboard</h4>
                    <p>
                      Once your email is successfully verified, return to ShoPan and log in using your registered email and password.
                      You'll now have access to your dashboard, where you can start browsing, adding items, and managing your orders.
                    </p>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Link href="">
                      <Button>Register the Account</Button>
                    </Link>
                    
                  </DialogFooter>
                </DialogContent>
            </Dialog>
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
