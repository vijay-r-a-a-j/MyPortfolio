import React from 'react'
import Myimage from '../../assets/22.png'
import Imagebg1 from '../../assets/Imagebg1.png'



const Images = () => {
  return (
    <div className=' relative  hidden lg:flex' >
        <img className='z-[1] absolute h-96  left-20 rounded-full' src={Myimage}/>
        <img className=' absolute top-[-30px]' src={Imagebg1}/>
      
    </div>
  )
}

export default Images