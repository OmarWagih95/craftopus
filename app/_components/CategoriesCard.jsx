import React from 'react'
import Image from 'next/image'
import { FiAlignJustify } from "react-icons/fi";
import Link from 'next/link';
import { FaArrowAltCircleRight } from "react-icons/fa";


function CategoriesCard({category}) {
  console.log(category.categoryID)
    return (
        <Link href={`/Category-products/${category.categoryID}`}><div className='rounded-t-lg px-1 py-1 bg-gray-800 h-[350px] hover:border-2 border-purple-600 '>
        <Image alt={''} width={400} height={400} className='h-[240px] object-cover'  src={category.image}/>
        <div className='flex-col text-white p-2  items-center text-center justify-center'>
        <div className='flex flex-col justify-center items-center'>
          <h2  className='mb-3 font-semibold text-lg '>
          {category.categoryName}
            </h2>
            {/* <p className='mb-3 text-gray-400'>
            {category.attributes.description}
            </p> */}
            <FaArrowAltCircleRight  className=' size-6 text-purple-600' />


       {/* <div className='items-center justify-center text-center'>
       <FiAlignJustify color='#7D7C7C'/>
       
       <h2 className='text-gray-400'>{category.attributes.category}</h2>
       </div> */}
            {/* <h2 className='text-gray-300'>{product.attributes.description[0].children[0].text}</h2> */}
            </div>
            {/* <h2 className='text-gray-200 font-bold'>${category.attributes.price}</h2> */}
       
        </div>
       </div></Link>
         )
}

export default CategoriesCard