"use client"

import React, { useEffect, useState } from 'react'
const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { useAppContext } from '@/app/_utils/AppContext';
import Timer from './helperComponents/Timer';

const Questions = () => {
  const [questionId, setQuestionId] = useState("")
  const [data, setData] = useState<any>([])
  const [selected, setSelected] = useState<any | null>(null)
  const { qid, qno, answered, setAnswered,setFlagged ,flagged} = useAppContext()


  useEffect(() => {
    const fetchdata = async () => {
      try {
        setSelected(null)
        console.log(qid, qno);
        const response = await fetch(`${API_URL}/api/questions`);
        const data = await response.json();
        const filteredData = data.filter((item: any) => item.id === qid);
        console.log(filteredData)
        setData(filteredData);
        if (answered[filteredData[0]?.id]) {
          console.log(filteredData[0]?.id, 89)
          setSelected(answered[filteredData[0]?.id])
        }

      } catch (error) {
        console.log(error)
      }

    }
    fetchdata()
  }, [qid])

  const selectAnswers = (answer: string) => {
    setAnswered({ ...answered, [qid]: answer })
    console.log(answered)
    setSelected(answer)
  }

  const flaggedQ= ()=> {
    console.log('hello')
     if (!flagged.includes(qid)) {
      setFlagged([...flagged, qid]); // 
      console.log(`Question flagged.`);
    } else {
      console.log(`Question  falgged.`);
    }
  }

  return (
    <div className='p-2 h-full pl-0 w-1/2'>
      <div className='bg-white h-full rounded-md'>
        <div className='p-5 flex flex-col justify-between h-full'>
          <div>
          <div className='flex justify-between items-center  '>
            <p>MCQ-<span className='text-orange-500'>Q{qno}</span></p>
            <div className='bg-gray-50 py-1 px-2'>
              <Timer />

            </div>
          </div>
          <div className='mt-3 pb-3 border-b-2 border-slate-50 mb-3'>
            <p className='font-serif text-2xl font-medium'>{data[0]?.question}</p>
          </div>
          {data[0]?.options.map((item: any, i: number) => (
            <div className={`flex gap-3 items-center mb-3 mt-7 cursor-pointer ${selected == item.id ? "bg-orange-100" : ""}`} onClick={() => { selectAnswers(item.id) }}>
              <div className='rounded-full bg-slate-100 w-5 h-5 flex justify-center items-center text-sm'>
                {String.fromCharCode(65 + (i))}
              </div>
              <p>{item.option}</p>
            </div>
          )
          )}
          </div>
          <div className='flex justify-between pt-4 border-t-2 border-slate-50'>
            <div>
              <div className='bg-black w-24 h-7 flex justify-center items-center rounded-3xl'>
                <p className='text-[10px] text-white'>End and Submit</p>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='bg-slate-100 w-24 h-7 flex justify-center items-center rounded-3xl'>
                <p className='text-[10px] text-black'>Previous</p>
              </div>
              <div className={`bg-slate-100 w-24 h-7 flex justify-center items-center cursor-pointer rounded-3xl ${flagged.includes(qid)?"bg-orange-400":""}`} onClick={flaggedQ} >
                <p className={`text-[10px] text-black `}  >Flag</p>
              </div>
              <div className='bg-slate-100 w-24 h-7 flex justify-center items-center rounded-3xl'>
                <p className='text-[10px] text-black'>Next</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questions
