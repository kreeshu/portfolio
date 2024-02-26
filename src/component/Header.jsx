import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import pic from "../assets/photos.png";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

export default function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Code to execute on component mount or when `open` state changes
        // For demonstration purposes, let's log the state change
        console.log("Open state changed:", open);

        // If you have any cleanup to do when component unmounts or state changes,
        // you can return a cleanup function from useEffect
        return () => {
            // Cleanup code here (if needed)
        };
    }, [open]); // Dependency array ensures useEffect runs when `open` state changes

    return (
        <div className='flex md:flex-row flex-col w-full justify-between md:justify-evenly my-4'>
            <div className='md:w-3/12 w-full mx-auto flex justify-between'>
                <img src={pic} className='w-[50px] md:w-[100px] ml-5 lg:ml-20' alt="" />
                <div className='w-3/12 md:hidden flex text-3xl justify-center items-center'>
                    <RxHamburgerMenu onClick={() => { setOpen(!open) }} className={`${open ? "hidden" : ""}`} />
                    <RxCross2 onClick={() => { setOpen(!open) }} className={`${open ? "" : "hidden"}`} />
                </div>
            </div>
            <div className={`md:flex ${open ? "flex flex-col" : "hidden"} w-full md:w-9/12 justify-around`}>
                <div className='md:w-4/12 w-full md:justify-self-center'>
                    <ul className='flex flex-col md:flex-row justify-evenly text-xl items-center h-full'>
                        <Link className='mt-3 md:mt-0' to='/'>Home</Link>
                        <Link className='mt-3 md:mt-0' to='/about'>About</Link>
                        <Link className='mt-3 md:mt-0' to='/contact'>Contact</Link>
                    </ul>
                </div>
                <div className='md:w-2/12 flex justify-center items-center font-roboto'>
                    <Button name="Hire Me" />
                </div>
            </div>
        </div>
    );
}
