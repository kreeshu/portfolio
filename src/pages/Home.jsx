import React from 'react'
import About from '../component/About';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Landing from '../component/Landing';
import Service from '../component/Service';
import StayInTouch from '../component/StayInTouch';
import Testimonial from '../component/Testimonial';
import Work from '../component/Work';
function Home() {
  return (
    <div>
      <Header />
        <div className='w-11/12 lg:my-10 mx-auto'>
      <Landing/>
      <About/>
      <Service/>
      <Work/>
      <Testimonial />
      <StayInTouch/>
    </div>
    <Footer/>
    </div>
  )
}

export default Home