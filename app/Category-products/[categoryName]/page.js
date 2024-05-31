'use client'
import BreadCrumb from '@/app/Category-products/components/BreadCrumb';
import ProductList from '@/app/_components/ProductList';
import ProductsApi from '@/app/_utils/ProductsApi';
import { usePathname } from 'next/navigation';
import React, { useState,useEffect } from 'react'

function page({params}) {
  const path=usePathname()

    console.log(`category ${params.categoryName}`);
    const [categoryProductsData,setCategoryProductsData]=useState([]);
   try{
    useEffect(() => {
      getCategoryProductsData_();
    }, [params.categoryName]); 
  const getCategoryProductsData_=async()=>await
  ProductsApi.getCategoryProducts(params.categoryName)
   .then(
      response=>{
        
        console.log(response.data.data);
          setCategoryProductsData(response.data.data);
          console.log('done');
        }
  )
   }
   catch(e){
    console.log(`error ${e}`);
   } 
    
  return (
    <div className='h-auto bg-blue-400'>

<div id='categoryProductData' className='flex flex-col items-center p-3  bg-gray-900 h-auto'>
 <div className='flex px-10 lg:px-20 mt-20 justify-start w-screen'>
  
  <BreadCrumb  path={path} categorName={params.categoryName} />
 </div>
      {/* <ProductList productList={productList}/> */}
      <h1 className='mt-6 lg:mb-8 text-white font-bold text-xl lg:text-2xl mb-3'>
        {params.categoryName}
      </h1>
      <ProductList productList={categoryProductsData}/>
      </div>
    </div>
  )
}

export default page