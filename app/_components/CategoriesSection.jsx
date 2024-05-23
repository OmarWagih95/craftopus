'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductsApi from '../_utils/ProductsApi'
import CategoriesList from './CategoriesList';
import Link from 'next/link';
import Image from 'next/image';

function CategoriesSection() {
  const[categoriesList,setCategoriesList]=useState([]);
    useEffect(()=>{
        getCategories_();
    },[])
    const getCategories_ = async()=> await ProductsApi.getCategories().then(response=>{
      console.log(response.data.data);
      setCategoriesList(response.data.data);
  })
    
  return (
    <div id='ourCategories' className='flex relative flex-col items-center p-3  bg-gray-900  min-h-screen h-auto'>
      {/* <ProductList productList={productList}/> */}
      <h1 className='text-white font-bold text-xl lg:text-2xl mb-3'>
        Categories
      </h1>
      <CategoriesList categoriesList={categoriesList}/>
      {/* <Link target='-blank' href="https://wa.me/201157048957" className=" sticky top-80">
        <Image  className=" sticky left-10" src={'/icons/whats.png'} width={60} height={60}></Image>

        </Link> */}
      </div>
  )
}

export default CategoriesSection