'use client'
import BreadCrumb from '@/app/Category-products/components/BreadCrumb';
import ProductList from '@/app/_components/ProductList';
import ProductsApi from '@/app/_utils/ProductsApi';
import { usePathname } from 'next/navigation';
import React, { useState,useEffect } from 'react'
import products from '@/app/_utils/products';
import Categories from '@/app/_utils/Categories';

function page({params}) {
  console.log(params.categoryName);
  const category=Categories.find((element)=>{
    return element.categoryID==params.categoryName
  })
// const list=[];
//   const productList=products.map((element)=>{
//     console.log(params.categoryName);
//     console.log(element.categoryID);
//     if(element.categoryID===params.categoryName){
//       list.concat(element);
//     }
//     console.log(list.length);
//     return list ;
//   }
// )
  console.log(category.categoryID);
  const path=usePathname()

    console.log(`categoryName ${params.categoryName}`);
    console.log(`category ${params.categoryID}`);
  //   const [categoryProductsData,setCategoryProductsData]=useState([]);
  //  try{
  //   useEffect(() => {
  //     getCategoryProductsData_();
  //   }, [params.categoryName]); 
  // const getCategoryProductsData_=async()=>await
  // ProductsApi.getCategoryProducts(params.categoryName)
  //  .then(
  //     response=>{
        
  //       console.log(response.data.data);
  //         setCategoryProductsData(response.data.data);
  //         console.log('done');
  //       }
  // )
  //  }
  //  catch(e){
  //   console.log(`error ${e}`);
  //  } 
    
  return (
    <div className='h-auto bg-blue-400'>

<div id='categoryProductData' className='flex flex-col items-center p-3  bg-gray-900 h-auto'>
 <div className='flex px-10 lg:px-20 mt-20 justify-start w-screen'>
  
  {/* <BreadCrumb  path={path} categorName={params.categoryName.split('%')[0]} /> */}
  <BreadCrumb  path={path} categorName={category.categoryName.split('%')[0]} />
 </div>
      {/* <ProductList productList={productList}/> */}
      <h1 className='mt-6 lg:mb-8 text-white font-bold text-xl lg:text-2xl mb-3'>
        {category.categoryName.split('%')[0]}
      </h1>
      <ProductList productList={products} categoryID={category.categoryID}/>
      </div>
    </div>
  )
}

export default page