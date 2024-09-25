import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from'react-router-dom'


export const Sidebar = () => {
  
  const navigate = useNavigate();


  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] rounded h-[15%] flex flex-col justify-around'>
        <div onClick={() => navigate('/')} className='flex items-center gap-3 pl-8 curson-pointer '>
            <img className='w-6' src={assets.home_icon} alt=""/>
            <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 curson-pointer '>
            <img className='w-6' src={assets.search_icon} alt=""/>
            <p className='font-bold'>Search</p>
        </div>
      </div>
      <div className='bg-[#121212] rounded h-[85%] '>
        <div className='flex items-center justify-between p-4'>
          <div className='flex items-center gap-3'>
             <img className='w-8' src={assets.stack_icon} alt=''/>
             <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon} alt=""/>
            <img className='w-5' src={assets.plus_icon} alt=""/>
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
             <h1> Create your first playist</h1>
             <p className='front-light'>it's easy we will help you </p>
             <button className='bg-white text-[15px] px-4 py-1.5 rounded-full text-black rounded-full mt-4'>Create Playist</button>
        </div> 
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
             <h1> Let's find some podcasts to follow</h1>
             <p className='front-light'>we'll keep you update on new epsiodes </p>
             <button className='bg-white text-[15px] px-4 py-1.5 rounded-full text-black rounded-full mt-4'>Browse podcasts</button>
        </div> 
      </div>
    </div>
  )
}

export default Sidebar