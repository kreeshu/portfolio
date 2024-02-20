import React from 'react'

function Box({img,title,text}) {
  return (
    <div className='bg-white w-11/12 mx-auto mb-5 md:mb-0 md:w-3/12 rounded-xl'>
        <div className='w-10/12 flex flex-col mx-auto pt-10 pb-20'>
        <img src={img} className='w-[80px] mx-auto' alt="" />
        <h1 className='text-xl text-center my-2'>{title}</h1>
        <p className='text-sm md:text-base text-center my-4'>{text}</p>
        </div>
    </div>
  )
}

export default Box