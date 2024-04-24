import React from 'react'
import sape from '../assets/hero/shape-1.png'
import sape4 from '../assets/hero/shape-4.png'
import { FaLongArrowAltRight } from 'react-icons/fa'



export const Hero = () => {
  return (
    <div className='main overflow-hidden'>
        <div className=' relative'>
        <img src={sape} alt="" className='absolute top-0 left-0' />
        <div className='flex flex-col text-white text-4xl absolute top-24 left-24'>
            <p className='text-sm'>Best it solutions</p>
            <h1>Trusted it & Tech <br/> <span >Solution</span> </h1>
            <button className='flex items-center justify-center text-base bg-black py-2 w-36'>Learn More <FaLongArrowAltRight /></button>
        </div>
        <div className="absolute top-80 left-0">
            <img src={sape4} alt="" width={250} height={250} />
        </div>
        <div className='main-2 bg-blue-600 flex items-center justify-center flex-col p-5 text-white'>
            <h1>13</h1>
            <p>Year Experince</p>
        </div>
        </div>
        {/* <div className='absolute left-96 w-96 bottom-0'>
            <div className='absolute left-96 w-96 bottom-0   p-5 bg-black text-white text-center'>
                <p>Our company provides a full range of <span className='text-yellow-600'>service</span> <br /> private houses and cottage since 19 </p>
            </div>
        </div> */}
    </div>
  )
}
