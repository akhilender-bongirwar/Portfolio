import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                 <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                 About
                </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'> 
                    <p>Hi there I am Akhil, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>
                        I am passionate about learning and building new things using the technology which helps the 
                        people around me.I am a student and an excellent learner and would like to work and learn new
                        things while working on it itselves. What would you do if you had an enthusiastic and energetic developer
                        looking forward to work on new things available at your fingertips?
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About