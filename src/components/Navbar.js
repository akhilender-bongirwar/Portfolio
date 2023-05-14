import React, { useState } from 'react'
import {FaBars, FaGithub, FaLinkedin, FaTimes} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {Link} from 'react-scroll'

function Navbar() {
    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <>
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            {/* logo */}
            <h1 className='text-5xl'><em>AB</em></h1>
        </div>
            <ul className='hidden md:flex'>
        <li>
        <Link className='hover:text-pink-600' to="home" smooth={true} duration={500}>
         Home
        </Link>
        </li>
        <li>
        <Link className='hover:text-pink-600' to="about" smooth={true} duration={500}>
        About
        </Link>
        </li>
        <li><Link className='hover:text-pink-600' to="skills" smooth={true} duration={500}>
         Skills
        </Link></li>
        <li><Link className='hover:text-pink-600' to="contact" smooth={true} duration={500}>
        Contact
        </Link>
        </li>
        </ul>
            {/* hamburgermenu */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>
            {/* small width */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                <Link className='hover:text-pink-600' onClick={handleClick} to="home" smooth={true} duration={500}>
         Home
        </Link></li>
                <li className='py-6 text-4xl'>
                <Link className='hover:text-pink-600' onClick={handleClick} to="about" smooth={true} duration={500}>
        About
        </Link></li>
                <li className='py-6 text-4xl'><Link className='hover:text-pink-600' onClick={handleClick} to="skills" smooth={true} duration={500}>
         Skills
        </Link></li>
                <li className='py-6 text-4xl'><Link className='hover:text-pink-600' onClick={handleClick} to="contact" smooth={true} duration={500}>
        Contact
        </Link></li>
            </ul>

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-center item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-center item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-center item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar