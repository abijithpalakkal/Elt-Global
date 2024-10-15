import React, { ReactNode } from 'react'
import Image from 'next/image'
import { Mail } from "lucide-react"


const Items = ({name,icon:Icon,toggle,isSelected,onClick}:{
    name:string,
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    toggle:boolean
    isSelected:boolean
    onClick:()=>void
}) => {
  return (
    <div className={`mt-7 pr-5 py-2 ${isSelected ? 'bg-orange-500  rounded-xl transition duration-200':""}`}>
    <div className="flex gap-4  transition-all duration-500 ml-2 cursor-pointer" onClick={onClick}>
        
        <Icon className={`${isSelected ? 'text-white':"text-orange-500"}`}/>
       {!toggle && <p className={`${isSelected? "text-white":""}`}>{name}</p>}
    </div>
    </div>
  )
}

export default Items
