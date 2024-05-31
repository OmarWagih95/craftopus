'use client';
import React, { useState } from 'react'

import Nav from './Nav';
import MobileNav from './MobileNav';
import { cartContext } from '../_context/CartContext';
import { useContext } from 'react';
import { FaGift } from "react-icons/fa6";
import SideCart from './sideCart';




function Header() {
  const {cart,setCart}=useContext(cartContext);
  const[sideCart,setSideCart]=useState(false);

  return (
    <header className="fixed max-h-14 flex justify-center items-center z-10 w-screen bg-gray-900  text-white shadow-md">
      {/* //desktop Nav */}
 <Nav className=''></Nav>
 {/* small devices */}
 <MobileNav/>
 <div onClick={()=>{
  setSideCart(!sideCart);
 }} className='relative flex  items-center rounded-lg  mr-4 px-3 py-2 bg-gray-800 text-gray-500 cursor-pointer md:mr-8'>
            {/* <FaShoppingCart size={20} /> */}
            <FaGift size={20} />

            <div className='w-6 h-6 flex justify-center items-center absolute rounded-xl -bottom-2 -right-2 bg-purple-700 text-white text-sm'>{cart.length}</div>
            {/* <h2 className= 'text-gray-500'>{cart.length}</h2> */}
          </div>
          {sideCart && <SideCart setSideCart={setSideCart}/>}

  </header>
  )
}

export default Header