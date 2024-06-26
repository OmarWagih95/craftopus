'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState,useContext } from "react";
import {cartContext } from "./_context/CartContext";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [appearWhats,setAppearWhats]=useState(false);
  const appearWhatsApp=()=>{
    if(window.scrollY>=250 && window.scrollY<=2500 ){
      setAppearWhats(true);
    }
    // else if(window.scroll-Y>=200)
    //   {setAppearWhats(false);}
    else{
      setAppearWhats(false)
    }
  }

  if (typeof window !== "undefined") {
    // Client-side-only code
    window.addEventListener('scroll',appearWhatsApp);
  }
  const [cart,setCart]=useState([]);
  return (
    <cartContext.Provider value={{cart,setCart}}>

   
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
       {

      appearWhats && <Link target='-blank' href="https://wa.me/201157048957?text=hello craftopus i want to ask about these products:" className=" mt-72 flex bg-transparent fixed bottom-8 left-4">

        <Image className="flex" src={'/icons/whatsoppa.png'} width={40} height={40}></Image>
        </Link>
       }

        <Footer></Footer>
        </body>

    </html>
    </cartContext.Provider>
  );
}
