import React from 'react';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import {BsPersonLinesFill} from 'react-icons/bs';




const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LET"S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'> 
                    Hallo, I'm <span className='text-[#5651e5]'> Hieu Ho</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Front-End Web Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive front-end web appications while leanding back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                  <FaGithub />
                        </div>   
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                  <AiOutlineMail />
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