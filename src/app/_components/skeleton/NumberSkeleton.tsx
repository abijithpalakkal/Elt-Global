import React from 'react'

const NumberSkeleton = () => {
    return (
        <>
        <div className='flex gap-2 mt-6'>
        <div className="animate-pulse bg-gray-300 h-7 w-7 rounded-full" />
        <div className="animate-pulse bg-gray-300 h-7 w-7 rounded-full" />
        <div className="animate-pulse bg-gray-300 h-7 w-7 rounded-full" />
        <div className="animate-pulse bg-gray-300 h-7 w-7 rounded-full" />
        <div className="animate-pulse bg-gray-300 h-7 w-7 rounded-full" />
        <div className="animate-pulse bg-gray-300 h-7 w-7 rounded-full" />
        </div>
        <div className='flex gap-2 mt-3'>
        <div className="animate-pulse bg-gray-300 h-7 w-7 rounded-full" />
        <div className="animate-pulse bg-gray-300 h-7 w-7 rounded-full" />
        <div className="animate-pulse bg-gray-300 h-7 w-7 rounded-full" />
        <div className="animate-pulse bg-gray-300 h-7 w-7 rounded-full" />
        </div>
        <div className='flex gap-2 mt-3'>
        <div className="animate-pulse bg-gray-300 h-7 w-7 rounded-full" />
        <div className="animate-pulse bg-gray-300 h-7 w-7 rounded-full" />
       
        </div>
      
        </>
      )
}

export default NumberSkeleton
