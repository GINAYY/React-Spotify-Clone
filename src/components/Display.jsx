import React, { useEffect } from 'react'
import { Route , Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { useRef } from'react'
import { albumsData } from '../assets/assets'


function Display() {
  
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
    {/* console.log(location.pathname);
    判断是否是专辑页面 */}
  const albumId = isAlbum ? location.pathname.slice(-1):"";
    {/* console.log(albumId);
      获取专辑ID:
      从路径名中提取专辑ID。
      如果当前页面是专辑页面（isAlbum为true），
     */}
  const bgColor = albumsData[Number(albumId)].bgColor; // 根据专辑ID获取背景颜色
  {/*渐变效果 */}
  useEffect(()=>{
    if(isAlbum){
       displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
    }else{
      displayRef.current.style.background = `#121212`
    }
  })


  return (

    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route path='/' element={<DisplayHome/>} />
            <Route path='/album/:id' element={<DisplayAlbum/>} />
        </Routes>
    </div>

  )
}

export default Display