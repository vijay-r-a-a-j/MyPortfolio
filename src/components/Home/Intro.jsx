import React from 'react'
import Image from '../../assets/bwimg3.jpg'
import Resume from '../../assets/VijayRaaj Resume.pdf'
import { FaPaperPlane } from "react-icons/fa"
import { MdOutlineFileDownload } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa6"
import { FaSquareGithub } from "react-icons/fa6"
import { FaSquareInstagram } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"
import Wave from "../../assets/NewWave.png"
import Images from './Images'

import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <div className='  ' >
      <img className='absolute z-[-1] w-screen h-screen hidden lg:flex ' src={Wave}/>
        <div className=' flex flex-col-reverse gap-10 lg:flex-row py-20 '>
            {/* Text section */}
            <div className='lg:w-1/2  lg:px-40 lg:py-10 justify-center' >
             <div className='text-center lg:text-start '>
            <h1 className='text-5xl lg:text-7xl font-bold text-[#1C1F36] mb-5'>Vijay Raaj </h1>
            <p className='text-2xl font-bold text-gray-900 mb-5'>FullStack Developer</p>
            
            <div className='flex flex-wrap md:flex-nowrap gap-1 md:gap-5 justify-center lg:justify-start'>
              <button className='px-5 py-2 rounded-full bg-indigo-950 text-white
                  hover:scale-105'>
                   <Link className='flex gap-2' spy={true} smooth={true}  to='contact'>Contact me <FaPaperPlane className='my-auto'/></Link></button>
              <button className='px-5 py-2 rounded-full bg-black text-white flex gap-2 hover:scale-105'>
               <a href={Resume} download>Download CV </a> 
                <MdOutlineFileDownload className='my-auto'/></button>
            </div>
            <div className='flex gap-5 mt-8 text-3xl justify-center lg:justify-start'>
              <a className='hover:scale-125 cursor-pointer' href='https://www.linkedin.com/in/vijay-raaj-15724a293'><FaLinkedin /></a>
              <a className='hover:scale-125 cursor-pointer' href='https://github.com/vijay-r-a-a-j'><FaSquareGithub /></a>
              <a className='hover:scale-125 cursor-pointer' href='https://www.instagram.com/_vijay__teja_/profilecard/?igsh=OG9oN3VvZTIzNGM5'><FaSquareInstagram /></a>
              <a className='hover:scale-125 cursor-pointer' href='https://www.facebook.com/vijay.teja.370?mibextid=ZbWKwL'><FaFacebookSquare /></a>
            </div>
            </div>
            </div>
            {/* Image section*/}
           <div className='w-1/2  mx-auto  lg:mt-0 '>
            <img  className='w-auto mx-auto block lg:hidden h-44 lg:h-96 rounded-full lg:rounded-lg shadow-gray-600 shadow-lg' src={Image}/>
            <Images/>
            
            </div>
        </div>
    </div>
  )
}

export default Intro