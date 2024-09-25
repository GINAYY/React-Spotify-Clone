import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()

  return (
   <>
      <div className='w-full flex justify-between items-center font-semibold'>
          <div className='flex items-center gap-2'>
            {/*箭头 -1返回 1往前 */}
            <img onClick={()=>navigate(-1)} className='w-4 bg-black rounded-2xl cursor-pointer' src={assets.arrow_left} alt=''/>
            <img onClick={()=>navigate(1)} className='w-4 bg-black rounded-2xl cursor-pointer' src={assets.arrow_right} alt=''/>
          </div>
          <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block coursor-pointer'>Explore Premium</p>
            <p className='bg-black  text-[15px] px-3 py-1 rounded-2xlcoursor-pointer'>Install App</p>
            <p className='bg-purple-500 text-black items-center w-7 h-7 rounded-2xl coursor-pointer justify-center flex'>G</p>
          </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl coursor-pointer'>All</p>
        <p className='bg-black px-4 py-1 rounded-2xl coursor-pointer '>Music</p>
        <p className='bg-black px-4 py-1 rounded-2xl coursor-pointer  '>Podcasts</p>


      </div>

   </>
  )
}

export default Navbar