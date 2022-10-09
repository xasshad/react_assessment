import React from 'react'
import ResourcesImg from '../assets/resources.png'

const Resources = () => {
  return (
    <div className="w-full py-16 px-4">
        <div className="'max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className='w-[500px] mx-auto my-4' src={ResourcesImg} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>DATA RESOURCING</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'>When you have more data, you win.</h1>
          <p className="text-white">
            We provide our clients top-of-the-line services and resources that will give them an edge. From data warehousing, visualisations and reporting, to consultancy and training.
          </p>
          <button className='text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Learn More</button>
        </div>
        </div>
    </div>
  )
}

export default Resources