import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstants';;
import openai from '../utils/openAi';
import { API_OPTIONS } from '../utils/tmdb';
import { addGptMovieResult } from '../utils/GptSlice';
const GptSearchBar = () => {
   const dispatch = useDispatch()
    const langKey = useSelector((store)=>store.config.lang)
    const searchText = useRef(null);
     
    const searchMovieTmdb = async(movie)=>{
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="
      + movie +
      "&include_adult=false&language=en-US&page=1",API_OPTIONS)

      const json = await data.json();
      return json.results ;
    }
   
   const handleSearch=async()=>{

    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query:"
     +searchText.current.value + 
     "only give me names of 5 movies ,comma seperated like the example result given ahead. Example Result: koi mil gaya, Sholay , hum aap k hain kon, hero,villan";


    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content:gptQuery}],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResults.choices){
      console.log("something went wrong")
    }

    
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")

    const data = gptMovies.map(movie =>searchMovieTmdb(movie))
     const tmdbResults = await Promise.all(data)
      dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}))
   }


  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center'>
       
        <form className='  rounded-lg  md:w-1/2 bg-black flex'>
            <input 
            ref={searchText}
            className=' w-9/12 p-4 m-4' type="text" 
            placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button
            onClick={handleSearch}
            type='button' className='w-3/12 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'> 
            {lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar