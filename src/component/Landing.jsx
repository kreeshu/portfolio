import React from 'react'
import Button from './Button'
import pic from "../assets/krishuu.jpg"

import { FaInstagram,FaLinkedinIn, FaFacebook,FaGithub  } from "react-icons/fa";
function Landing() {
    return (
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row my-10'>
            <div className='w-full md:w-7/12 flex'>
                <div className='w-2/12 hidden md:flex text-3xl flex-col mt-9 items-center'>
                <a href="https://www.instagram.com/k.kreeshu" target='_blank' rel="noreferrer">
                            <FaInstagram className='my-4' />
                        </a>
                        <a href="https://www.linkedin.com/in/krishu-karki" target='_blank' rel="noreferrer">
                            <FaLinkedinIn className='my-4' />
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=100082146398932' target='_blank' rel="noreferrer">
                            <FaFacebook className='my-4' />
                        </a>
                        <a href='https://github.com/kreeshu' target='_blank' rel="noreferrer">
                            <FaGithub className='my-4' />
                        </a>
                </div>
                <div className='w-full text-center md:text-left md:w-10/12 flex flex-col mt-14'>
                    <h1 className='text-3xl md:text-4xl lg:text-6xl font-noto font-semibold leading-tight '>
                        I'm Web Developer <br />
                        Krishu Karki</h1>
                    <p className='text-sm md:text-xl my-6 lg:mb-14'> I'm a web developer passionate about crafting dynamic and engaging online experiences.Whether it's creating sleek user interfaces or optimizing performance, I strive to deliver results that exceed expectations. Explore my work and let's collaborate to bring your digital ideas to life.</p>
                    <Button name="Learn more" />
                </div>
            </div>
            <div className='w-full md:w-4/12    '>
                <img src={pic} className='w-8/12 mx-auto rounded-md mt-6 md:w-full' alt="" />
               
            </div>
        </div>
    )
}

export default Landing