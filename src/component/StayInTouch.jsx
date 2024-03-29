import React from 'react'
import Button from './Button'

function StayInTouch() {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-medium my-8 font-noto'>Stay In Touch</h1>
            <p className='w-full md:w-6/12 text-center'>Explore, Engage, and Experience the Journey with me.</p>
            <div className='w-1/12 my-5 h-[2px] rounded-2xl bg-orange-500'></div>

            <div className='flex justify-center w-full md:w-7/12 my-10'>
                <div className='w-full md:w-7/12 flex flex-col md:flex-row justify-between items-center'>
                    <input className='pr-14 mb-5 md:mb-0 pl-5 mt-2 rounded-md py-4' type="text" placeholder='Enter email address' />
                    <Button className="w-full md:w-2/12" name="Subscribe" />
                </div>
            </div>
        </div>
    )
}

export default StayInTouch