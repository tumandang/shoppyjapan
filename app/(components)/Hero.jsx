import React from 'react'
import HeroContent from './HeroContent'
import Banner from './Banner'
// import GlassmorphNav from './GlassmorphNav'


function Hero() {
  return (
    <section className="relative w-full h-[80vh]  ">
      {/* <GlassmorphNav/> */}
      <img
        src="/gradient.png"
        alt="Background"
        className="absolute top-0 right-0 opacity-80 -z-10 object-cover "
      />
      <div className="h-[5rem] w-[40rem] absolute top-[20%] right-[-5%]  bg-[#e99b63]
      blur-[250px] -rotate-[30deg] -z-10"></div>
      <HeroContent/>
    </section>
  )
}

export default Hero