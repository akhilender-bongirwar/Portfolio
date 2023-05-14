import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-0'>
                <div className='sm:text-right pb-8 pl-4'>
                 <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-0'>
                <div>
                    <p>Hi there I am Akhil, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About