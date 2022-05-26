import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsPersonLinesFill} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'> Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-2'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src="/../public/assets/contact.avif" alt='/' width="2671" height="1780" />
                        </div>
                        <div>
                            <h2 className='py-2'>Hieu Ho </h2>
                            <p>Front-end Developer</p>
                            <p className='py-4'>I&apos;m available for freelance or full-time position. Contact me and let&apos;s talk.</p>
                        </div>
                        <div>
                        <p className='uppercase pt-8'>Connect With Me</p>
                        <div className='flex items-center justify-between py-4'>
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
    {/* Right col */}
        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>

                <form>
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>Name</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>Phone Number</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
                        </div>                                            
                    </div>
                    <div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Email</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' />
                        </div>    
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Subject</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
                        </div>    
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Message</label>
                            <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' type='text' />
                        </div>   
                    </div> 
                    <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                </form>
            </div>
        </div>
                                                        
      </div>
            <div className='flex justify-center py-12'>
            <Link href='/'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300 '>
                    <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
                </div>
            </Link>
            </div>
    </div>

</div>
  )
}

export default Contact