import React from 'react'
import { TbSquareLetterVFilled } from "react-icons/tb"
import { FaLinkedin } from "react-icons/fa6"
import { FaSquareGithub } from "react-icons/fa6"
import { FaSquareInstagram } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"
import {Link } from "react-scroll"

const Footer = () => {

    const menuItems =[
        {
            link:"Home",
            path:"home"
        },
        {
            link:"About",
            path:"about"
        },
        {
            link:"Projects",
            path:"projects"
        },
        {
            link:"Contact",
            path:"contact"
        }
    ]

  return (
    <div className='px-5 py-5 lg:px-20 lg:py-10 bg-slate-300'>
        {/*Footer content */}
        <div className='flex flex-wrap lg:flex-nowrap gap-5 justify-between border-b py-2 border-black'>
              <div>
                 <p className='flex text-2xl font-bold text-gray-600'><span>
                 <TbSquareLetterVFilled className='text-4xl text-black'/></span>ijay 
                 </p> 
              </div>
              <div className='my-auto'>
                <ul className='flex flex-wrap lg:flex-nowrap gap-5'>
                 {menuItems.map((item,index)=>(
                    <li  className='text-xl text-gray-600 hover:text-black cursor-pointer' key={index}>
                     <Link  spy={true} smooth={true}  to={item.path}>{item.link}</Link>
                    </li>
                  ))}
                  </ul>
              </div>
              <div className='flex gap-5 text-3xl'>
              <a className='hover:scale-125 cursor-pointer' href='https://www.linkedin.com/in/vijay-raaj-15724a293'><FaLinkedin /></a>
              <a className='hover:scale-125 cursor-pointer'  href='https://github.com/vijay-r-a-a-j'><FaSquareGithub /></a>
              <a className='hover:scale-125 cursor-pointer' href='https://www.instagram.com/_vijay__teja_/profilecard/?igsh=OG9oN3VvZTIzNGM5'><FaSquareInstagram /></a>
              <a className='hover:scale-125 cursor-pointer' href='https://www.facebook.com/vijay.teja.370?mibextid=ZbWKwL'><FaFacebookSquare /></a>
              </div>
        </div>
        {/*Copyright section */}
        <div className='py-2'>
            <p className='text-xl text-gray-600'>Vijay @ 2024. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer