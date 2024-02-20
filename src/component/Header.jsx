import React, { useState } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import pic from "../assets/photos.png"
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
export default function Header() {
   
    return (
        <div className='flex md:flex-row flex-col w-full justify-between md:justify-evenly my-4'>
            <div className='md:w-3/12 w-4/12 mx-auto flex justify-between'>
                <img src={pic} className='w-[100px] ml-20' alt="" />
                <div className='w-3/12 md:hidden flex text-3xl justify-center items-center'>
                    <RxHamburgerMenu />
                    <RxCross2 className='hidden' />
                </div>
            </div>
            <div className='md:flex hidden w-full md:w-9/12 justify-around'>
                <div className='md:w-4/12 w-full md:justify-self-center'>
                    <ul className='flex flex-col md:flex-row justify-evenly text-xl items-center h-full'>
                        <Link to='/' >Home</Link>
                        <Link to='/about' >About</Link>
                        <Link to='/contact' >Contact</Link>
                    </ul>
                </div>
                <div className='md:w-2/12 flex justify-center items-center font-roboto'>
                    <Button name="Hire Me" />
                </div>
            </div>
        </div>
    )
}
