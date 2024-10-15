"use client"


import Error from 'next/error'
import React, { useEffect, useState } from 'react'

const QuestionNumber = () => {

  const [selectedNumber, setSelectedNumber] = useState<number | null>(null)
  const [data, setData] = useState([])
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  console.log(API_URL)

  const handleNumberClick = (number: number) => {
    setSelectedNumber(number)
  }

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const reponse = await fetch(`${API_URL}/api/questions`)
        const data = await reponse.json()
        setData(data)
      } catch (error) {
        console.log(error)
      }

    }
    fetchdata()
  }, [])
  return (
    <div className='p-2 h-full w-1/4 '>
      <div className=' bg-white h-full px-5 py-6 rounded-md'>
        <div className='pb-5 border-b-2'>
          <p className='font-medium'>Overview</p>
        </div>
        <div className='flex flex-wrap gap-2 mt-5'>
          {data.map((item: any, index: number) => {
            return (<div key={index + 1} className='w-7 h-7 rounded-full bg-slate-100 flex justify-center items-center'>
              {index + 1}
            </div>)
          })}

        </div>
      </div>
    </div>
  )
}

export default QuestionNumber
