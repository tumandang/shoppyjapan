import { Button } from '@/components/ui/button'
import { BookOpenCheck, ShoppingBagIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function HeroContent() {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
        <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
            <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-2xl rounded-full ">
                <div className="absolute inset-[3px] bg-black rounded-full flexCenter gap-2 text-white px-4" >
                    <ShoppingBagIcon className="w-4 h-4"></ShoppingBagIcon>
                    Shopan
                </div>
            </div>
            {/* Main Heading */}

            <h1 className = "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8 text-white">
                Experience the Beauty of Japan,
                <br /> Wherever You Are
            </h1>
            <p className=" text-base sm:text-lg tracking-wider text-gray-400 max-w-100 lg:max-w-120">
                From timeless crafts to modern innovations, ShoppeJapan brings Japan’s unique charm to your everyday life.
            </p>

            <div className='mt-4 space-x-3'>
               <Button variant="Outline" className="border border-gray-200 text-white hover:bg-white hover:text-gray-600 ">
                    Usage Guide
                    <BookOpenCheck  size={15}></BookOpenCheck>
               </Button>
                <Button variant="Outline" className="border border-gray-200 text-white hover:bg-white hover:text-gray-600 ">
                    Register
                    <BookOpenCheck  size={15}></BookOpenCheck>
               </Button>
                    
               
            </div>

        </div>
    </main>
  )
}

export default HeroContent