import React from 'react'
import { FaInstagram, FaLinkedinIn, FaFacebook, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div className='w-full bg-blue-950'>
            <div className='flex justify-evenly border-b-2 py-20 border-white'>
                <div className="w-3/12 flex text-white text-2xl">
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
                <div className="w-3/12">

                </div>
                <div className="w-3/12">
                    <h1 className='text-2xl font-normal text-white'>Kreeshukarki1234@gmail.com</h1>
                </div>
            </div>
            <div className='py-14'>
                <p className='text-center text-base text-white'>Copyright © 2024 Krishu Karki</p>
            </div>
        </div>
    )
}

export default Footer