import React from 'react'
import Image from 'next/image'

function ProductBanner(params) {
    console.log(params.bannerURL);
    // console.log(params.product.attributes.images.data[0].attributes.url);
  return (
      params.bannerURL?
    <div className='rounded-lg'>
        <Image alt='productBanner' width={400} height={400} src={params.bannerURL}></Image>
    </div>
       : <div className='w-[400px] h-[360px] bg-gray-400 rounded-lg animate-pulse'></div>
    
  )
}

export default ProductBanner