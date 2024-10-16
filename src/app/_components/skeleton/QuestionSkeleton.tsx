import React from 'react'

const QuestionSkeleton = () => {
  return (
    <div>
      <div className="animate-pulse bg-gray-300 h-7 w-full rounded mt-10" />
      <div className="animate-pulse bg-gray-300 h-7 w-36 rounded  mt-10" />
      <div className="animate-pulse bg-gray-300 h-7 w-36 rounded  mt-5" />
      <div className="animate-pulse bg-gray-300 h-7 w-36 rounded  mt-5" />
      <div className="animate-pulse bg-gray-300 h-7 w-36 rounded  mt-5" />
    </div>
  )
}

export default QuestionSkeleton
