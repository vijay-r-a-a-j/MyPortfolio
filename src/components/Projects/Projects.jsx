import React from 'react'
import ProjectImg1 from '../../assets/DremyImage.png'
import ProjectImg2 from '../../assets/ElearnImage.png'
import ProjectImg3 from '../../assets/EventImage.png'

const Projects = () => {
   
  const myProjects =[
    {
      img:ProjectImg1,
      link:"https://dremy-property-website.vercel.app/",
      title:"Property Management website",
      tech:"React, Tailwind CSS"
    },
    {
      img:ProjectImg2,
      link:"https://e-learn-website-eight.vercel.app/",
      title:"E-learn website",
      tech:"React, Tailwind CSS"
    },
    {
      img:ProjectImg3,
      link:"https://event-management-website-theta.vercel.app/",
      title:"Event Management website",
      tech:"Html, CSS, JS"
    }
  ]
  return (
    <div className=' py-20 ' id="projects">
      <h1 className='text-5xl font-bold text-indigo-950 
           text-center  mb-5 underline'> Projects</h1>
      <p className='text-2xl font-bold italic text-center
            text-indigo-950 mb-10 '>My Recent works</p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            gap-10 mx-3 md:mx-10 lg:mx-20 pb-10'>
        {myProjects.map((data,index)=>(
          <div className='p-3 rounded-md shadow-2xl bg-slate-50' key={index}>
            <a href={data.link}>
            <img className='mb-5 rounded-md shadow-xl' src={data.img}/>
            <p className='mb-5 '><span className='text-xl text-indigo-950 font-bold'>
              Title : </span>{data.title}</p>
            <p className=''> <span className='text-xl text-indigo-950 font-bold'>
              Technologies :</span>{data.tech}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;