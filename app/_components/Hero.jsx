'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import{Link as ScrollLink } from 'react-scroll';
import{motion} from'framer-motion';
import { fadeIn } from '../variants';


function Hero() {
  return (
    <section className=" text-white">
      <div className='grid-cols-1 lg:grid-cols-2 flex w-full h-full  h-screen items-stretch justify-center lg:justify-normal bg-hero bg-center lg:bg-cover'>

  <div className="px-4 mt-20 lg:mt-20 items-center flex lg:basis-3/5 py-32 h-screen lg:flex ">
    <div className="text-center h-full items-stretch place-items-stretch">
      <motion.h4
      
      variants={fadeIn('down',0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.2}}
        className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-2xl sm:text-3xl font-extrabold text-transparent lg:text-4xl"
      >
        The place where your imagination

        <span className="block"> meets reality. </span>
      </motion.h4>

      <motion.p 
         variants={fadeIn('down',0.6)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.2}}
      className="mx-auto mt-4 max-w-xl text-xl lg:text-2xl/relaxed">
don't waist time      </motion.p>

      <motion.div 
              variants={fadeIn('down',0.9)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false,amount:0.2}}
      
      className="mt-8 flex flex-wrap justify-center gap-4">
        <ScrollLink
 
          className=" w-full rounded border border-purple-700 bg-purple-600 px-12 py-3 text-sm font-medium text-white hover:bg-purple-800 hover:text-white focus:outline-none focus:ring active:text-opacity-75 active:border-none sm:w-auto"
          // href="#ourProducts" 
          offset={-60}
                to={'ourCategories'}
                smooth 
                spy
        
        >
          <span className='ease  absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-black
          transition-all duration-300 group-hover:h-64'></span>
          <span className='ease relative group-hover:text-white transition duration-300'>
            
          Get Started
          </span>
        </ScrollLink>

        <ScrollLink
      
          className="block w-full rounded border border-purple-700 px-12 py-3 text-sm font-medium text-white transition hover:text-purple-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          offset={-60}
          to={'about'}
          smooth 
          spy
          hashSpy={true}
        >
          Learn More
        </ScrollLink>
      </motion.div>
    </div>
  </div>
  {/* <div  className='max-auto basis-1/2  flex sm:h-screen md:items-center justify-center' >

  <Image   src={'/craftopus.jpg'} width={400} height={500}></Image>
  </div> */}

      </div>
</section>
  )
}

export default Hero