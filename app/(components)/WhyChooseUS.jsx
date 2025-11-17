import React from 'react';
import { Lexend } from "next/font/google";
import { 
  CoinsIcon, 
  Compass, 
  MessageCircle, 
  ShieldCheckIcon, 
  ShoppingBag, 
  Trophy 
} from 'lucide-react';

const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
  weight: ["600"],
});

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Guaranteed Authentic",
    description: "Every product we source is 100% genuine and verified for authenticity."
  },
  {
    icon: CoinsIcon,
    title: "Hassle-Free Refunds",
    description: "Shop with confidence — our refund policy ensures your money is protected, no stress attached."
  },
  {
    icon: Trophy,
    title: "Premium Quality, Every Time",
    description: "We handpick only authentic, high-quality products from trusted Japanese sources."
  },
  {
    icon: MessageCircle,
    title: "Always Here to Help",
    description: "Our friendly support team and AIKA-bot are available 24/7 to assist you whenever you need help."
  },
  {
    icon: ShoppingBag,
    title: "Your Trusted Personal Shopper",
    description: "Let our experienced team find and purchase the perfect items just for you."
  },
  {
    icon: Compass,
    title: "Discover More You'll Love",
    description: "Explore our curated selection of popular and recommended Japanese products."
  }
];

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="w-full max-w-sm p-6 flex flex-col items-center text-center h-full">
      <div className="mb-4 flex-shrink-0">
        <Icon size={50} className="text-orange-500" />
      </div>
      <h4 className={`font-bold text-black text-xl mb-3 ${lexend.className}`}>
        {title}
      </h4>
      <p className="font-normal text-base text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function WhyChooseUS() {
  return (
    <div className="padd-cont flexCenter flex-col">
      <h3 className={`text-black text-center mb-16 ${lexend.className}`}>
        Why You'll Love Choosing shoPan for <br />
        Your Japan Orders
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex">
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUS;