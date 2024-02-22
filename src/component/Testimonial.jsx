import React from 'react'
import Line from './Line'
import TestiBox from './TestiBox'
import pic from "../assets/kritika.jpg"
import pic1 from "../assets/malla.jpg"
import pic2 from "../assets/anjila.jpg"


function Testimonial() {
  return (
    <div className='my-10'>
        <Line text="Feedback that Fuels my Passion for Excellence." title="What My Clients Says"/>
        <div className='mt-20 flex flex-col md:flex-row justify-around'>
        <TestiBox name="Anjila Chettri" text="Dear Krishu,your portfolio stands out with its sleek design and intuitive navigation, leaving a lasting impression on visitors. Well done!." img={pic2}/>
        <TestiBox name="Aryan Malla" text="Your portfolio exudes professionalism and creativity, leaving a memorable impression. Well-organized and visually appealing." img={pic1}/>
        <TestiBox name="Kritika Neupane" text="Great! your design captivates with its elegant design and showcases your talent effectively. A compelling presentation of your work."





 img={pic}/>
        </div>
    </div>
  )
}

export default Testimonial