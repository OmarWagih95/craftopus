import React from 'react'
import ProductCard from './ProductCard'
import CategoriesCard from './CategoriesCard'


function CategoriesList({categoriesList}) {
  console.log(categoriesList.length);
  return (
    <div className='px-16 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9 '>
    {categoriesList.map(item=>(
      
    //   <ProductCard product={item} key={item.id}/>
      <CategoriesCard category={item} key={item.id}/>
      ))}
  </div>
  )
}

export default CategoriesList