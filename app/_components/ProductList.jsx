import React from 'react'
import ProductCard from './ProductCard'

function ProductList({productList,categoryID}) {
  console.log(categoryID);
  console.log(productList.length)
  return (
    <div className='min-h-screen h-auto px-3 lg:px-16 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9 '>
      {productList.map(item=>{
        
        if(item.categoryID==categoryID){
          console.log(true);
         return <ProductCard product={item} key={item.id}/>
        }
      }
      )}
    </div>
  )
}

export default ProductList