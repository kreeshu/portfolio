import React from 'react'

function TestiBox({name,img,text}) {
  return (
    <div className='w-full mb-8 md:mb-0 md:w-3/12 bg-white rounded-xl'>
        <div className='w-10/12 mx-auto  flex flex-col pb-10 justify-center items-center'>
            <h1 className='pt-4 text-orange-500 text-6xl text-center'>“</h1>
            <img src={img} className='w-[70px] h-[70px] border-[3px] border-orange-500 rounded-full' alt="" />
            <p className='text-sm md:text-base my-5 text-center'>{text}</p>
            <div className='w-2/12 my-5 h-[2px] rounded-2xl bg-orange-500'></div>
            <p className='text-sm md:text-base'>{name}</p>
        </div>
    </div>
  )
}

export default TestiBox