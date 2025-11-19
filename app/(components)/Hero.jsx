import React from 'react'
import HeroContent from './HeroContent'
import Image from 'next/image'




function Hero() {
  return (
    <section className="relative w-full h-[80vh]  ">
      <Image
        src="/gradient.png"
        alt="Background"
        width={500}
        height={500}
        priority
        className="absolute top-0 right-0 opacity-80 -z-10 object-cover "
      />
      <div
        className="h-20 w-160 absolute top-[20%] right-[-5%]  bg-[#e99b63]
      blur-[250px] -rotate-30 -z-10"
      ></div>
      <HeroContent />
    </section>
  );
}

export default Hero