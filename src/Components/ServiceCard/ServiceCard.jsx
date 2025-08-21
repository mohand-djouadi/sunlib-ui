import React from 'react'
import TitleSeparator from '../TitleSeprator/TitleSeparator'

const ServiceCard = ({ service }) => {
  return (
    <>
      <div className='flex flex-col justify-center items-center px-1 py-4 border-primary border-2 w-[80%] mx-auto my-9 rounded-2xl lg:w-[30%] lg:flex lg:flex-row lg:justify-evenly lg:h-65 lg:p-1'>
        <img className='w-52 h-55 lg:w-30 lg:h-53' src={service.image} alt={service.title} />
        <div className='w-65 lg:w-40'>
          <h4 className='text-center font-secondary text-4xl mb-5 lg:text-2xl dark:text-white lg:w-45'>{service.title}</h4>
          <p className='lg:w-45 dark:text-white'>{service.description}</p>
        </div>
      </div>
    </>
  )
}

export default ServiceCard