import React from 'react'
import Line from './Line'
import Box from './Box'

function Service() {
  return (
    <div className='my-20'>
        <Line title="What Services I'm Providing" text="Unlocking Potential Through Dedicated Service" />
        <div className='w-full flex flex-col md:flex-row justify-evenly mt-9'>
        <Box img="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer.png" title="Digital Marketing" text="Unlock Your Brand's Potential with Strategic Digital Marketing. Tailored solutions in SEO, SEM, Social Media, Content, and Analytics. Let's elevate your online presence and drive impactful results together."/>
        <Box img="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer.png" title="UI/UX Design" text="Crafting intuitive interfaces and seamless user experiences. From wireframes to prototypes, we specialize in UI/UX design to enhance engagement and satisfaction for your digital products."/>
        <Box img="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer.png" title="Web Development" text="Expert web development services tailored to your needs. From responsive design to backend functionality, we create stunning, user-friendly websites that drive results and elevate your online presence."/>
        </div>
    </div>
  )
}

export default Service