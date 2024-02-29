import React from 'react'
import ProductCard from './ProductCard'

function ProductList({productList}) {
  return (
    <div className='px-16 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9 '>
      {productList.map(item=>(
        
        <ProductCard product={item} key={item.id}/>
        ))}
    </div>
  )
}

export default ProductList