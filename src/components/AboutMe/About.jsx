import { useState } from 'react'
import React  from 'react'
import Image from '../../assets/Newimg.jpg'
import PersonalInfo from './PersonalInfo';
import Qualification from './Qualification';
import Skills from './Skills';


const About = () => {
    
  const [activeTab, setActiveTab] = useState('PersonalInfo');

  const renderContent = () => {
    switch (activeTab) {
      case 'PersonalInfo':
        return <PersonalInfo />;
        case 'Qualification':
          return <Qualification />;
        case 'Skills':
          return <Skills/>;
      default:
        return null;
    }
  }

  return (
    <div className='text-center lg:mt-32 pt-10 bg-[#ebf0f3] ' id='about' >
      
        <h1 className='text-5xl font-bold  mb-10 text-indigo-950 underline'>About Me</h1>
        <div className='flex  lg:px-20 '>
        {/*Image section */}
        <div className='w-1/2 hidden lg:flex'>
            <img className=' mx-auto w-auto h-[500px] rounded-2xl ' src={Image}/>
        </div>
        {/*Info section */}
        <div className='lg:w-1/2 w-full  '>
        <div className=''>
        <div className="flex flex-wrap lg:flex-nowrap gap-5 ">
          <button
            className={` px-5 py-1  border-b-indigo-950 border-b-4  rounded ${
              activeTab === 'PersonalInfo' ? 'bg-indigo-950 text-white rounded-lg' : ''
            }`}
            onClick={() => setActiveTab('PersonalInfo')}
          >
            Personal Info
          </button>
          <button
            className={` px-5 py-1  border-b-indigo-950 border-b-4  rounded ${
              activeTab === 'Qualification' ? 'bg-indigo-950 text-white rounded-lg' : ''
            }`}
            onClick={() => setActiveTab('Qualification')}
          >
            Qualification
          </button>
          <button
            className={` px-5 py-1  border-b-indigo-950 border-b-4 rounded ${
              activeTab === 'Skills' ? 'bg-indigo-950 text-white rounded-lg' : ''
            }`}
            onClick={() => setActiveTab('Skills')}
          >
            Skills
          </button>
        </div>
        </div>
        {/* Content */}
        <div className=" w-screen lg:w-auto text-start px-2 ">
          {renderContent()}
        </div>
        </div>
        </div>
    </div>
  )
}

export default About