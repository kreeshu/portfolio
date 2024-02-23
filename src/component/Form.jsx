import React from 'react'
import Line from './Line'
import { FaInstagram, FaLinkedinIn, FaFacebook, FaGithub } from "react-icons/fa";
import Button from './Button';
import { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };
    return (
        <div className='w-full flex flex-col md:flex-row my-10 justify-evenly'>
            <div className='w-11/12 mx-auto md:w-7/12 bg-white rounded-lg'>
                <div className='w-11/12 mt-3 mx-auto'>
                    <Line title="Get In Touch" />
                    <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder='Enter your name' 
                className='w-full mt-5 mb-10 bg-slate-100 pl-4 py-4 rounded' 
                value={formData.name} 
                onChange={handleChange} 
            />
            <input 
                type="email" 
                name="email" 
                placeholder='Enter your email' 
                className='w-full mb-10 bg-slate-100 pl-4 py-4 rounded' 
                value={formData.email} 
                onChange={handleChange} 
            />
            <textarea 
                name="message" 
                placeholder='Enter your message' 
                className='w-full mb-10 bg-slate-100 pl-4 py-3 pb-20 rounded' 
                value={formData.message} 
                onChange={handleChange} 
            />
            <Button name="Send"/>
        </form>
                </div>
            </div>
            <div className='w-10/12 mt-10 mx-auto md:w-3/12'>
                <Line title="Message" />
                <p className='text-sm md:text-base'>"Have a project in mind or just want to chat? I'm all ears! Feel free to reach out to me using the form below or drop me an email at [your email address]. Whether it's discussing potential collaborations, seeking advice, or simply saying hello, I'm here to connect with you. Looking forward to hearing from you!"</p>
                <div className='flex w-8/12 text-xl md:text-3xl mt-7 justify-between'>
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