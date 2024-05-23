'use client';
import React from 'react'

import Nav from './Nav';
import MobileNav from './MobileNav';



function Header() {
  return (
    <header className="fixed z-10 w-screen bg-gray-900  text-white shadow-md">
      {/* //desktop Nav */}
 <Nav></Nav>
 {/* small devices */}
 <MobileNav/>
  </header>
  )
}

export default Header