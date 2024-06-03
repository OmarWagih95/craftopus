'use client'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { cartContext } from '../../_context/CartContext'
import BigCartItem from '../_components/BigCartItem'
import Link from 'next/link'
import CartApi from '@/app/_utils/CartApi'
import Swal from 'sweetalert2'
import 'react-toastify/dist/ReactToastify.css';
import { Router } from 'next/router'
import { useRouter } from 'next/navigation'
import validation from '@/app/_utils/Validation'



function page() {
  const router = useRouter()
  const [errors,setErrors]=useState({})
  const [value,setValue] =useState(
    {
      name:'',
      address:'',
      whatsappNumber:'',
      notes:'',
    }
  )
  const[submit,setSubmit]=useState(false);
  const[data,setData]=useState(false);
  useEffect(() => {
    if(Object.keys(errors).length===0 && data){
      setSubmit(true);
    }
  

  }, [errors])
  
  const handleOnChange=(e)=>{
    setValue(
      {
        ...value, [e.target.name]:e.target.value
      }
    )
    // name=e.target.value
  }

  // var name;
  // var address;
  // var whatsappNumber;
  // var notes;
    var total=0;
    const{cart,setCart}=useContext(cartContext)
  const confirmOrder_= ()=>{
    const data={
      data:{

        Name:value.name,
        total:total,
        products:{products:cart},
        whatsappNumber:value.whatsappNumber,
        notes:value.notes,
        address:value.address,
        deposite:total*0.4
      }
    };
        Swal.fire({
      background:'#1F2937',
      color:'white',
      toast:true,
      iconColor:'#7E22CE',
    position: "center",
    icon: "success",
    title: "your order request has been sent wait for confirmation on whatsapp soon",
    showConfirmButton: false,
    timer: 4000
  })
  router.push('/#ourCategories');
  //  CartApi.confirmOrder(data).then((res) =>{
  //   console.log('success');
  //   setCart([])
  //    Swal.fire({
  //     background:'#1F2937',
  //     color:'white',
  //     toast:true,
  //     iconColor:'#7E22CE',
  //   position: "center",
  //   icon: "success",
  //   title: "your order request has been sent wait for confirmation on whatsapp soon",
  //   showConfirmButton: false,
  //   timer: 4000
  // })
  // router.push('/#ourCategories');
  // })
  }


  return (
    <div className=' w-screen lg:justify-end  bg-gray-900  flex max-lg:flex-col-reverse   justify-center items-start h-auto '>
      
   
<form 
on onSubmit={(e)=>{e.preventDefault();
   setErrors(validation(value))
   setData(true);
   console.log(Object.keys(errors));
  if(submit){
    console.log('length sh8aal');
    confirmOrder_();
  }

}}
// onSubmit={async()=>{
//   console.log('clicked');
//     var data={
//       data:{

//         name:name,
//         total:total,
//         // products:{products:cart},
//         whatsappNumber:whatsappNumber,
//         notes:notes,
//         address:address
//       }
//     }
//   await  CartApi.confirmOrder(data).then(res=>{console.log('success')}).catch(error=>{
// console.log('error'+ error);
//     });
// }}
 class="  flex flex-col w-full  h-auto  items-start justify-center ">
    <div class="w-full p-12 lg:px-20 flex flex-col h-auto  m-auto mt-10 bg-white rounded-lg shadow dark:bg-white justify-start">
        <div class="mb-6 text-3xl font-light text-start text-gray-800 dark:text-gray-800">
            Order Confirmation
        </div>
        <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div class="col-span-2 lg:col-span-1">
                <div class=" flex-col relative ">
                    <p className='text-sm text-gray-500'>Name*</p>
                    <input
                    value={value.name}
                    onChange={handleOnChange
                    } name='name' type="text" id="name" className={`rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent
                    ${errors.name? 'border border-red-500':''}`} placeholder="Name"/>
                    {errors.name && <p className='text-xs text-red-500'>{errors.name}</p>}
                    </div>
                </div>
                <div class="col-span-2 lg:col-span-1">
                    <div class=" flex-col relative ">
                    <p className='text-sm  text-gray-500'>whatsapp number*</p>

                        <input
                        onChange={
                          handleOnChange
                      }
                       name='whatsappNumber' type="text" id="contact-form-email" className={` rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-gray
                       ${errors.name? 'border border-red-500':''}`} placeholder="whatsapp number"/>
                                           {errors.whatsappNumber && <p className='text-xs text-red-500'>{errors.whatsappNumber}</p>}

                        </div>
                    </div>
                    <div class=" col-span-2">
                        <label class="text-gray-700" for="name">
                            <p className='text-sm  text-gray-500'>Address</p>
                            <textarea onChange={handleOnChange
                            } 
                            className={`flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent 
                            ${errors.address? 'border border-red-500':''}
                            `} id="Address" placeholder="Please enter you address" name="address" rows="3" cols="40">
                            </textarea>
                            {errors.address && <p className='text-xs text-red-500'>{errors.address}</p>}

                        </label>
                    </div>
                    <div class=" col-span-2">
                        <label class="text-gray-700" for="name">
                            <p className='text-sm  text-gray-500'>Notes</p>
                            <textarea 
                            onChange={handleOnChange}
                            class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="Notes" placeholder="if there's any special requests" name="notes" rows="2" cols="40">
                            </textarea>
                        </label>
                    </div>
                    <div class="col-span-2 text-end pl-32 lg:pl-56">
                        <button 
                        // onClick={()=>{confirmOrder_();}} 
                        type="submit" class="py-2 px-4  bg-purple-800 hover:bg-purple-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Confirm Order
                        </button>
                    </div>
                </div>
            </div>
        </form>
        <div className=' bg-gray-900 w-full h-auto lg:h-screen   justify-center items-start mt-32 p-10'>
            <h1 className='text-white font-bold'>Order Summary</h1>
            
      <div className="mt-8">
        <ul className="space-y-4">
        {cart.map((item,index)=>{
          total += item.price * item.quantity;
        // total+=item.quantity*item.price;
        // console.log(total)
        return <BigCartItem item={item} index={index} />
      }
      
      )
    }
 
        </ul>
        <dl className="space-y-0.5 text-sm text-gray-700">





<div className="flex my-7 text-gray-400 justify-between !text-base font-medium">
  <dt>Shipping</dt>
  <dd>'ll be discussed later on whatsapp</dd>
</div>
</dl>

        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
          <div className="w-screen max-w-lg space-y-4">
  
            <dl className="space-y-0.5 text-sm text-gray-700">





              <div className="flex text-gray-400 justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>EGP {total} + shipping</dd>
              </div>
            </dl>
            <dl className="space-y-0.5 text-sm text-gray-700">





<div className="flex text-gray-400 justify-between !text-base font-medium">
  <dt>Deposite</dt>
  <dd>EGP {total*0.4}</dd>
</div>
</dl>

            {/* <div className="flex justify-end">
              <span
                className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="-ms-1 me-1.5 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>

                <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
              </span>
            </div> */}

            <div className="flex justify-end">
              {/* <Link
                href="/Cart/Checkout"
                className="block rounded bg-purple-800 px-5 py-3 text-sm text-gray-100 transition hover:bg-purple-600"
              >
                Checkout
              </Link> */}
            </div>
          </div>
        </div>
      </div>
        </div>
       
   

    </div>
  )
}

export default page