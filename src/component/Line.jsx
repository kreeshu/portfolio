import React from 'react'

export default function Line({title,text}) {
    return (
    <div className='flex flex-col'>
        <h1 className={`text-2xl md:text-4xl font-roboto font-medium md:py-3 ${text!==undefined?"text-center":"text-left"}`}>{title}</h1>
        <p className={`text-sm md:text-xl text-center ${text!==undefined?"md:py-4 py-3":"py-0"}`}>{text}</p>
        <div className={`w-[80px] my-1 h-[2px] bg-orange-500 rounded-sm ${text!==undefined?"mx-auto":"ml-2 my-3"}`}></div>
    </div>
  )
}
