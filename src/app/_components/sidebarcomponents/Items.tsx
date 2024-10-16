import React from 'react'



const Items = ({name,icon:Icon,toggle,isSelected,onClick}:{
    name:string,
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    toggle:boolean
    isSelected:boolean
    onClick:()=>void
}) => {
  return (
    <div className={`mt-7 pr-5 py-2 hidden md:block ${isSelected ? 'bg-orange-500  rounded-xl transition duration-200':""} min-w-10`}>
    <div className="flex gap-4  transition-all duration-500 ml-2 cursor-pointer " onClick={onClick}>
        <div className='w-6'>
        <Icon className={`${isSelected ? 'text-white':"text-orange-500"} ` }/>
        </div>
       {!toggle && <p className={`${isSelected? "text-white":""}`}>{name}</p>}
    </div>
    </div>
  )
}

export default Items
