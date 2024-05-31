'use client'
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { cartContext } from '@/app/_context/CartContext';

function BigCartItem({item,index}) {
  function deleteCartItem(id){
    console.log(id);
    const newCart =cart.filter((item)=>item.productID !== id);
    // console.log(newCart.length);
    setCart(newCart);
  }

  function addItemQuantity (id) {
    console.log(id);
    const newCartQuantity =cart.filter((item)=>
      item.productID === id ?
      {...item,quantity : item.quantity+=1}
    :1

)
setCart(newCartQuantity);


  }
  function removeItemQuantity(id){
    const newCartQuantity =cart.filter((item)=>
      item.productID === id ? {...item, quantity:item.quantity-=1}
    :item)
    setCart(newCartQuantity);

  }
  
  const{cart,setCart}=useContext(cartContext);
  console.log(index);
    const [productQuantity,setProductQuantiity]=useState(item.quantity);

  return (
    <li className="flex items-center gap-4">
    <img
      src={item.imgUrl}
      alt=""
      className="size-16 rounded object-cover"
    />

    <div>
      <h3 className="text-sm text-gray-200">{item.title}</h3>

      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
        <div>
        <dt className="inline">Quantity:</dt>
          <dd className="inline">{item.quantity}</dd>
        </div>

        <div>
        <dt className="inline">Price:</dt>
          <dd className="inline">{item.price}</dd>
        </div>
      </dl>
    </div>

    <div className="flex flex-1 items-center justify-end gap-2">
    <div className='flex justify-start gap-4 items-center text-white'>
  <button onClick={()=>{
    if(productQuantity>0){
      setProductQuantiity(productQuantity-1)
      removeItemQuantity(item.productID)
    }

  }} className='bg-purple-800  hover:bg-purple-600 flex justify-center items-center rounded-md py-1 px-3 text-lg'>-</button>
  {item.quantity}

  <button onClick={()=>{
    console.log(item.productID)
    setProductQuantiity(productQuantity+1);
    addItemQuantity(item.productID)
  }} className='bg-purple-800  hover:bg-purple-600 flex justify-center items-center rounded-md py-1 px-3 text-lg'>+</button>
</div>

      <button onClick={()=>{
        deleteCartItem(item.productID)
      }} className="text-gray-600 transition hover:text-red-600">
        <span className="sr-only">Remove item</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
  </li>
  )
}

export default BigCartItem