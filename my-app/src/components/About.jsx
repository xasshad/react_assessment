import React from 'react'
import AboutImg from '../assets/about.png'

const About = () => {
  return (
    <div className="w-full py-16 px-4">
        <div className="'max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className='w-[500px] mx-auto my-4' src={AboutImg} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>WHO WE ARE</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold text-white py-2'>Our Team</h1>
          <p className="text-white">
          DATABLAST. is a start-up company launched on June 2022. We are based in Tāmaki Makaurau - Auckland, New Zealand. Our platform allows local and international organisations to integrate, process, and prepare
          data for analytics on the cloud. We aim to simplify the experience for our clients to ensure their rise to great heights.
          </p>
          <button className='text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default About