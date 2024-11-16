import React from 'react'
import { FaGraduationCap } from "react-icons/fa"
import { FaCalendarAlt } from "react-icons/fa"

const Qualification = () => {

  const educationInfo = [
    {
      university:"St Joseph's college of arts and science, Cuddalore",
      degree:"B. Sc Computer Science",
      batch:"2020-2023"
    },
    {
      university:"ARLM Matriculation Higher Sec School, Cuddalore",
      degree:"HSC",
      batch:"2019-2020"
    },
    {
      university:"St Antonys Matriculation Hr Sec School,Cuddalore",
      degree:"SSLC",
      batch:"2017-2018"
    }
  ]
  return (
    <div className='mt-10 lg:mt-5'>
      <h1 className='text-2xl md:text-3xl font-bold text-gray-800 flex gap-3'><span className='my-auto'><FaGraduationCap /></span>Educational journey</h1>
      <div className='grid grid-cols-1 gap-2'>
        {educationInfo.map((item,index)=>(
          <div className='border-b-blue-950  border-b-4  rounded-xl shadow-md px-5 py-5' key={index}>
             <h1 className='text-xl text-indigo-950 font-semibold mb-1'>{item.university}</h1>
             <p className='mb-1'>{item.degree}</p>
             <p className='text-blue-950 flex gap-3 '><span className='my-auto'><FaCalendarAlt /></span>{item.batch}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Qualification