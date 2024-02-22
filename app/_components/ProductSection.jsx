'use client'
import React, { useEffect, useLayoutEffect } from 'react'
import ProductList from './ProductList'
import ProductsApi from '../_utils/ProductsApi'

function ProductSection() {
    useEffect(()=>{
        getLatestProducts_();
    },[])
    const getLatestProducts_ =()=> ProductsApi.getLatestProducts().then(response=>{console.log(response.data.data);
  })
    
  return (
    <div><ProductList/></div>
  )
}

export default ProductSection