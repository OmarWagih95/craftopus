'use client'
import BreadCrumb from '../_components/BreadCrumb';
import ProductsApi from '@/app/_utils/ProductsApi';
import React, {useEffect,useState} from 'react'
import ProductBanner from '../_components/ProductBanner';
import ProductInfo from '../_components/ProductInfo';
import { usePathname } from 'next/navigation';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";




function page({params}) {
const path = usePathname()
  console.log(params.id);
  const[productData,setProductData]=useState({});
  const [currentIndex,setCurrentIndex]=useState(0);
  useEffect(() => {
    getProductById_();
  }, [params.id]); 
      const getProductById_ =async()=>await ProductsApi.getProductByID(params.id).
      then(
        response=>{console.log(response.data.data);
      setProductData(response.data.data)
    }
      )
      // console.log(productData.attributes?.images.data[0].attributes.url);
  return (
    <div className='px-4 lg:px-20 pt-6 lg:pt-6 md:px-20 md:py-6 bg-gray-900 justify-items-center min-h-screen h-auto' >
      <BreadCrumb  path={path} 
      categorName={productData.attributes?.category.data.attributes.categoryName} 
      productName={productData.attributes?.productName}
      />
      <div className='lg:px-20 grid py-7  gap-4 sm:gap-5 grid-cols-1  lg:grid-cols-2  justify-around'>
      <div className='flex flex-col'>
       <div className='flex items-center justify-center'>

       <FaAngleLeft  onClick={()=>{
        if(currentIndex>0){

          setCurrentIndex(currentIndex-1);
        }

       }} className='m-3 text-purple-800 hover:text-purple-600' size={40}   />

        {/* <ProductBanner bannerURL={productData.attributes?.banner.data.attributes.url}/>  */}
        <ProductBanner bannerURL={productData.attributes?.banner.data[currentIndex].attributes.url}/> 
        <FaAngleRight onClick={()=>{
          console.log(productData.attributes?.banner.data.length)
if(currentIndex<(productData.attributes?.banner.data.length)-1){

  setCurrentIndex(currentIndex+1)
}
        }}  className='m-3 text-purple-800 hover:text-purple-600' size={40} />

       
       </div>
          <div className='flex gap-2 mt-2 justify-center items-center'>
            {(()=>{
              const circliImages =[];
              for(let i=0; i<productData.attributes?.banner.data.length;i++){
              console.log(i);
            circliImages.push(
              <FaCircle key={i} size={10} className= {`${currentIndex==i?'text-purple-600 size-4':'text-gray-400'} `}/>

            )   
            }
            return circliImages;})()}
          </div>
      </div>
       <ProductInfo product={productData}/>
      </div>

    </div>
  )
}

export default page