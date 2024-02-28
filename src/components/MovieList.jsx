import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movies}) => {
   
  return (
    <div className='px-6 '>
         <h1 className='py-4 font-semibold text-white text-lg md:text-3xl'>{title}</h1>
       <div className='flex overflow-x-scroll md:overflow-x-scroll'>
       
        <div className='flex'>
            {movies?.map(movie =>  <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
           
        </div>
       </div>

    </div>
  )
}

export default MovieList