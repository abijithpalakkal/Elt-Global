import React from 'react'
import QuestionNumber from '@/app/_components/examComponents/QuestionNumber'
import Questions from '../../_components/examComponents/Questions'

const page = () => {
  return (
    <div className='md:flex justify-center h-full w-full'>
       <QuestionNumber/>
       <Questions />
    </div>
  )
}

export default page
