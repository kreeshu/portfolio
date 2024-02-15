import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='flex w-full justify-evenly my-5'>
            <div className='w-2/12'>
                {/* <img src="" alt="" /> */}
            </div>
            <div className='w-4/12 justify-self-center'>
                <ul className='flex justify-evenly text-xl items-center h-full'>
                    <Link to='/' >Home</Link>
                    <Link to='/about' >About</Link>
                    <Link to='/contact' >Contact</Link>
                </ul>
            </div>
            <div className='w-2/12 font-roboto'>
                <Button name="Hire Me"/>
            </div>
        </div>
    )
}
