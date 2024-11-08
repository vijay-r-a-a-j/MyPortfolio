import React from 'react'
import { FaHtml5 } from "react-icons/fa"
import { GiSpanner } from "react-icons/gi"
import { FaCss3Alt } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa6"
import { SiMongodb } from "react-icons/si"
import { SiCplusplus } from "react-icons/si"

const Skills = () => {
  const skills = [
    {
      icon:<FaHtml5 />,
      name:"Html"
    },
    {
      icon:<FaCss3Alt />,
      name:"CSS"
    },
    {
      icon:<IoLogoJavascript />,
      name:"JavaScript"
    },
    {
      icon:<FaReact />,
      name:"React"
    },
    {
      icon:<RiTailwindCssFill />,
      name:"Tailwind css"
    },
    {
      icon:<FaNodeJs />,
      name:"Node Js"
    },
    {
      icon:<SiMongodb />,
      name:"MongoDB"
    },
    {
      icon:<SiCplusplus />,
      name:"C++"
    }
  ]
  return (
    <div>
      <h1 className='text-3xl font-bold text-indigo-950 flex gap-2 mb-5'>Skills
        <span className='text-2xl my-auto'><GiSpanner /></span></h1>
        <div className='grid grid-cols-4 gap-5'>
          {skills.map((item,index)=>(
            <div className='px-3 py-5 shadow-xl border-indigo-950 
            border-b-4 border-r-4 rounded-lg text-center
             hover:scale-105 cursor-pointer' key={index}>
               <p className='text-6xl text-blue-800 ml-5 '>{item.icon}</p>
               <p >{item.name}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Skills