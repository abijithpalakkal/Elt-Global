"use client"


import Error from 'next/error'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/app/_utils/AppContext'

const QuestionNumber = () => {

  const [selectedNumber, setSelectedNumber] = useState<number | null>(null)
  const [data, setData] = useState([])
  const [selected,setSelected] = useState<number>(1)
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  console.log(API_URL)

  const {setQno,setQid,answered,flagged}=useAppContext()

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

  const questionClick=(qno:number,qid:string)=>{
    setSelected(qno)
     setQno(qno)
     setQid(qid)
  }

  return (
    <div className='p-2 h-full w-1/4 '>
      <div className=' bg-white h-full px-5 py-6 rounded-md'>
        <div className='pb-5 border-b-2'>
          <p className='font-medium'>Overview</p>
        </div>
        <div className='flex flex-wrap gap-2 mt-5'>
          {data?.map((item: any, index: number) => {
            const itemId = item?.id;  
            return (<div key={index + 1} className={`w-7 h-7 rounded-full bg-slate-100 flex justify-center items-center cursor-pointer ${selected == index+1 ? ' border-orange-400 border-2':''}    ${answered[itemId] ? 'bg-green-600' : ''}  ${flagged?.includes(itemId)?"bg-orange-400":""}`} onClick={()=>{
              if (itemId) {
                questionClick(index + 1, itemId);
              }
              }}>
              {index + 1}
            </div>)
          })}

        </div>
      </div>
    </div>
  )
}

export default QuestionNumber
