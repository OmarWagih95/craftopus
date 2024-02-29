'use client'
import BreadCumber from '@/app/_components/BreadCumber';
import ProductsApi from '@/app/_utils/ProductsApi';
import React, {useEffect,useState} from 'react'
import ProductBanner from '../_components/ProductBanner';
import ProductInfo from '../_components/ProductInfo';
import { usePathname } from 'next/navigation';

function page({params}) {
const path = usePathname()
  console.log(params.id);
  const[productData,setProductData]=useState({});
  useEffect(() => {
    getProductById_();
  }, [params.id]); 
      const getProductById_ =async()=>await ProductsApi.getProductByID(params.id).
      then(
        response=>{console.log(response.data.data);
      setProductData(response.data.data)
    }
      )
      console.log(productData.attributes?.images.data[0].attributes.url);
  return (
    <div className='px-10 py-6 md:px-20 md:py-6 bg-gray-900 justify-items-center' >
      <BreadCumber path={path}/>
      <div className='px-20 grid gap-4 sm:gap-5 grid-cols-1  sm:grid-cols-2 py-6 justify-around'>
        <ProductBanner bannerURL={productData.attributes?.images.data[0].attributes.url}/> 
       <ProductInfo product={productData}/>
      </div>

    </div>
  )
}

export default page