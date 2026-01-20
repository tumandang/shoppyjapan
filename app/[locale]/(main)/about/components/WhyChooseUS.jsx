"use client";

import React from "react";
import { Lexend } from "next/font/google";
import {
  CoinsIcon,
  Compass,
  MessageCircle,
  ShieldCheckIcon,
  ShoppingBag,
  Trophy,
} from "lucide-react";
import SpotlightCard from "@/components/react-bits/SpotlightCard";
import FadeContent from "@/components/react-bits/FadeContent";

const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
  weight: ["600"],
});

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Guaranteed Authentic",
    description: "Every product we source is 100% genuine and verified.",
  },
  {
    icon: CoinsIcon,
    title: "Hassle-Free Refunds",
    description: "Shop confidently—your money is always protected.",
  },
  {
    icon: Trophy,
    title: "Premium Quality",
    description: "We handpick only trusted, high-quality Japanese products.",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description:
      "Our friendly team and AIKA-bot are always ready to assist you.",
  },
  {
    icon: ShoppingBag,
    title: "Personal Shopper",
    description:
      "Let us help you purchase the perfect items from Japan with ease.",
  },
  {
    icon: Compass,
    title: "Discover Japan Picks",
    description:
      "Explore curated recommendations and popular items loved by many.",
  },
];

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <SpotlightCard
      className="border-0 shadow-lg bg-white rounded-2xl"
      spotlightColor="rgba(255, 215, 0, 0.4)"
    >
      <div className="w-full p-6 flex flex-col items-center text-center">
        <Icon size={48} className="text-orange-500 mb-4" />
        <h4 className={`text-xl font-bold text-black mb-2 ${lexend.className}`}>
          {title}
        </h4>
        <p className="text-gray-700 text-base leading-relaxed">{description}</p>
      </div>
    </SpotlightCard>
  );
}

function WhyChooseUS() {
  return (
    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
    <section className="py-16 flex flex-col items-center">
      <h3
        className={`text-2xl md:text-3xl text-center font-semibold mb-12 ${lexend.className}`}
      >
        Why shoPan Is Best for Japan Orders
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
    </FadeContent>
  );
}

export default WhyChooseUS;
