import React from 'react'
import Header from '../component/Header'
import Info from '../component/Info'
import Work from '../component/Work'
import StayInTouch from '../component/StayInTouch'
import Footer from '../component/Footer'
import Title from '../component/Title'

function About() {
  return (
    <div>
        <Header/>
        <div className='w-11/12 mx-auto'>
        <Title title="About Me" />
        <Info />
        <Work />
        <StayInTouch />
        </div>
        <Footer />
    </div>
  )
}

export default About