import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FiAlignJustify } from "react-icons/fi";
import Link from 'next/link';
import axios from 'axios';

function ProductCard({product}) {
  const [category,setCategory]=useState()
  console.log(product.categoryID)
  const getCategoryDataByID=async (categoryID)=>{
    console.log(product.categoryID)
 const res = await axios('api/categories',{
        params:{categoryID: categoryID}
      })
      setCategory(res.data);
      // console.log(category.categoryName);

  }
  useEffect(() => {
  getCategoryDataByID(product.categoryID);
  
  
  }, [])
  
  return (
 <Link href={`/Product-details/${product._id}`}>
  <div  className='h-[300px] justify-between rounded-t-lg px-1 py-1 bg-gray-800 hover:border-2 border-purple-600 '>
 <Image alt={product.id} width={400} height={240} className='h-[180px] object-cover' 
  src={product.imagesUrl[0]}/>
  {/* productData.attributes?.banner.data[currentIndex].attributes.url */}
 <div className='flex flex-col h-[120px]  text-white p-2 justify-between'>
 <div className='flex flex-col h-[90px] justify-between '>
   <h2 className='font-semibold text-lg '>
   {product.productName}
     </h2>
<div className='flex items-center'>
<FiAlignJustify color='#7D7C7C'/>

<h2 className='text-gray-400 text-sm lg:text-md/[10px]'>
  {/* {category.categoryName} */}
  </h2>

</div>
{/* <h2 className='text-xs md:text-md text-gray-500'>
  {product.attributes.description}
</h2> */}
     {/* <h2 className='text-gray-300'>{product.attributes.description[0].children[0].text}</h2> */}
     <h2 className='text-gray-200 font-bold'>${product.price}</h2>
     </div>
     <div className='flex justify-center mb-4'>
      <p className='text-purple-700 text-center underline hover:text-purple-600' >more details</p>

     </div>

 </div>
</div></Link>
  )
}

export default ProductCard