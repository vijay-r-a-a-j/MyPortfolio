import React, { useState } from 'react'
import { TbSquareLetterVFilled } from "react-icons/tb"
import { FaXmark } from "react-icons/fa6"
import { MdMenu } from "react-icons/md"
import {Link } from "react-scroll"


const Navbar = () => {

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

     const[open,setOpen] = useState(false)

  return (
    <div className=' flex w-full px-5 lg:px-20 py-5 shadow-md justify-between rounded-md '>
        <div>
            <p className='flex text-2xl font-bold text-gray-600'><span>
                <TbSquareLetterVFilled className='text-4xl text-black'/></span>ijay 
               </p> 
        </div>
        <div className=''>
            <ul className={`flex flex-col lg:flex-row gap-5 lg:gap-10  text-xl 
                            h-screen lg:h-auto mt-12 lg:mt-1 absolute  lg:static left-0
                               text-white bg-slate-50 z-10
                                lg:text-white w-full py-10 lg:py-0 px-5 transition-all duration-500 ease-in
                                     ${open?"left-0":"left-[-800px] md:left-[-1000px]"}`}>
            {menuItems.map((item,index)=>(
                <li  className='text-xl text-gray-600 hover:text-black cursor-pointer' key={index}>
                     <Link onClick={()=>setOpen(!open)} spy={true} smooth={true}  to={item.path}>{item.link}</Link>
                </li>
            ))}
            </ul>
        </div>
        <button onClick={()=>setOpen(!open)} className='lg:hidden '>
        {open?<FaXmark className=' text-4xl text-gray-800 '/>:<MdMenu className='text-4xl text-gray-800'/>}
        </button>
    </div>
  )
}

export default Navbar