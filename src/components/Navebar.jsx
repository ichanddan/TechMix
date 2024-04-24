import React from 'react'
import logo from '../assets/logo/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from 'react-icons/fa';

export const Navebar = () => {
  return (
    <div>
        <div className='flex items-center justify-around'>
            <div className='flex p-5 gap-7 items-center'>
            <div className="bg-black p-7">
            <GiHamburgerMenu className='text-white text-2xl'/>
            </div>
                <div>
                    <img src={logo} alt="" />
                </div>
                <a href="/">Home</a>
                <a href="/">Company</a>
                <a href="/">Servic</a>
                <a href="/">Page</a>
                <a href="/">Blog</a>
            </div>
            <div>
                <div className='flex items-center gap-7'>
                <FaSearch />
                <button className='p-5 bg-black text-white'>Get Started Today</button>
                </div>
            </div>
        </div>
    </div>
  )
}
