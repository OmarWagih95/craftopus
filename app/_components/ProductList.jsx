import React from 'react'
import ProductCard from './ProductCard'

function ProductList({productList}) {
  console.log(productList)
  return (
    <div className='min-h-screen h-auto px-3 lg:px-16 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9 '>
      {productList.map(item=>
        
        <ProductCard product={item} key={item.id}/>
        )}
    </div>
  )
}

export default ProductList