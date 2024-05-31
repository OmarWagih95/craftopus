'use client'
import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import SkeletonProductInfo from './SkeletonProductInfo';
import { useState } from 'react';
import { cartContext } from '@/app/_context/CartContext';
import AddingProductAlert from './AddingProductAlert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import { FaGift } from 'react-icons/fa6';



function ProductInfo(params) {
  const [productQuantity,setProductQuantiity]=useState(0);
  const {cart,setCart}=useContext(cartContext);

  // console.log(params.product.attributes?.description[0].children[0].text)
  console.log(`${params.product.id} hna`);
  return (
    params.product.attributes?
    <div className='text-white items-center justify-items-center justify-center'>
      <h2 className='font-bold text-[20px] justify-items-center'>{params.product.attributes?.productName}</h2>
      <h2 className='text-gray-400 text-[16px]'>{params.product.attributes.category.data.attributes.categoryName}</h2>
      <h2 className='mt-5 font-light'>{params.product.attributes?.description}</h2>
      <h2 className='text-white text-[26px] font-bold'>{params.product.attributes?.price} <span className='text-purple-700'>$</span>
</h2>
{/* <div className='grid  justify-items-center'> */}
<div className='flex flex-row lg:flex-col items-start justify-between'>


<div className='flex justify-start gap-4 items-center'>
  <button onClick={()=>{
    if(productQuantity>0){
      setProductQuantiity(productQuantity-1)
    }
  }} className='bg-purple-800  hover:bg-purple-600 flex justify-center items-center rounded-md py-1 px-3 text-lg'>-</button>
  {productQuantity}

  <button onClick={()=>{
    setProductQuantiity(productQuantity+1);
  }} className='bg-purple-800  hover:bg-purple-600 flex justify-center items-center rounded-md py-1 px-3 text-lg'>+</button>
</div>
<div className='flex items-center justify-center relative '>

<button onClick={()=>{
  if(productQuantity>0){
      setCart(oldCart=>[...oldCart,{
        
        title:params.product.attributes?.productName,
        imgUrl:params.product.attributes?.banner.data[0].attributes.url,
        productID:params.product.id,
        quantity:productQuantity,
        price:params.product.attributes?.price
      }])
      console.log('done adding succesfully');
      // toast("your product added to cart successfully");
    Swal.fire({
      background:'#1F2937',
      color:'white',
      toast:true,
      iconColor:'#7E22CE',
    position: "center",
    icon: "success",
    title: "your gift has been added to your gift box",
    showConfirmButton: false,
    timer: 2500
  }
)
  
    }
}} className='flex gap-3 absolute -left-36 -top-1 lg:mt-5 rounded-lg items-center bg-purple-800 px-3 py-3 hover:bg-purple-600'><FaShoppingCart /> add to cart</button>
</div>
</div>

{/* <ToastContainer /> */}
{

}
{/* </div> */}
    </div>
    :
    <SkeletonProductInfo/>
  )
}

export default ProductInfo