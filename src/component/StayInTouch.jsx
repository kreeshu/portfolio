import React from 'react'
import Button from './Button'

function StayInTouch() {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-medium my-8 font-noto'>Stay In Touch</h1>
            <p className='w-6/12 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className='w-1/12 my-5 h-[2px] rounded-2xl bg-orange-500'></div>

            <div className='flex justify-center w-7/12 my-10'>
                <div className='w-7/12 flex justify-between items-center'>
                    <input className='pr-14 pl-5 mt-2 rounded-md py-4' type="text" placeholder='Enter email address' />
                    <Button className="w-2/12" name="Subscribe" />
                </div>
            </div>
        </div>
    )
}

export default StayInTouch