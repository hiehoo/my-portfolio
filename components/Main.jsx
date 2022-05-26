import React from 'react';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import {BsPersonLinesFill} from 'react-icons/bs';
import Link from 'next/link';




const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LET&apos;S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'> 
                    Hallo, I&apos;m <span className='text-[#5651e5]'> Hieu Ho</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Front-End Web Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I&apos;m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on building responsive front-end web applications while learning back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                            <Link href="https://www.linkedin.com/in/trung-hi%E1%BA%BFu-h%E1%BB%93-466812119/"><FaLinkedinIn /></Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                  <Link href="https://github.com/hiehoo"><FaGithub /></Link>
                        </div>   
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                  <a href='mailto:hieuhotrung95@gmail.com'><AiOutlineMail /></a>
                        </div>   
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                  <BsPersonLinesFill />
                        </div>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main