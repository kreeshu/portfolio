import React from 'react'
import Line from './Line'
import { FaInstagram, FaLinkedinIn, FaFacebook, FaGithub } from "react-icons/fa";

function Form() {
    return (
        <div className='w-full flex my-10 justify-evenly'>
            <div className='w-7/12 bg-white rounded-lg'>
                <div className='w-11/12 mt-3 mx-auto'>
                    <Line title="Get In Touch" />
                    <input placeholder='Enter your name' className='w-full mt-5 mb-10 bg-slate-100 pl-4 py-4 rounded' />
                    <input placeholder='Enter your email' className='w-full mb-10 bg-slate-100 pl-4 py-4 rounded' />
                    <input placeholder='Enter your message' className='w-full mb-10 bg-slate-100 pl-4 py-3 pb-20 rounded' />
                </div>
            </div>
            <div className='w-3/12'>
                <Line title="Message" />
                <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcor mattis, pulvinar dapibus leo.</p>
                <div className='flex w-8/12 text-3xl mt-7 justify-between'>
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
        </div>
        </div >
    )
}

export default Form