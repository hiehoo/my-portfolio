import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import netflixImage from '../public/assets/projects/netflix.jpg';
import {RiRadioButtonFill} from 'react-icons/ri';

const netflix = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:w-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 '/> 
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={netflixImage} alt='/' />
        <div  className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Netflix Clone</h2>
          <h3> React Js / Tailwind/ Firebase</h3>
        </div> 
      </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p> Project</p>
            <h2>Overview</h2>
            <p>
            This app was built using React JS and is hosted on Firebase.
            </p>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            <button className='px-8 py-2 mt-4'>Code</button>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gay-400 rounded-xl p-4'>
              <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                <div>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1'/>Javascript</p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1'/>Tailwindcss</p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1'/>Firebase</p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1'/>Reactjs</p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1'/>GoogleAPI</p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1'/>ZillowAPI</p>
                </div>
          
              </div>
            </div>
          </div>    
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
        
    </div>
  )
}

export default netflix