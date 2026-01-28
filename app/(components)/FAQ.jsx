"use client";
import React, { useState } from "react";
import { Lexend } from "next/font/google";
import {
  ChevronDown,
  Globe2,
  Handshake,
  Medal,
  SearchCheck,
  Waypoints,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from 'next-intl';
import AnimatedContent from "@/components/react-bits/AnimatedContent";
const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
  weight: ["600"],
});




function FAQ() {
  const [selectedQ, setSelectedQ] = useState(null);
  const fq = useTranslations('Faq');
  const toggleAnswer = (index) => {
    setSelectedQ((prev) => (prev === index ? null : index));
  };
  const faqGeneral = [
  {
    icon: <SearchCheck />,
    question: fq('general.review.question'),
    answer:
      fq('general.review.answer')
  },
  {
    icon: <Globe2 />,
    question: fq('general.shipping.question'),
    answer: fq('general.shipping.answer'),
  },
  {
    icon: <Medal />,
    question: fq('general.authentic.question'),
    answer:
      fq('general.authentic.answer'),
  },
  {
    icon: <Waypoints />,
      question: fq('general.seller.question'),
    answer:
      fq('general.seller.answer'),
  },
  {
    icon: <Handshake />,
    question: fq('general.support.question'),
    answer:
      fq('general.support.answer'),
  },
];

  return (
    <div className="flex flex-col items-center justify-center px-4 h-screen md:px-10  bg-[#041E1C]">
      <AnimatedContent
        distance={300}
        direction="horizontal"
        reverse={false}
        duration={1.5}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0.3}
      >
      <div className={`text-white text-center ${lexend.className}`}>
        <h3 className="text-2xl md:text-3xl font-semibold">
          { fq('title') }
        </h3>
      </div>
      <div className={`${lexend.className} text-center mt-2`}>
        <p className="text-gray-300"> 
          {fq('subtitle')}
          <br />
          {fq('cta')}
          <span className="font-semibold">{fq('botText')}</span>
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
                <div className="flex justify-between w-full gap-x-24"
                  onClick={() => toggleAnswer(index)} >
                  <h4
                    className={`${lexend.className} flex-1 text-lg md:text-xl text-white `}
                  >
                    {item.question}
                  </h4>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="text-white " />
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
                        className={`${lexend.className} text-gray-100 mt-1 `}
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
      </AnimatedContent>
    </div>
  );
}

export default FAQ;
