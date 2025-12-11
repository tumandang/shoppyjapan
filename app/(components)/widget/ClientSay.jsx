import React from "react";
import { Quote } from "lucide-react";
import { Lexend, DM_Sans } from "next/font/google";
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
function ClientSay() {
  const testimonials = [
    {
      id: 1,
      text: "I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them.",
      name: "Jon Moxley",
      image: "/Product_Example/male.jpg",
    },
    {
      id: 2,
      text: "Exceptional quality and outstanding customer support. They went above and beyond to ensure my satisfaction. Will definitely use their services again!",
      name: "Sarah Johnson",
      image: "/Product_Example/male.jpg",
    },
    {
      id: 3,
      text: "Professional, reliable, and efficient. Their attention to detail and commitment to excellence sets them apart from the competition.",
      name: "Michael Chen",
      image: "/Product_Example/male.jpg",
    },
  ];

  return (
    <div className="bg-linear-to-br from-orange-50 to-amber-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 ${lexend.className}`}>
                What Our Customers Say
              </h2>
              <p className={`text-lg text-gray-600 ${dm_sans.className}`}>
                Discover the reasons why people love us and become your go-to
                partner.
              </p>
            </div>

            <TestimonialCard testimonial={testimonials[0]} />
          </div>

          <div className="space-y-6">
            {testimonials.slice(1).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial, featured = false }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
        featured ? "border-2 border-orange-200" : ""
      }`}
    >
      <Quote className="text-orange-500 w-10 h-10 mb-4" />
      <p className={`text-gray-700 leading-relaxed mb-6 text-base ${dm_sans.className}`}>
        {testimonial.text}
      </p>
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className={`font-semibold text-gray-900 text-lg ${lexend.className}`}>
            {testimonial.name}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ClientSay;
