import React from 'react'
import Header from '../component/Header'
import Title from '../component/Title'
import Card from '../component/Card'
import { FaPhoneAlt , FaHome } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";
import Form from '../component/Form'
import Footer from '../component/Footer'

function Contact() {
  return (
    <div className='w-full'>
        <Header/>
        <Title title="Contact" />
        <div className='flex flex-col md:flex-row justify-evenly'>
            <Card img={<FaPhoneAlt  className='text-2xl md:text-4xl my-3 text-orange-500'/>} text="Monday - Friday from 7am - 5pm" title="+977 9741786854"/>
            <Card img={<FaHome className='text-2xl md:text-4xl my-3 text-orange-500'/>} text="Pahelo Pul, Dhanyantari" title="Chabahill, Kathmandu"/>
            <Card img={<IoMdMail className='text-2xl md:text-4xl my-3 text-orange-500'/>} text="Contact me any time!" title="Kreeshukarki1234@gmail.com"/>
        </div>
        <Form />
        <Footer />
    </div>
  )
}

export default Contact