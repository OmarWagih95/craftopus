'use client'
import BreadCrumb from '@/app/Category-products/components/BreadCrumb';
import ProductList from '@/app/_components/ProductList';
import ProductsApi from '@/app/_utils/ProductsApi';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState,useEffect } from 'react'
import products from '@/app/_utils/products';
import Categories from '@/app/_utils/Categories';
import axios from 'axios';
import CategoriesListSkeleton from '@/app/_components/CartsListSkeleton';
import CartsListSkeleton from '@/app/_components/CartsListSkeleton';

function page({params}) {
  const router = useRouter()
  console.log(params)
  console.log(params.category[0])
  const categoryID=params.category[0];
  const categoryName=params.category[1];
  // const { category, categoryID } = router.query;
  // console.log(category, categoryID)
  // console.log(params.categoryID);
  // console.log(params.category);
  const [categoryProducts,setcategoryProducts]=useState([]);
  const fetchCategoryProducts = async () => {
    const res =await axios('/api/products',{
      params:{categoryID:categoryID}})
    // const res =await axios('/api/categories2')
    // if(res.data.json().ok){
  
    setcategoryProducts(res.data);
      console.log(res);
    
    // }
  }
  useEffect(() => {
    fetchCategoryProducts();
  }, [])

  // const category=Categories.find((element)=>{
  //   return element.categoryID==params.categoryName
  // })
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
  const path=usePathname()

    // console.log(`categoryName ${params.categoryName}`);
    // console.log(`category ${params.categoryID}`);
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
  <BreadCrumb  path={path} categorName={categoryName} />
 </div>
      {/* <ProductList productList={productList}/> */}
      <h1 className='mt-6 lg:mb-8 text-white font-bold text-xl lg:text-2xl mb-3'>
        {categoryName}
        {/* {categoryName.split('%')[0]} */}
      </h1>
      {categoryProducts[0]?
        <ProductList productList={categoryProducts} categoryID={categoryID} />:
        <CartsListSkeleton width={230} height={300}/>
      }
      </div>
    </div>
  )
}

export default page