import React from 'react'
import HTML from '../assests/html.png'
import CSS from '../assests/css.png'
import GitHub from '../assests/github.png'
import Node from '../assests/node.png'
import Javascript from '../assests/javascript.png'
import react from '../assests/react.png'
import Tailwind from '../assests/tailwind.png'
import Mongo from '../assests/mongo.png'

function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 pb-12'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>These are the technologies I've worked with </p>
            </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt='html icon'/>
                <p className='my-4'>HTML5</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={CSS} alt='html icon'/>
                <p className='my-4'>CSS3</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={Javascript} alt='html icon'/>
                <p className='my-4'>Javascript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={GitHub} alt='html icon'/>
                <p className='my-4'>GitHub</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={Node} alt='html icon'/>
                <p className='my-4'>Node JS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={react} alt='html icon'/>
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={Tailwind} alt='html icon'/>
                <p className='my-4'>Tailwind CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={Mongo} alt='html icon'/>
                <p className='my-4'>MongoDB</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills