import React from 'react'
import { GoPersonFill } from "react-icons/go"
import { MdEmail } from "react-icons/md"
import { FaGraduationCap } from "react-icons/fa"
import { FaPhoneVolume } from "react-icons/fa6"
import { FaCalendarAlt } from "react-icons/fa"
import { IoMdHome } from "react-icons/io"

const PersonalInfo = () => {
   const info = [
    {
      icon:<GoPersonFill />,
      desc:"Vijay Raaj"
    },
    {
      icon:<MdEmail />,
      desc:"vijayteja648@gmail.com"
    },
    {
      icon:<FaGraduationCap />,
      desc:"Bachelors in Computer science"
    },
    {
      icon:<FaPhoneVolume />,
      desc:"83006 06225"
    },
    {
      icon:<FaCalendarAlt />,
      desc:"Born on 7th May, 2002"
    },
    {
      icon:<IoMdHome />,
      desc:"Cuddalore, Tamilnadu"
    }
   ]

  return (
    <div>
      <div className='text-start'>
        <h1 className=' text-4xl font-bold mb-5 mt-5 text-gray-800'>Hi, Im Vijay Raaj</h1>
        <p>Enthusiastic and detail-oriented Computer science graduate 
          seeking an <br/>entry-level position to apply my skills 
          in software development and problem-solving</p>
      </div>
      <div className='text-start mt-5 md:grid grid-cols-2 gap-10 '>
        {info.map((data,index)=>(
          <p key={index} className='flex gap-5 font-semibold'><span className='my-auto text-blue-950'>{data.icon}</span> {data.desc}</p>
        ))}
      </div>
      <div  className='mt-10 text-start'>
        <h1 className='text-xl text-indigo-950 font-bold mb-3'>Language Skills</h1>
        <p>Tamil,English</p>
      </div>
    </div>
  )
}

export default PersonalInfo