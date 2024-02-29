'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductsApi from '../_utils/ProductsApi'

function ProductSection() {
  const[productList,setProductList]=useState([]);
    useEffect(()=>{
        getLatestProducts_();
    },[])
    const getLatestProducts_ = async()=> await ProductsApi.getLatestProducts().then(response=>{
      console.log(response.data.data);
      setProductList(response.data.data);
  })
    
  return (
    <div className='bg-gray-900'><ProductList productList={productList}/></div>
  )
}

export default ProductSection