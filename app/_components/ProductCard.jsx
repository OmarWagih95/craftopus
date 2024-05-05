import React from 'react'
import Image from 'next/image'
import { FiAlignJustify } from "react-icons/fi";
import Link from 'next/link';
import axiosClient from '../_utils/axiosClient';

function ProductCard({product}) {
  return (
 <Link href={`/Product-details/${product.id}`}><div className='rounded-t-lg px-1 py-1 bg-gray-800 hover:border-2 border-purple-600 '>
 <Image alt={''} width={400} height={400} className='h-[240px] object-cover'  src={product.attributes.banner.data.attributes.url}/>
 <div className='flex text-white p-2 justify-between items-center'>
 <div>
   <h2 className='font-semibold text-lg '>
   {product.attributes.productName}
     </h2>
<div className='flex items-center'>
<FiAlignJustify color='#7D7C7C'/>

<h2 className='text-gray-400'>{product.attributes.category}</h2>
</div>
     {/* <h2 className='text-gray-300'>{product.attributes.description[0].children[0].text}</h2> */}
     </div>
     <h2 className='text-gray-200 font-bold'>${product.attributes.price}</h2>

 </div>
</div></Link>
  )
}

export default ProductCard