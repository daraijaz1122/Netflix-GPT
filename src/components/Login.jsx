import React ,{useState,useRef}from 'react'
import Header from './Header'
import { CONSTANTS } from '../utils/Constants'
import { ValidateFormData } from '../utils/Validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validationError,setValidationError] = useState("")
  const navigate = useNavigate()
  const dispatch =useDispatch()
  const email=useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const handleSubmit =()=>{
    const message = ValidateFormData(email.current.value , password.current.value)
   setValidationError(message)
    if(message) return
    if(!isSignInForm){
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value)
        .then((userCredential) => { 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: "https://avatars.githubusercontent.com/u/110050419?v=4"
          }).then(() => {
            const{uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({
              uid:uid.email,
              email:email,
              displayName:displayName,
              photoURL:photoURL
            }))

            navigate('/browse')
          }).catch((error) => {
           setValidationError(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setValidationError(errorCode + errorMessage)
        });
    }else{
      //sign in
      signInWithEmailAndPassword(
        auth, 
        email.current.value,
         password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        navigate("/browse")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setValidationError(errorCode + errorMessage)
      });
    }
  }

  const handleSignUp =()=>{
   setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src={CONSTANTS.BG} alt='background image'/>
      </div>
      <form 
      onSubmit={(e) => e.preventDefault()}
      className=' w-3/12 rounded-lg text-white bg-opacity-80 absolute mx-auto left-0 right-0 my-36 p-12 bg-black'>
        <h1 className='py-4 text-3xl font-bold'>
          { isSignInForm ? " Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && <input type='text'
         placeholder='Full Name' 
         ref={name}
         className=' bg-gray-700 rounded-lg p-4 my-4 w-full'/>}


        <input type='text'
        ref={email}
         placeholder='Email Address' 
         className=' bg-gray-700 rounded-lg p-4 my-4 w-full'/>

      
        <input type='password' 
        ref={password}
        placeholder='Password' 
        className=' bg-gray-700 rounded-lg p-4 my-4 w-full'/>

        <p className='text-red-600 font-bold text-lg py-4'>{validationError}</p>
        
        <button 
        onClick={handleSubmit}
        className=' bg-red-700 p-4 rounded-lg my-6 w-full'>
          { isSignInForm ? " Sign In" : "Sign Up"}
          </button>
        <p onClick={handleSignUp} 
        className='py-4 cursor-pointer'>
          {isSignInForm?"New to Netflix? Sign Up Now" :"Already registered? Sign In Now"} 
          </p>
      </form>
     </div>
  )
}

export default Login