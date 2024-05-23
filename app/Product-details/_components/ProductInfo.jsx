import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import SkeletonProductInfo from './SkeletonProductInfo';


function ProductInfo(params) {
  // console.log(params.product.attributes?.description[0].children[0].text)
  console.log(`${params.product.attributes?.description} hna`);
  return (
    params.product.attributes?
    <div className='text-white items-center justify-items-center justify-center'>
      <h2 className='font-bold text-[20px] justify-items-center'>{params.product.attributes?.productName}</h2>
      <h2 className='text-gray-400 text-[16px]'>{params.product.attributes.category.data.attributes.categoryName}</h2>
      <h2 className='mt-5 font-light'>{params.product.attributes?.description}</h2>
      <h2 className='text-white text-[26px] font-bold'>{params.product.attributes?.price} <span className='text-purple-700'>$</span>
</h2>
{/* <div className='grid  justify-items-center'> */}

<button className='flex gap-3 mt-5 rounded-lg items-center bg-purple-800 px-3 py-3 hover:bg-purple-600'><FaShoppingCart /> add to cart</button>
{/* </div> */}
    </div>
    :
    <SkeletonProductInfo/>
  )
}

export default ProductInfo