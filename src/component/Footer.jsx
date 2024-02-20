import React from 'react'
import { FaInstagram, FaLinkedinIn, FaFacebook, FaGithub } from "react-icons/fa";
import pic from "../assets/krishuu.jpg"
function Footer() {
    return (
        <div className='w-full bg-blue-950'>
            <div className='flex items-center flex-col md:flex-row justify-evenly border-b-2 py-20 border-white'>
                <div className="w-8/12 md:w-3/12 mx-auto flex text-white text-2xl">
                    <a href="https://www.instagram.com/k.kreeshu" target='_blank' rel="noreferrer">
                        <FaInstagram className='mx-4' />
                    </a>
                    <a href="https://www.linkedin.com/in/krishu-karki" target='_blank' rel="noreferrer">
                        <FaLinkedinIn className='mx-4' />
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100082146398932' target='_blank' rel="noreferrer">
                        <FaFacebook className='mx-4' />
                    </a>
                    <a href='https://github.com/kreeshu' target='_blank' rel="noreferrer">
                        <FaGithub className='mx-4' />
                    </a>
                </div>
                <div className="w-full md:w-1/12">
                    <img src={pic} className='rounded-full w-5/12 my-6 md:mx-0 mx-auto' alt="" />
                </div>
                <div className="w-full md:w-5/12">
                    <h1 className='text-base text-center md:text-left md:text-2xl font-normal text-white'>Kreeshukarki1234@gmail.com</h1>
                </div>
            </div>
            <div className='py-14'>
                <p className='text-center text-base text-white'>Copyright © 2024 Krishu Karki</p>
            </div>
        </div>
    )
}

export default Footer