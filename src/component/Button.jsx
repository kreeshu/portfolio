import React from 'react'

export default function Button({name}) {
  return (
    <div>
        <button className='bg-red-500 mt-2 rounded-lg'>
            <p className='py-3 px-7 text-xl text-white'>
                {name}
            </p>
        </button>
    </div>
  )
}
