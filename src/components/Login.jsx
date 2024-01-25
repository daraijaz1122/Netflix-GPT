import React ,{useState}from 'react'
import Header from './Header'
import { CONSTANTS } from '../utils/Constants'

const Login = () => {
  const [isSignInForm, SetIsSignInForm] = useState(true)
  const handleSignUp =()=>{
SetIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src={CONSTANTS.BG} alt='background image'/>
      </div>
      <form className=' w-3/12 rounded-lg text-white bg-opacity-80 absolute mx-auto left-0 right-0 my-36 p-12 bg-black'>
        <h1 className='py-4 text-xl font-bold'>
          { isSignInForm ? " Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && <input type='text'
         placeholder='Full Name' 
         className=' bg-gray-700 rounded-lg p-4 my-4 w-full'/>}


        <input type='text'
         placeholder='Email Address' 
         className=' bg-gray-700 rounded-lg p-4 my-4 w-full'/>

      
        <input type='password' 
        placeholder='Password' 
        className=' bg-gray-700 rounded-lg p-4 my-4 w-full'/>
        <button className=' bg-red-700 p-4 rounded-lg my-6 w-full'>{ isSignInForm ? " Sign In" : "Sign Up"}</button>
        <p onClick={handleSignUp} className='py-4 cursor-pointer'>{isSignInForm?"New to Netflix? Sign Up Now" :"Already registered? Sign In Now"} </p>
      </form>
     </div>
  )
}

export default Login