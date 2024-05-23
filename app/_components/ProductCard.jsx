import React from 'react'
import Image from 'next/image'
import { FiAlignJustify } from "react-icons/fi";
import Link from 'next/link';
import axiosClient from '../_utils/axiosClient';

function ProductCard({product}) {
  return (
 <Link href={`/Product-details/${product.id}`}>
  <div  className='h-[400px] justify-between rounded-t-lg px-1 py-1 bg-gray-800 hover:border-2 border-purple-600 '>
 <Image alt={product.id} width={400} height={240} className='h-[240px] object-cover'  src={product.attributes.banner.data.attributes.url}/>
 <div className='flex flex-col h-[160px]  text-white p-2 justify-between'>
 <div className='flex flex-col h-[90px] justify-between '>
   <h2 className='font-semibold text-lg '>
   {product.attributes.productName}
     </h2>
<div className='flex items-center'>
<FiAlignJustify color='#7D7C7C'/>

<h2 className='text-gray-400 text-sm lg:text-md/[10px]'>{product.attributes.category.data.attributes.categoryName}</h2>
</div>
{/* <h2 className='text-xs md:text-md text-gray-500'>
  {product.attributes.description}
</h2> */}
     {/* <h2 className='text-gray-300'>{product.attributes.description[0].children[0].text}</h2> */}
     <h2 className='text-gray-200 font-bold'>${product.attributes.price}</h2>
     </div>
     <div className='flex justify-center mb-4'>
      <p className='text-purple-700 text-center underline hover:text-purple-600' >more details</p>

     </div>

 </div>
</div></Link>
  )
}

export default ProductCard