import React from 'react'

const VideoTitle = (props) => {
const {title,overview}=props
  return (
    <div className=' w-screen aspect-video pt-[12%] px-6 md:px-24 absolute bg-gradient-to-r from-black'>
    <h1 className='md:text-5xl text-lg  text-white font-bold'>{title}</h1>
    <p className=' hidden md:inline-block py-8 text-white text-lg w-1/4'>{overview}</p>
    <div className='flex '>
      <button className='bg-white hover:bg-opacity-70 text-black px-3 md:px-12 rounded-lg py-1 md:py-4 text-lg  font-bold '>🪒   Play</button>
      <button className='hidden md:inline-block bg-gray-500 hover:bg-opacity-70 text-black md:ml-2 md:px-12 rounded-lg md:py-4 text-lg   font-bold '>More Info</button>  
    </div>
    </div>
  )
}

export default VideoTitle