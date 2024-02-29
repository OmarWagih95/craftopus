import React from 'react'

function SkeletonProductInfo() {
  return (
    <div className='animate-pulse gap-12'>
        <div className='h-[30px] w-[180px] bg-gray-400 '></div>
        <div className='h-[20px] w-[130px] bg-gray-400 mt-2'></div>
        <div className='h-[80px] w-[300px] bg-gray-400 mt-10'></div>
        <div className='rounded-lg h-[45px] w-[135px] bg-gray-400 mt-10'></div>
    </div>
  )
}

export default SkeletonProductInfo