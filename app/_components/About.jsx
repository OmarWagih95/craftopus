import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div id='about' className=' lg:bg-dodo lg:bg-fixed  bg-no-repeat bg-right   py-6 lg:pt-16 flex flex-col lg:flex-row  min-h-screen h-auto bg-gray-800 items-start justify-center'>
      {/* <div  className='grid-cols-1 lg:grid-cols-2 flex  h-5/6  w-11/12 border-2 border-gray-700 rounded-md'> */}
        <div className=' bg-opacity-10  h-auto relative my-8 flex justify-center lg:h-screen items-start lg:w-1/2'>
          <div className='relative -rotate-12 '>
            <Image src={'/dodo1.jpeg'} width={260} height={390}></Image>
          </div>
          <div className=' rotate-12 '>
            <Image src={'/dodo2.jpeg'} width={250} height={380}></Image>
          </div>
          <div className='absolute top-36 '>
            <Image  src={'/dodo3.jpeg'} width={280} height={420}  ></Image>
          </div>
        </div>
        {/* //lsa hna hyb2a alklaam */}
        <div className='bg-dodo lg:h-[300px] h-auto bg-cover bg-right  lg:bg-none p-4  mt-72 w-screen lg:m-5 lg:w-1/2  text-white flex-col items-center justify-center text-center '>
          <h1  className='text-gray-300 -z-0 font-sans font-semibold lg:font-bold text-sm lg:text-2xl'>My Name is Donia Khaled, I've graduated from Faculty of Art Education, I have loved doing art all my life, but more recently felt that I need to spread it out in a creative way where everyone could experience it.

It came to me when I started to design and create my own needs to be unique and special made for me with the colors and designs I prefer, then I wanted to make it for my beloved ones and finally asked myself why I open it up to everyone so we can all have our unique stuff! 

I made Craftopus, It stand for Craft and Octopus where that cute octopus uses his magic 8 hands to create and design in every artistic way he can do. 🪄</h1>
        </div>
      {/* </div> */}
    </div>
  )
}

export default About