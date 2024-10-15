"use client"

import React, { useEffect, useState } from 'react'
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const Questions = () => {
  const [questionId,setQuestionId] = useState("")
  const [data, setData] = useState([])

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
    <div className='p-2 h-full pl-0 w-1/2'>
    <div className='bg-white h-full rounded-md'>
      <div className='p-5'>
        <div className='flex justify-between items-center  '>
          <p>mcq-01</p>
          <p>timer</p>
        </div>
        <div>
          <p className='font-serif text-2xl font-medium'>jenfjowsfwe fc wsv js vjs vk j v s vk n vnsd vkeds vjb dsk bkddkjvnfsonvjnlo j kh k s bljds bljs blj bk?</p>
        </div>
        <div className='flex gap-3 items-center'>
          <div className='rounded-full bg-slate-100 w-5 h-5 flex justify-center items-center text-sm'>
            A
          </div>
          <p>microsoft</p>
        </div>
        <div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Questions
