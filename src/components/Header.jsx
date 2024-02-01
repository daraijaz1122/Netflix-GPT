import React ,{useEffect}from 'react'
import {CONSTANTS, SUPPORTED_LANGUAGES} from "../utils/Constants"
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView} from '../utils/GptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user)
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
  const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{
    })
    .catch((error)=>{
      navigate("/error")
    })
  }
  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const{uid,email,displayName,photoURL} = user;
        dispatch(addUser({
          uid:uid.email,
          email:email,
          displayName:displayName,
          photoURL:photoURL
        }))
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    //unsubscribe when component unmounts 
    return () => unsubscribe()
  },[])

  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className='z-10 absolute px-8 w-screen p-2 bg-gradient-to-b from-black flex justify-between'>
        <img  className="w-44" src={CONSTANTS.LOGO} alt='logo'/>

       {user && (
       
       <div className='flex p-2 '>
       {showGptSearch && <select onChange={handleLanguageChange} className='p-2 bg-gray-900 text-white m-2'>
          {SUPPORTED_LANGUAGES.map((lang)=>(
           <option key={lang.identfier} value={lang.identfier}>{lang.name}</option>
          ))}
         
          
        </select>}
          <button
          onClick={handleGptSearchClick}
          className='bg-purple-800 py-2 font-bold px-4 rounded-lg mx-4 my-2 text-white '>{showGptSearch?"Home":"GPT Search"} </button>
          <img 
          className=' h-12 w-12'
          alt='userIcon'
          src={user?.photoURL}/>
          <button
          onClick={handleSignOut}
          className='font-bold text-white'>(Sign Out)</button>
        </div>)}
    </div>
  )
}

export default Header