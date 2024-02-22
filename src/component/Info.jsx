import React from 'react'
import Line from './Line'
import { FaInstagram, FaLinkedinIn, FaFacebook, FaGithub } from "react-icons/fa";
import pic from "../assets/krishuu.jpg"

function Info() {
    return (
        <div>
            <div className='w-11/12 mx-auto md:w-full flex flex-col md:flex-row justify-evenly my-20'>
                <div className="w-11/12 md:w-3/12">
                    <div className='flex items-end bg-orange-500 h-[90%] rounded-2xl'>
                        <img src={pic} className='ml-[-15px] mt-3 md:mt-0 md:mb-[-5px] rounded-2xl' alt="" />
                    </div>
                </div>
                <div className="w-full md:w-4/12 mt-10 md:mt-0">
                    <Line title="Designing With Passion While Exploring The World" />
                    <p className='text-sm md:text-base'>

                        As a designer driven by passion and fueled by explorer's desire, I find inspiration in every corner of the globe. From the bustling streets of urban jungles to the serene landscapes of remote destinations, I draw upon my experiences to create engaging and impactful designs. With a commitment to innovation and a love for storytelling, I strive to craft immersive experiences that resonate with audiences on a profound level. Let's embark on this creative journey together.

                        <br /><br />Let's talk with me.
                    </p>
                    <p className='text-sm md:text-xl my-4 font-semibold'>Kreeshukarki1234@gmail.com</p>
                </div>
                <div className="w-full md:w-3/12">
                    <Line title="I Create Products Not Just Arts" />
                    <p className='text-sm md:text-base'>
                        
"I am a creator driven by a passion for building meaningful products that transcend mere artistry. With a fusion of innovation and craftsmanship, I embark on a journey to craft immersive experiences that resonate deeply with users. From concept to execution, I thrive on the challenge of turning ideas into tangible solutions that enrich lives and inspire connections. Let's collaborate and bring your visions to life."
                        <br/>
                    </p>
                    <div className='flex ml-2 cursor-pointer text-black my-6 text-2xl'>
                        <a href="https://www.instagram.com/k.kreeshu" target='_blank' rel="noreferrer">
                            <FaInstagram className='mr-4' />
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
            </div>
            <div className='w-full mx-auto my-20 flex flex-col md:flex-row justify-evenly'>
                <div className="w-full md:w-5/12 flex flex-col">
                    <Line title="Frontend and Backend Developer" />

                    <p className='text-base my-5'> 
"As a versatile frontend and backend developer, I thrive on the dynamic challenges of both worlds. With a passion for crafting seamless user experiences and robust, scalable systems, I bring creativity and technical expertise to every project. From pixel-perfect designs to efficient server-side solutions, I specialize in bridging the gap between form and function. Let's collaborate and bring your digital dreams to fruition."</p>
                    <button className='bg-red-500 md:py-3 py-2 px-6 md:px-7 w-1/2 mt-2 rounded md:rounded-lg'>
                        <a href="cv.jpg" download className=' text-sm md:text-xl text-white'>
                            Download CV
                        </a>
                    </button>
                </div>
                <div className="w-full md:w-5/12 mt-5 flex flex-col justify-evenly">
                    <div className=' my-10 md:mb-0 h-[20px] bg-slate-200 rounded-2xl w-full flex justify-start'>
                        <div className='w-8/12 text-xs flex justify-start items-center text-white rounded-2xl  mb-10 md:mb-0 h-full bg-orange-500 pl-3'>
                            JavaScript
                        </div>
                    </div>
                    <div className=' mb-10 md:mb-0 h-[20px] bg-slate-200 rounded-2xl w-full flex justify-start'>
                        <div className='w-11/12 text-xs flex justify-start items-center text-white rounded-2xl  mb-10 md:mb-0 h-full bg-orange-500 pl-3'>
                            HTML
                        </div>
                    </div>
                    <div className=' mb-10 md:mb-0 h-[20px] bg-slate-200 rounded-2xl w-full flex justify-start'>
                        <div className='w-9/12 text-xs flex justify-start items-center text-white rounded-2xl  mb-10 md:mb-0 h-full bg-orange-500 pl-3'>
                            CSS
                        </div>
                    </div>
                    <div className=' mb-10 md:mb-0 h-[20px] bg-slate-200 rounded-2xl w-full flex justify-start'>
                        <div className='w-6/12 text-xs flex justify-start items-center text-white rounded-2xl h-full bg-orange-500 pl-3'>
                            React
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info