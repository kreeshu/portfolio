import React from 'react'
import Button from './Button'

export default function Header() {
    return (
        <div className='flex w-full justify-evenly my-5'>
            <div className='w-2/12'>
                {/* <img src="" alt="" /> */}
            </div>
            <div className='w-4/12 justify-self-center'>
                <ul className='flex justify-evenly items-center h-full'>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Portfolio
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
            <div className='w-1/12'>
                <Button />
            </div>
        </div>
    )
}
