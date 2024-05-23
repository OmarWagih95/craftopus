'use client'
import ProductList from '@/app/_components/ProductList';
import ProductsApi from '@/app/_utils/ProductsApi';
import React, { useState,useEffect } from 'react'

function page({params}) {
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
      {/* <ProductList productList={productList}/> */}
      <h1 className='mt-20 mb-8 text-white font-bold text-xl lg:text-2xl mb-3'>
        {params.categoryName}
      </h1>
      <ProductList productList={categoryProductsData}/>
      </div>
    </div>
  )
}

export default page