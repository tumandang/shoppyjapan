import React from 'react'

function Hero() {
  return (
    <section className="relative w-full h-[80vh] ">
      
      <img
        src="/gradient.png"
        alt="Background"
        className="absolute top-0 right-0 opacity-60 -z-10 object-cover"
      />
      <div className="h-0 w-160 absolute top-[20%] right-[-5%] shadow-[0_0_900px-20px_#e99b3] -rotate-30 -z-10"></div>

    </section>
  )
}

export default Hero