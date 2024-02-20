import React from 'react'
import Line from './Line'
import WorkBox from './WorkBox'

function Work() {
    return (
        <div className='w-full my-20'>
            <Line title="Work Experience" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <div className='my-10'>
                <div className='flex flex-col md:flex-row flex-wrap justify-evenly'>
                    <WorkBox time="2015-2018" width="w-full mb-5 md:mb-0 md:w-3/12" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." title="UI/UX Designer" />
                    <WorkBox time="2015-2018" width="w-full mb-5 md:mb-0 md:w-3/12" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." title="UI/UX Designer" />
                    <WorkBox time="2015-2018" width="w-full mb-5 md:mb-0 md:w-3/12" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." title="UI/UX Designer" />
                </div>
                <div className='flex flex-col md:flex-row flex-wrap mt-10 justify-evenly'>
                    <WorkBox time="2015-2018" width="w-full mb-5 md:mb-0 md:w-5/12" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." title="UI/UX Designer" />
                    <WorkBox time="2015-2018" width="w-full mb-5 md:mb-0 md:w-5/12" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." title="UI/UX Designer" />
                </div>
            </div>
        </div>
    )
}

export default Work