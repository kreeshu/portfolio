import React from 'react'
import Line from './Line'
import Button from './Button'

function About() {
    return (
        <div className='my-20'>
            <Line title="About Me" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <div className='my-10 w-11/12 mx-auto'>
                <div className='w-8/12'>
                    <div className='w-full flex flex-col'>
                        <div className='w-7/12'>
                            <Line title="Developing With a Passion While Exploring The World." />
                        </div>
                    </div>
                    <div className='w-full flex justify-between'>
                        <div className='w-6/12 my-5'>
                            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                              <br />  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className='w-6/12 text-xl pl-5 pt-4'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                              <br />  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                        <Button name="Contact Me"/>
                </div>
                <div className='w-4/12'>
                    {/* <img src={} alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default About