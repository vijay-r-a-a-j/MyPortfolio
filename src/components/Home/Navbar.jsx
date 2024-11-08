import React from 'react'
import { TbSquareLetterVFilled } from "react-icons/tb"
import { TbSquareLetterRFilled } from "react-icons/tb"

const Navbar = () => {

    const menuItems =[
        {
            name:"Home",
            link:"/"
        },
        {
            name:"About",
            link:"/"
        },
        {
            name:"Services",
            link:"/"
        },
        {
            name:"Projects",
            link:"/"
        },
        {
            name:"Contact",
            link:"/"
        }
    ]
  return (
    <div className=' flex w-full px-20 py-5 shadow-md justify-between rounded-md'>
        <div>
            <p className='flex text-2xl font-bold text-gray-600'><span>
                <TbSquareLetterVFilled className='text-4xl text-black'/></span>ijay 
               </p> 
        </div>
        <div className='my-auto'>
            <ul className='flex gap-10 '>
            {menuItems.map((item,index)=>(
                <li className='text-xl text-gray-600 hover:text-black' key={index}>
                    <a href={item.link}>{item.name}</a>
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar