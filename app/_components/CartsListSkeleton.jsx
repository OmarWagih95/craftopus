import React from 'react'

const CartsListSkeleton = (params) => {
    console.log(params.height)
    console.log(params.width)
  return (
    <div className='px-3 lg:px-16 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9 '>
    <div className={`rounded-t-lg px-1 py-1 bg-gray-800 h-[${params.height}px] w-[${params.width}px] hover:border-2 animate-pulse `}>
    </div>
    <div className={`rounded-t-lg px-1 py-1 bg-gray-800 h-[${params.height}px] w-[${params.width}px] hover:border-2 animate-pulse `}>
    </div>
    <div className={`rounded-t-lg px-1 py-1 bg-gray-800 h-[${params.height}px] w-[${params.width}px] hover:border-2 animate-pulse `}>
    </div>
    <div className={`rounded-t-lg px-1 py-1 bg-gray-800 h-[${params.height}px] w-[${params.width}px] hover:border-2 animate-pulse `}>
    </div>



</div>
  )
}

export default CartsListSkeleton