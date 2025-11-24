import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function QuickGuide() {
  const steps = [
    {
      image: "/assets/Order.png",
      title: "Submit Your Order",
      description:
        "Paste the product link or browse our integrated shop to select items. We'll handle the purchasing for you.",
    },
    {
      image: "/assets/Payment.png",
      title: "Process Your Payment",
      description:
        "Complete your payment so we can purchase the item and send it to our sorting facility.",
    },
    {
      image: "/assets/shipping.png",
      title: "Arrange Shipping",
      description:
        "Settle the shipping cost and choose to combine multiple orders into one shipment if you like.",
    },
    {
      image: "/assets/delivery.png",
      title: "Track Your Delivery",
      description:
        "Your parcel ships within 1–2 business days with full tracking information.",
    },
  ];

  return (
    <section className="padd-cont my-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          How It Works
        </h3>
        <Link
          href="/help"
          className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors group"
        >
          <span>View Guide</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            {/* Step Number Badge */}
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold text-sm mb-4">
              {index + 1}
            </div>

            {/* Image */}
            <div className="flex justify-center mb-4">
              <Image
                width={160}
                height={160}
                src={step.image}
                alt={step.title}
                className="object-contain"
              />
            </div>

            {/* Content */}
            <h5 className="text-lg font-semibold text-gray-900 mb-2">
              {step.title}
            </h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuickGuide;