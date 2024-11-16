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
      name:"Html",
      color:"#EC9910"
    },
    {
      icon:<FaCss3Alt />,
      name:"CSS",
      color:"#2A8FFF"
    },
    {
      icon:<IoLogoJavascript />,
      name:"JavaScript",
      color:"#FFF04F"
    },
    {
      icon:<FaReact />,
      name:"React",
      color:"#5FA2EC"
    },
    {
      icon:<RiTailwindCssFill />,
      name:"Tailwind css",
      color:"#5FA2EC"
    },
    {
      icon:<FaNodeJs />,
      name:"Node Js",
      color:"#5C9A5C"
    },
    {
      icon:<SiMongodb />,
      name:"MongoDB",
      color:"#5C9A5C"
    },
    {
      icon:<SiCplusplus />,
      name:"C++",
      color:"#1F85E7"
    }
  ]
  return (
    <div className='mt-5 '>
      <h1 className='text-3xl font-bold text-indigo-950 flex gap-2 mb-5'>Skills
        <span className='text-2xl my-auto'><GiSpanner /></span></h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
          {skills.map((item,index)=>(
            <div className='px-3 py-5 shadow-2xl border-indigo-950 
            border-b-4 border-r-4 rounded-lg text-center
             hover:scale-105 cursor-pointer bg-gray-700' key={index}>
               <p className={`text-6xl text-white ml-5`}>{item.icon}</p>
               <p className='text-white'>{item.name}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Skills