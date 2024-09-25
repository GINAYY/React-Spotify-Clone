import React ,{ useContext } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';


const Player = () => {
    const {track,seekBar,seekBg,playStatus,play,pause,time,previous,next,seekSong} = useContext(PlayerContext);

    return (
        <div className='bg-black text-white flex justify-between items-center p-4  h-[10%]'>
            <div className='hidden lg:flex items-center gap-4'>
                <img src={track.image} alt="" className='w-12' />
                <div>
                    <p> {track.name}</p>
                    <p> {track.desc.slice(0, 12)}</p>
                </div>
            </div>
            
            <div className='flex gap-1 m-auto flex-col items-center'>
                <div className='flex gap-4'>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt='' />
                    <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt='' />
                    {playStatus? 
                    <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt='' /> 
                    : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt='' />
                    }
                    
                    <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt='' />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt='' />
                </div>           
                <div className='flex items-center gap-5 '>
                   <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                   <div ref = {seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                   </div>
                   <p>{time.totalTime.minute}:{time.totalTime.second}</p>
               </div>
            </div>
            
            <div className='hidden lg:flex gap-2 items-center opacity-75'>
                <img src={assets.play_icon} alt="" className='w-4' />
                <img src={assets.mic_icon} alt="" className='w-4' />
                <img src={assets.queue_icon} alt="" className='w-4' />
                <img src={assets.speaker_icon} alt="" className='w-4' />
                <img src={assets.volume_icon} alt="" className='w-4' />

                <div className='w-20 bg-slate-50 rounded h-1'>

                </div>
                <img src={assets.mini_player_icon} alt="" className='w-4' />
                <img src={assets.zoom_icon} alt="" className='w-4' />
            </div>         
        </div>
        
  )
}

export default Player;
