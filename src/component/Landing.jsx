import React from 'react'
import Button from './Button'
import pic from "../assets/krishuu.jpg"
import { FaInstagram,FaLinkedinIn, FaFacebook,FaGithub  } from "react-icons/fa";
function Landing() {
    return (
        <div className='w-11/12 mx-auto flex my-10'>
            <div className='w-7/12 flex'>
                <div className='w-2/12 flex text-3xl flex-col mt-9 items-center'>
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
                <div className='w-10/12 flex flex-col mt-14'>
                    <h1 className='text-6xl font-noto font-semibold leading-tight'>
                        I'm Web Developer <br />
                        Krishu Karki</h1>
                    <p className='text-xl my-6 mb-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctusnec ullamcorper mattis, pulvinar dapibus leop llamcorper, lorem ipsum.</p>
                    <Button name="Learn more" />
                </div>
            </div>
            <div className='w-5/12'>
                <img src={pic} alt="" />
            </div>
        </div>
    )
}

export default Landing