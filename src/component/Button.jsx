import React from 'react'

export default function Button({name}) {
  return (
    <div>
        <button className='bg-red-500 mt-2 rounded md:rounded-lg'>
            <p className='md:py-3 py-2 px-6 md:px-7 text-sm md:text-xl text-white'>
                {name}
            </p>
        </button>
    </div>
  )
}
