import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp,FaInstagram,FaFacebook } from "react-icons/fa";


function Footer() {
  return (
    
<footer id='contactUS' className="bg-white dark:bg-gray-900 w-full h-[90vh] py-8">
    <div className="max-w-screen-xl px-4 mx-auto">
        <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
            <li className="my-2">
                <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                    Facebook
                </a>
            </li>
            <li className="my-2">
                <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                    Instagram
                </a>
            </li>
            {/* <li class="my-2">
                <a class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                    Github
                </a>
            </li> */}
            <li className="my-2">
                <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                    Whatsapp
                </a>
            </li>
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
            <Link target='_blank' href="https://www.facebook.com/profile.php?id=61554952284905" class="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
            <FaFacebook color='gray' size={35} >

</FaFacebook>
            </Link>
            <Link target='-blank' href="https://www.instagram.com/craftopustore?fbclid=IwZXh0bgNhZW0CMTAAAR2SpIzPqITSlWWwsNErRsmispFBmR6FkY5d0_uaeS-5jejYG9QN4FUacIc_aem_Af6E7Vjr26w1RRZDpKJi6HjeXXM-NK2PXjqukc0s7pPO3aIAY1PJW0wfOycOb1aNtIj97M3Xb9X2uDYiF5A8cDzk" class="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
            <FaInstagram color='gray' size={35} >

</FaInstagram>
            </Link>
            <Link target='-blank' href="https://wa.me/201157048957" class="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
     <FaWhatsapp color='gray' size={35} >

     </FaWhatsapp>
            </Link>

  
  
        </div>
        <div class="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
            this website is created with all passion by developer/omar wagih
        </div>
    </div>
</footer>

  )
}

export default Footer