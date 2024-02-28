import React from 'react'
import GptSearchBar from './gptSearchBar'
import GptMovieSuggestions from './gptMovieSuggestions'
import { CONSTANTS } from '../utils/Constants'
const GptSearch = () => {
  return (
    <div>
        <div className=' fixed -z-10'>
        <img className='h-screen object-cover md:w-screen' src={CONSTANTS.BG} alt='background image'/>
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/> 
    </div>
  )
}

export default GptSearch