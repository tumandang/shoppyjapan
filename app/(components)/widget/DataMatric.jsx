import React from 'react';
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
function DataMetric() {
  const metrics = [
    { value: '90%', label: 'Max. savings on online shopping abroad' },
    { value: '150+', label: 'Countries supported worldwide' },
    { value: '24/7', label: 'Customer support available' }
  ];

  return (
    <div className=" bg-linear-to-b from-[#F7F7F7] to-amber-50 flex items-center justify-center  py-20">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center"
            >
              <div className="mb-4">
                <h2 className={`text-6xl font-bold bg-linear-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent ${lexend.className}`}>
                  {metric.value}
                </h2>
              </div>
              <p className={`text-gray-600 text-base leading-relaxed ${dm_sans.className}`}>
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DataMetric;