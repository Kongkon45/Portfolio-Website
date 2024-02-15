import React from 'react'
import About_Img from '../../assets/Images/banner-img.png'
const About_Us = () => {
  return ( 
    <div className='bg-gray-300 py-12'>
      <h2 className='text-4xl text-center font-bold'>About Me</h2>
       <div className=' container w-full  mx-auto lg:flex  justify-between items-center'>
      <div className='w-full lg:w-96  h-64 px-5 mb-32 lg:mb-24'>
        <img className='w-full rounded-full border-2 bg-white' src={About_Img} alt="About_Us Image" />
      </div>
      <div className='w-full lg:w-3/5 px-2'>
          <p className='text-justify text-xl'>Hi I'm Kongkon Jowarder, I'm a Front-End Developer. Experiences Html, Css, Bootstrap, Tailwind-Css, Javascript, React Js, Redux-Toolkit etc. I never stop until solve a problem. and love to finish any work efficiently.</p>
          <p className='text-justify text-xl pt-4'>Highly motivated and detail-oriented web developer with over 2 years of experience in developing responsive websites and applications.</p>
      </div>
    </div>
    </div>
  )
}

export default About_Us