'useClient'
import React from 'react'
import { useContext } from 'react';
import { cartContext } from '../_context/CartContext';
import CartItem from './CartItem';
import Link from 'next/link';
var total;

function SideCart(params) {
  const {cart,setCart}=useContext(cartContext);

  return (
<div
  className="absolute min-h-screen h-auto top-14 right-0 w-screen max-w-xs border border-purple-600 bg-gray-800 px-4 py-8 sm:px-6 lg:px-8"
  aria-modal="true"
  role="dialog"
  tabIndex="-1"
>
  <button onClick={()=>params.setSideCart(false)} className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
    <span className="sr-only">Close cart</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>

  <div className="mt-4 space-y-6">
    <ul className="space-y-4">
      
      {cart.map(item=>{
        // total+=item.quantity*item.price;
        // console.log(total)
        return <CartItem item={item}/>
      }
      
      )
    }
      {/* <li className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
          alt=""
          className="size-16 rounded object-cover"
        />

        <div>
          <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">Size:</dt>
              <dd className="inline">XXS</dd>
            </div>

            <div>
              <dt className="inline">Color:</dt>
              <dd className="inline">White</dd>
            </div>
          </dl>
        </div>
      </li>

 

      <li className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
          alt=""
          className="size-16 rounded object-cover"
        />

        <div>
          <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">Size:</dt>
              <dd className="inline">XXS</dd>
            </div>

            <div>
              <dt className="inline">Color:</dt>
              <dd className="inline">White</dd>
            </div>
          </dl>
        </div>
      </li> */}
    </ul>

    <div className="space-y-4 text-center">
      <Link
        href="/Cart"
        onClick={()=>params.setSideCart(false)}
        className="block rounded border border-purple-600 px-5 py-3 text-sm text-purple-600 transition hover:ring-1 hover:ring-purple-400"
      >
        View my cart ({cart.length})
      </Link>

      <Link
        href="/Cart/Checkout"
        onClick={()=>params.setSideCart(false)}
        className="block rounded bg-purple-800 px-5 py-3 text-sm text-gray-100 transition hover:bg-purple-600"
      >
        Checkout
      </Link>

      <Link onClick={()=>params.setSideCart(false)}
        href="#"
        className="inline-block text-sm text-purple-700 underline underline-offset-4 transition hover:text-purple-600"
      >
        Continue shopping
      </Link>
    </div>
  </div>
</div>  )
}   

export default SideCart