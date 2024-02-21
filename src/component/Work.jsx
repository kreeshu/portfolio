import React from 'react'
import Line from './Line'
import WorkBox from './WorkBox'

function Work() {
    return (
        <div className='w-full my-20'>
            <Line title="Work Experience" text="Transforming Moments into Memories: Experience the Difference." />
            <div className='my-10'>
                <div className='flex flex-col md:flex-row flex-wrap justify-evenly'>
                    <WorkBox time="2020-2022" width="w-full mb-5 md:mb-0 md:w-3/12" text=" Presenting design concepts and recommendations to clients, stakeholders, and project teams, and incorporating feedback into the design process." title="Client Communication" />
                    <WorkBox time="2023-2023" width="w-full mb-5 md:mb-0 md:w-3/12" text="Working closely with cross-functional teams, including product managers, developers, and marketers, to align design decisions with business goals and technical constraints." title="Collaboration" />
                    <WorkBox time="2023-2024" width="w-full mb-5 md:mb-0 md:w-3/12" text="Defining how users interact with digital products through animations, transitions, and micro-interactions." title="Interaction Design" />
                </div>
                <div className='flex flex-col md:flex-row flex-wrap mt-10 justify-evenly'>
                    <WorkBox time="2024-2024" width="w-full mb-5 md:mb-0 md:w-5/12" text="Participating in design sprints, agile development cycles, and continuous improvement initiatives to refine designs based on user feedback and data analysis." title="Iterative Design Process" />
                    <WorkBox time="2024-2025" width="w-full mb-5 md:mb-0 md:w-5/12" text=" Evaluating prototypes and live products to identify usability issues and gather feedback for iterative improvements." title="Usability Testing" />
                </div>
            </div>
        </div>
    )
}

export default Work