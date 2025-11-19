"use client";
import React, { useState } from "react";
import { Lexend, Sansation } from "next/font/google";
import {
  ChevronDown,
  Globe2,
  Handshake,
  Medal,
  SearchCheck,
  Waypoints,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
  weight: ["600"],
});
const sansation = Sansation({
  variable: "--font-Sansation",
  subsets:["latin"],
  weight: ["400"],
});

const faqGeneral = [
  {
    icon: <SearchCheck />,
    question: "Why do Buy Requests need to be reviewed by the ShoPan team?",
    answer:
      "Buy Requests ensure safety. Items may be ineligible, limited, or show suspicious red flags.",
  },
  {
    icon: <Globe2 />,
    question: "Can you ship to my country?",
    answer: "Yes. ShoPan ships worldwide using Japan Post, FedEx, and DHL.",
  },
  {
    icon: <Medal />,
    question: "Are items purchased through ShoPan authentic?",
    answer:
      "ShoPan purchases only from verified, reputable Japanese marketplaces and sellers.",
  },
  {
    icon: <Waypoints />,
    question: "Is ShoPan the seller of the items?",
    answer:
      "No. ShoPan is a proxy buying service that purchases items on your behalf.",
  },
  {
    icon: <Handshake />,
    question: "Does ShoPan provide customer support?",
    answer:
      "Yes. Support is available through your dashboard and contact channels.",
  },
];

function FAQ() {
  const [selectedQ, setSelectedQ] = useState(null);

  const toggleAnswer = (index) => {
    setSelectedQ((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 h-screen md:px-10  bg-[#1f1f1f]">
      <div className={`text-white text-center ${lexend.className}`}>
        <h3 className="text-2xl md:text-3xl font-semibold">
          Frequently Asked Questions
        </h3>
      </div>
      <div className={`${sansation.className} text-center mt-2`}>
        <p className="text-gray-300">
          These are the most commonly asked questions for Shopee Japan.
          <br />
          Can't find what you are looking for?{" "}
          <span className="font-semibold">Chat with our chatbot - Aika</span>
        </p>
      </div>
      <div className="flex flex-col gap-y-5 mt-8 w-full max-w-3xl">
        {faqGeneral.map((item, index) => {
          const isOpen = selectedQ === index;

          return (
            <div
              key={index}
              className="flex flex-row gap-x-5 h-[60px] cursor-pointer items-start "
            >
              <div className="border border-gray-800 bg-white rounded-lg p-3 flexCenter">
                {item.icon}
              </div>

              <div className="flex flex-col  flex-1 ">
                <div
                  className="flex justify-between w-full"
                  onClick={() => toggleAnswer(index)}
                >
                  <h4
                    className={`${lexend.className} flex-1 text-lg md:text-xl text-white `}
                  >
                    {item.question}
                  </h4>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="text-white" />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p
                        className={`${sansation.className} text-gray-100 mt-1 `}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
