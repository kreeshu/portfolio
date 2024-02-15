import React from 'react'
import Line from './Line'
import TestiBox from './TestiBox'
import pic from "../assets/krishuu.jpg"

function Testimonial() {
  return (
    <div className='my-10'>
        <Line text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="What My Clients Says"/>
        <div className='mt-20 flex justify-around'>
        <TestiBox name="Krishu Karki" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." img={pic}/>
        <TestiBox name="Krishu Karki" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." img={pic}/>
        <TestiBox name="Krishu Karki" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." img={pic}/>
        </div>
    </div>
  )
}

export default Testimonial