import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'
const GptSearchBar = () => {
    const langKey = useSelector((store)=>store.config.lang)
    console.log(langKey, "language key")
  return (
    <div className='pt-[10%] flex justify-center'>
       
        <form className='  rounded-lg  w-1/2 bg-black flex'>
            <input className=' w-9/12 p-4 m-4' type="text" 
            placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button className='w-3/12 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'> 
            {lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar