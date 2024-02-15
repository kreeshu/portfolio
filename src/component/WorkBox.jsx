import React from 'react'

function WorkBox({text,time,title,width}) {
  return (
    <div className={`bg-white rounded-xl ${width}`}>
        <div className=' w-10/12 mb-10 mx-auto pt-5 flex flex-col'>
            <h1 className='my-2'>{title}</h1>
            <p className=' text-orange-500 my-4'>{time}</p>
            <p className='mt-2 mb-6'>{text}</p>
            <div className='h-[20px] bg-slate-200 rounded-2xl w-full flex justify-start'>
                <div className='w-9/12 text-xs flex justify-start items-center text-white rounded-2xl h-full bg-orange-500 pl-3'>
                    {title}
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkBox