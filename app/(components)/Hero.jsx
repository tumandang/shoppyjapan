import React from "react";
import HeroContent from "./HeroContent";
import Image from "next/image";

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

      <Image
        src="/assets/drone.png"
        alt="Hero Right"
        width={600}
        height={600}
        priority
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 object-contain  w-1/2 h-full"
      />
      {/* <video
        src="/assets/dron.webp"
        autoPlay
        loop
        muted
        playsInline
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 object-contain w-lg h-auto mr-10"
      ></video> */}
    </section>
  );
}

export default Hero;
