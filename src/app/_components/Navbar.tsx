"use client";

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'



const Navbar = () => {
     const router = useRouter();
     const[selectedItem,setSelecetedItem] = useState('Exam')

     const handleExamClick=()=>{
      setSelecetedItem('Exam')
         router.push('/dashboard/exam');
   }
   const handleLoremClick=()=>{
    setSelecetedItem("Lorem")
    router.push('/dashboard/lorem');
}
  return (
    <div className=' w-full  px-8 bg-white  border-l-2 '>
      <p className='text-2xl font-semibold mb-4 pt-2'>Heading</p>
      <div className='flex gap-6 text-slate-500'>
        <p onClick={handleExamClick} className={`cursor-pointer pb-2 ${selectedItem === 'Exam'?"text-orange-500 border-b-2 border-b-black":""}`}>Exam</p>
        <p onClick={handleLoremClick} className={`cursor-pointer pb-2 ${selectedItem === 'Lorem'?"text-orange-500 border-b-2 border-b-black":""}`}>Lorem</p>
        <p onClick={handleLoremClick} className={`cursor-pointer pb-2 ${selectedItem === 'Lorem'?"text-orange-500 border-b-2 border-b-black":""}`}>Lorem</p>
        <p onClick={handleLoremClick} className={`cursor-pointer pb-2 ${selectedItem === 'Lorem'?"text-orange-500 border-b-2 border-b-black":""}`}>Lorem</p>
      </div>
    </div>
  )
}

export default Navbar
