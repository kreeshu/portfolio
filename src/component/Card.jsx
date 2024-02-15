import React from 'react'

function Card({img,text,title}) {
  return (
    <div className='w-3/12 bg-white rounded-lg'>
        <div className='w-10/12 my-5 mx-auto flex flex-col justify-center items-center'>
            {img}
            <p className='my-3 mt-4 text-xl font-semibold'>{title}</p>
            <p className='my-3'>{text}</p>
        </div>
    </div>
  )
}

export default Card