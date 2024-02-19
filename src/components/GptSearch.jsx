import React from 'react'
import GptSearchBar from './gptSearchBar'
import GptMovieSuggestions from './gptMovieSuggestions'
import { CONSTANTS } from '../utils/Constants'
const GptSearch = () => {
  return (
    <div>
        <div className=' fixed -z-10'>
        <img src={CONSTANTS.BG} alt='background image'/>
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/> 
    </div>
  )
}

export default GptSearch