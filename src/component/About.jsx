import React from 'react'
import Line from './Line'
import Button from './Button'

function About() {
    return (
        <div className='my-20'>
            <Line title="About Me" text="In the world of ones and zeros, I'm the architect of digital dreams." />
            <div className='my-10 flex flex-col md:flex-row w-11/12 mx-auto'>
                <div className='w-full md:w-8/12'>
                    <div className='w-full flex flex-col'>
                        <div className='w-full md:w-7/12'>
                            <Line title="Developing With a Passion While Exploring The World." />
                        </div>
                    </div>
                    <div className='w-full text-sm md:text-xl flex flex-col md:flex-row text-justify'>
                        <div className='w-full md:w-6/12 my-5'>
                            <p> Welcome to my digital playground! As a web developer, I'm not just a code wrangler—I'm a digital magician, weaving spells with pixels and programming languages. With a love for elegant design and a flair for problem-solving, I craft immersive online experiences that captivate and inspire. From building sleek user interfaces to optimizing performance, I thrive on the challenges of the digital realm. Let's embark on a journey together where creativity knows no bounds and innovation is the name of the game.
                                <br /></p>
                        </div>
                        <div className='w-full md:w-6/12 md:pl-5 md:pt-4'>
                            <p> As a web developer, I see myself not just as a creator of websites, but as a digital architect, shaping the online world one line of code at a time. What fuels my passion? It's the thrill of problem-solving and the joy of seeing ideas come to life. But beyond the code, my true satisfaction comes from helping others realize their digital dreams. Let's collaborate and turn your vision into a pixel-perfect reality. Together, we'll build something .
                                <br />   </p>
                        </div>
                    </div>
                    <Button name="Contact Me" />
                </div>
                <div className=' w-full md:w-4/12'>
                    {/* <img src={} alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default About