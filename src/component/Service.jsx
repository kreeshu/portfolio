import React from 'react'
import Line from './Line'
import Box from './Box'

function Service() {
  return (
    <div className='my-20'>
        <Line title="What Services I'm Providing" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <div className='w-full flex flex-col md:flex-row justify-evenly mt-9'>
        <Box img="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer.png" title="UI/UX Design" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
        <Box img="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer.png" title="UI/UX Design" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
        <Box img="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer.png" title="UI/UX Design" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
        </div>
    </div>
  )
}

export default Service