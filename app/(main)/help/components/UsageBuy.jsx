"use client";
import React, { useRef } from "react";
import { Lexend, DM_Sans } from "next/font/google";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
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
      <div className="bg-[#1f1f1f]" ref={container}>
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

            <Sheet>
              <SheetTrigger asChild>
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
                    src="/assets/4278441.webp"
                    className="img relative w-full h-full object-cover"
                    alt="step1"
                  />
                </div>
              </SheetTrigger>

              <SheetContent className="p-4">
                <SheetHeader>
                  <SheetTitle
                    className={`${dm_sans_bold.className} font-bold text-3xl flexCenter`}
                  >
                    Register the ShoPan account
                  </SheetTitle>
                  <SheetDescription
                    className={`${lexend.className} text-center`}
                  >
                    Create your ShoPan account to start purchasing items from
                    Japan securely and efficiently.
                  </SheetDescription>
                </SheetHeader>
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
                    After submitting the form, ShoPan will automatically send a
                    verification email to the address you provided. Open the
                    email and click "Activate ShoPan User" to confirm your
                    account. This step ensures that your account is valid and
                    secure before you make any purchases.
                  </p>
                </div>
                <div className="">
                  <h4>3. Log In to Your ShoPan Dashboard</h4>
                  <p>
                    Once your email is successfully verified, return to ShoPan
                    and log in using your registered email and password. You'll
                    now have access to your dashboard, where you can start
                    browsing, adding items, and managing your orders.
                  </p>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </SheetClose>
                  <Link href="">
                    <Button>Register the Shopan Account Now</Button>
                  </Link>
                </SheetFooter>
              </SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger>
                <div className="card absolute w-full h-full overflow-hidden rounded-md cursor-pointer">
                  <div className="absolute top-1 left-1 p-2 m-2 w-auto  rounded-sm bg-[#1f1f1f] z-1">
                    <p
                      className={`uppercase ${lexend.className} text-xs text-white`}
                    >
                      Add item to cart
                    </p>
                  </div>
                  <img
                    src="/assets/step1.webp"
                    className="img relative w-full h-full object-cover"
                    alt="step2"
                  />
                </div>
              </SheetTrigger>
              <SheetContent className="p-4">
                <SheetHeader>
                  <SheetTitle
                    className={`${dm_sans_bold.className} font-bold text-3xl flexCenter`}
                  >
                    Add Item to Cart
                  </SheetTitle>
                  <SheetDescription
                    className={`${lexend.className} text-center`}
                  >
                    Add your desired Japanese products through ShoPan’s
                    dashboard with two simple methods.
                  </SheetDescription>
                </SheetHeader>
                <div className="">
                  <h4>1. Browse & Add Directly</h4>
                  <p>
                    Click “Shop Now” from your dashboard to explore Japanese
                    marketplaces. When you find an item you like, click “Add
                    Order” to insert it into your cart.
                  </p>
                </div>
                <div className="">
                  <h4>2. Add Items Manually (URL Method)</h4>
                  <p>
                    If you’re browsing on another website:
                    <ul>
                      <li>Copy the product URL</li>
                      <li>Paste both into your ShoPan dashboard</li>
                      <li>Then click “Add Order”.</li>
                    </ul>
                  </p>
                </div>
                <div className="">
                  <h4>3. Confirm Your Order</h4>
                  <p>
                    Review the displayed item information and click “Save”.
                    Scroll down to the Batch Order section and select “Review
                    Payment” to begin the payment process.
                  </p>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </SheetClose>
                  <Link href="">
                    <Button>Register the Shopan Account Now</Button>
                  </Link>
                </SheetFooter>
              </SheetContent>
            </Sheet>
            <Drawer>
              <DrawerTrigger>
                <div className="card absolute w-full h-full overflow-hidden rounded-md cursor-pointer">
                  <div className="absolute top-1 left-1 p-2 m-2 w-auto  rounded-sm bg-[#1f1f1f] z-1">
                    <p
                      className={`uppercase ${lexend.className} text-xs text-white`}
                    >
                      Make payment & Check item availability
                    </p>
                  </div>
                  <img
                    src="/assets/step2.webp"
                    className="img relative w-full h-full object-cover"
                    alt="step3"
                  />
                </div>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>
                    Make payment & Check item availability
                  </DrawerTitle>
                  <DrawerDescription>
                    Ensure your orders are confirmed and ready for processing
                    with these simple steps.
                  </DrawerDescription>
                </DrawerHeader>

                <div className="flex flex-col items-center gap-5 text-left">
                  <div className="max-w-md w-full">
                    <h4 className="font-semibold">1. Review Your Cart</h4>
                    <p>
                      Go to your ShoPan dashboard and open the cart. Verify all
                      items, quantities, and prices to ensure everything is
                      correct.
                    </p>
                  </div>

                  <div className="max-w-md w-full">
                    <h4 className="font-semibold">
                      2. Check Item Availability
                    </h4>
                    <p>
                      ShoPan will automatically check the stock for each item.
                      If an item is unavailable, you’ll receive a notification
                      and suggested alternatives.
                    </p>
                  </div>

                  <div className="max-w-md w-full">
                    <h4 className="font-semibold">3. Proceed to Payment</h4>
                    <p>
                      Select “Review Payment” in the Batch Order section. Choose
                      your preferred payment method and complete the transaction
                      securely.
                    </p>
                  </div>

                  <div className="max-w-md w-full">
                    <h4 className="font-semibold">4. Confirmation</h4>
                    <p>
                      Once payment is successful, you’ll receive an order
                      confirmation with estimated shipping details. Keep an eye
                      on your dashboard for updates.
                    </p>
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <div className="card absolute w-full h-full overflow-hidden rounded-md cursor-pointer">
              <div className="absolute top-1 left-1 p-2 m-2 w-auto  rounded-sm bg-[#1f1f1f] z-1">
                <p
                  className={`uppercase ${lexend.className} text-xs text-white`}
                >
                  Make courier payment & Item post out
                </p>
              </div>
              <img
                src="/assets/8401659.webp"
                className="img relative w-full h-full object-cover"
                alt="step4"
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
                src="/assets/4305991.webp"
                className="img relative w-full h-full object-cover"
                alt="step5"
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
