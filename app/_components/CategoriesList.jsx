import React, { useState,useEffect } from 'react'
import ProductCard from './ProductCard'
import CategoriesCard from './CategoriesCard'
import axios from 'axios';
import CategoriesListSkeleton from './CartsListSkeleton';
import CartsListSkeleton from './CartsListSkeleton';


function CategoriesList({categoriesList}) {
  const [categories,setCategories]=useState([]);
  const fetchCategories = async () => {
    const res =await axios('/api/categories')
    // const res =await axios('/api/categories2')
    // if(res.data.json().ok){
  
      setCategories(res.data);
      console.log(res);
    
    // }
  }
  useEffect(() => {
    fetchCategories();
  }, [])

  console.log(categories.length);
  return (
   categories[0]? 
   <div className='px-3 lg:px-16 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9 '>
    {/* {categoriesList.map(item=>(
      
    //   <ProductCard product={item} key={item.id}/>
      <CategoriesCard category={item} key={item.id}/>
      ))} */}
      {
        
        categories.length > 0 && categories.map(item=>(
      
          //   <ProductCard product={item} key={item.id}/>
            <CategoriesCard category={item} key={item._id}/>
            ))}
      
  </div>:
    <CartsListSkeleton height={350} width={230}/>
  )
}

export default CategoriesList