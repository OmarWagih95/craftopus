import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import{Link as ScrollLink } from 'react-scroll';
import DropDownMenu from './DropDownMenu'
import { IoMenuSharp } from "react-icons/io5";

import { useState } from 'react'
const links =[
  {name:'Categories',target:'ourCategories',offset:-60},
  {name:'Finished projects',target:'latestProjects',offset:-60},
  {name:'About',target:'about',offset:-60},
  {name:'Feedbacks',target:'feedback',offset:-60},
  {name:'Contact us',target:'contactUS',offset:-60},

]
function MobileNav() {
    const [toggleDropDown, settoggleDropDown] = useState(false);
  return (
    <div className='lg:hidden'>
            <div className="flex gap-4 px-3  items-center justify-between">
      <div className='flex items-center gap-2 py-2'>

      <a className="block text-teal-600" href="#">
        <span className="sr-only">Home</span>
       <Image src={'/craftopus1.png'} width={50} height={30}></Image>
      </a>
      <Link href='/' className='  font-bold'>
        <h6 className=' text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text'>
        Craftopus
        </h6>
        </Link>
      </div>
      <div>
      <IoMenuSharp onClick={()=>settoggleDropDown((prev)=>!prev)}
            width={50}
            height={50}
            scale={0.5}
            size={25}
            className='text-gray-600 mr-5' />

            {/* <Image  src={'/craftopus1.png'}
            onClick={()=>settoggleDropDown((prev)=>!prev)}
            width={37}
            height={37}
            className="rounded-full"></Image> */}
           </div>
           {toggleDropDown && (<div className="dropdown justify-center items-center bg-gray-800">
           {links.map((link,index)=>{
              return(        <li className=" list-none p-3 text-gray-500 transition hover:text-gray-500/75">
                <ScrollLink 
                onClick={()=>settoggleDropDown((prev)=>!prev)}
                className='pb-2 border-b-2 border-gray-900'
                offset={link.offset}
                to={link.target}
                smooth 
                spy
                key={index}
                >
                  {link.name}
                  </ScrollLink>
                  {/* <Link offset={link.offset} href={`#${link.target}`} className="dropdown_link" 
            onClick={()=>settoggleDropDown(false)}>{link.name}</Link> */}
  
                
                {/* <a className="text-gray-500 transition hover:text-gray-500/75" href="#ourProducts"> Products </a> */}
              </li>);
          }
        )}
            {/* <Link href={'/profile'} className="dropdown_link" 
            onClick={()=>settoggleDropDown(false)}>my profile</Link>
            <Link href={'/create-prompt'} className="dropdown_link" 
            onClick={()=>settoggleDropDown(false)}>create prompt</Link>
            <button className="black_btn w-full mt-5" 
            onClick={()=>{settoggleDropDown(false);
            signOut}
            }>Sign Out</button> */}
           </div>)}
    </div>
    </div>
  )
}

export default MobileNav