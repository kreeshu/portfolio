import React from 'react'
import Line from './Line'
import { FaInstagram, FaLinkedinIn, FaFacebook, FaGithub } from "react-icons/fa";
import pic from "../assets/krishuu.jpg"
import Button from './Button';
function Info() {
    return (
        <div>
            <div className='flex justify-evenly my-20'>
                <div className="w-3/12">
                    <div className='flex items-end bg-orange-500 h-[90%] rounded-2xl'>
                        <img src={pic} className='ml-[-15px] mb-[-5px] rounded-2xl' alt="" />
                    </div>
                </div>
                <div className="w-4/12">
                    <Line title="Designing With Passion While Exploring The World" />
                    <p className='text-base'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        <br /><br />Let's talk with me.
                    </p>
                    <p className='text-xl my-4 font-semibold'>Kreeshukarki1234@gmail.com</p>
                </div>
                <div className="w-3/12">
                    <Line title="I Create Products Not Just Arts" />
                    <p className='text-base'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <div className='flex cursor-pointer text-black my-6 text-2xl'>
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
            <div className='w-full mx-auto my-20 flex justify-evenly'>
                <div className="w-5/12 flex flex-col">
                    <Line title="Frontend and Backend Developer" />
                    <p className='text-base my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipisci elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <Button name="Download CV" />
                </div>
                <div className="w-5/12 mt-5 flex flex-col justify-evenly">
                    <div className='h-[20px] bg-slate-200 rounded-2xl w-full flex justify-start'>
                        <div className='w-8/12 text-xs flex justify-start items-center text-white rounded-2xl h-full bg-orange-500 pl-3'>
                            JavaScript
                        </div>
                    </div>
                    <div className='h-[20px] bg-slate-200 rounded-2xl w-full flex justify-start'>
                        <div className='w-11/12 text-xs flex justify-start items-center text-white rounded-2xl h-full bg-orange-500 pl-3'>
                            HTML
                        </div>
                    </div>
                    <div className='h-[20px] bg-slate-200 rounded-2xl w-full flex justify-start'>
                        <div className='w-9/12 text-xs flex justify-start items-center text-white rounded-2xl h-full bg-orange-500 pl-3'>
                            CSS
                        </div>
                    </div>
                    <div className='h-[20px] bg-slate-200 rounded-2xl w-full flex justify-start'>
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