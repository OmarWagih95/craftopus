'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";
import{Link as ScrollLink } from 'react-scroll';

const links =[
    {name:'Products',target:'ourProducts',offset:-60},
    {name:'Finished projects',target:'latestProjects',offset:-60},
    {name:'About',target:'about',offset:-60},
    {name:'Feedbacks',target:'feedback',offset:-60},
  ]
function Nav(props) {
  return (
    <div className="mx-auto hidden lg:flex flex h-16 max-w-screen-xl items-center gap-8 px-4 lg:px-6 lg:px-8 justify-between">
    <div className="flex gap-4 px-3  items-center justify-between">
      
      <a className=" block text-teal-600" href="#">
        <span className="sr-only">Home</span>
       <Image src={'/craftopus1.png'} width={50} height={50}></Image>
      </a>
      <Link href='/' className='  font-bold'>
        <h6 className=' text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text'>
        Craftopus
        </h6>
        </Link>
    </div>
  
      <div className="flex items-center justify-center md:justify-between">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
          {links.map((link,index)=>{
              return(        <li className="  text-gray-500 transition hover:text-gray-500/75">
                <ScrollLink 
                className='pb-2 border-b-2 border-gray-900'
                offset={link.offset}
                to={link.target}
                smooth 
                spy
                key={index}
                activeClass='active'>
                  {link.name}
                  </ScrollLink>
  
                
                {/* <a className="text-gray-500 transition hover:text-gray-500/75" href="#ourProducts"> Products </a> */}
              </li>);
          }
        )}
           
  
            {/* <li>
              <ScrollLink
              offset={-100}
              to={ourProducts}
              smooth 
              spy>
                our products
                </ScrollLink> */}

              
            {/* </li>
  
            <li> */}
              {/* <a className="text-gray-500 transition hover:text-gray-500/75" href="#latestProjects"> Finished projects </a>
            </li>
  
 
            <li> */}
              {/* <a className="text-gray-500 transition hover:text-gray-500/75" href="#about"> About </a>
            </li>
  
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#feedback"> Feedbacks </a>
            </li> */}
  

          </ul>
        </nav>
  
      </div>
      <button
            className="block  rounded bg-gray-700 p-2.5 text-white transition hover:text-gray-300/75 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className='flex rounded-lg px-3 py-3 bg-gray-600 text-gray-500 gap-2'>
            <FaShoppingCart />
            <h2 className= 'text-gray-500'>0</h2>
          </div>
        {/* <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className="block rounded-md bg-purple-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-purple-800"
              href="#"
            >
              Login
            </a>
  
            <a
              className="hidden rounded-md bg-transparent border border-purple-600 px-5 py-2.5 text-sm font-medium text-white transition hover:text-purple-700 sm:block"
              href="#"
            >
              Register
            </a>
          </div>
  
 
        </div> */}
    </div>
  )
}

export default Nav