import React from 'react'

function Title({title}) {
    return (
        <div className='flex flex-col mt-10 mb-20'>
            <h1 className={`text-5xl font-noto font-medium py-3 text-center`}>{title}</h1>
            <div className={`w-[80px] my-1 h-[2px] bg-orange-500 rounded-sm mx-auto`}></div>
        </div>
    )
}

export default Title