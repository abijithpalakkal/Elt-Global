"use client"

import React from 'react'
import QuestionNumber from '@/app/_components/examComponents/QuestionNumber'
import Questions from '../../_components/examComponents/Questions'
import { useAppContext } from '@/app/_utils/AppContext'
import SubmitModal from '@/app/_components/modals/submitModal'

const Page = () => {
   const {modal} = useAppContext()
  return (
    <div className='md:flex justify-center h-full w-full'>
       {modal && <SubmitModal/>}
       <QuestionNumber/>
       <Questions />
    </div>
  )
}

export default Page
