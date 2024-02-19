import React from 'react'
import { IMAGE_CDN } from '../utils/tmdb'

const MovieCard = ({posterPath}) => {
  if(!posterPath)return null
  return (
    <div className='w-48 mr-4'>
        <img src={IMAGE_CDN + posterPath} 
        alt ="movie image"/>
    </div>
  )
}

export default MovieCard