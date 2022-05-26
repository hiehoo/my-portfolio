import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'

import ProjectItems from './ProjectItems';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
           <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
           <h2 className='py-4 uppercase font-semibold'>What I&apos;ve built</h2>
           <div className='grid md:grid-cols-2 gap-8'>
                  <ProjectItems tittle='Property Finder' backgroundImg={propertyImg} projectUrl='/property' />  
                  <ProjectItems tittle='Crypto Application' backgroundImg={cryptoImg} projectUrl='/crypto' />  
                  <ProjectItems tittle='Neflix' backgroundImg={netflixImg} projectUrl='/netflix' />  
                  <ProjectItems tittle='Twitch' backgroundImg={twitchImg} projectUrl='/twitch' />             
            </div> 

        </div>
    </div>
  )
}

export default Projects