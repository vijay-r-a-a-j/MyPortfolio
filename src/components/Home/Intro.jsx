import React from 'react'
import Image from '../../assets/blueshirt1.jpg'
import { FaPaperPlane } from "react-icons/fa"
import { MdOutlineFileDownload } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa6"
import { FaSquareGithub } from "react-icons/fa6"
import { FaSquareInstagram } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"

const Intro = () => {
  return (
    <div className='px-20 py-20'>
        <div className='flex'>
            {/* Text section */}
            <div className='w-1/2 px-32 py-20'>
             <div>
            <h1 className='text-7xl font-bold text-gray-800 mb-5'>Vijay Raaj </h1>
            <p className='text-2xl font-bold text-gray-900 mb-5'>FullStack Developer</p>
            
            <div className='flex gap-5'>
              <button className='px-5 py-2 rounded-full bg-indigo-950 text-white flex gap-2 hover:scale-105'>Contact me <FaPaperPlane className='my-auto'/></button>
              <button className='px-5 py-2 rounded-full bg-black text-white flex gap-2 hover:scale-105'>Download CV <MdOutlineFileDownload className='my-auto'/></button>
            </div>
            <div className='flex gap-5 mt-10 text-3xl'>
              <a className='hover:scale-125 cursor-pointer'><FaLinkedin /></a>
              <a className='hover:scale-125 cursor-pointer'><FaSquareGithub /></a>
              <a className='hover:scale-125 cursor-pointer'><FaSquareInstagram /></a>
              <a className='hover:scale-125 cursor-pointer'><FaFacebookSquare /></a>
            </div>
            </div>
            </div>
            {/* Image section*/}
            <div className='w-1/2'>
            <img  className='w-auto h-96 rounded-lg mx-auto' src={Image}/>

            </div>
        </div>
    </div>
  )
}

export default Intro