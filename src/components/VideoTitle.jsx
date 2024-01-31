import React from 'react'

const VideoTitle = (props) => {
const {title,overview}=props
  return (
    <div className=' w-screen aspect-video pt-[12%] px-24 absolute bg-gradient-to-r from-black'>
    <h1 className='text-5xl text-white font-bold'>{title}</h1>
    <p className='py-6 text-white text-lg w-1/4'>{overview}</p>
    <div className=''>
      <button className='bg-white hover:bg-opacity-70 text-black px-12 rounded-lg py-4 text-lg mx-2 font-bold '>🪒   play</button>
      <button className='bg-gray-500 hover:bg-opacity-70 text-black px-12 rounded-lg py-4 text-lg  mx-2 font-bold '>More Info</button>  
    </div>
    </div>
  )
}

export default VideoTitle