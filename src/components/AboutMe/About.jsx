import { useState } from 'react'
import React  from 'react'
import Image from '../../assets/blueshirt1.jpg'
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
    <div className='text-center  py-10 rounded-sm'>
        <h1 className='text-5xl font-bold mb-10 text-indigo-950'>About Me</h1>
        <div className='flex px-20 '>
        {/*Image section */}
        <div className='w-1/2 hidden lg:flex'>
            <img className=' mx-auto w-auto h-[500px] rounded-2xl ' src={Image}/>
        </div>
        {/*Info section */}
        <div className='w-1/2'>
        <div className="flex">
          <button
            className={` px-5 py-1  text-xl  rounded ${
              activeTab === 'PersonalInfo' ? 'border-b-indigo-950 text-indigo-950 border-b-4' : ''
            }`}
            onClick={() => setActiveTab('PersonalInfo')}
          >
            Personal Info
          </button>
          <button
            className={` px-5 py-1  text-xl rounded ${
              activeTab === 'Qualification' ? 'border-b-indigo-950 text-indigo-950 border-b-4' : ''
            }`}
            onClick={() => setActiveTab('Qualification')}
          >
            Qualification
          </button>
          <button
            className={` px-5 py-1  text-xl rounded ${
              activeTab === 'Skills' ? 'border-b-indigo-950 text-indigo-950 border-b-4' : ''
            }`}
            onClick={() => setActiveTab('Skills')}
          >
            Skills
          </button>
        </div>

        {/* Content */}
        <div className="p-4 text-start">
          {renderContent()}
        </div>
        </div>
        </div>
    </div>
  )
}

export default About