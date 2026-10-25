import React from 'react'
import { useState } from 'react';
import Header from './Header'

const Login = () => {

const [isSignInForm, setisSignInForm] = useState(true); 
const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
};

  return (
    <div>
      <Header/>
      <div className='absolute bg-gradient-to-b from-black'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/5aa70728-e223-472f-9230-babd8f6ba166/web/IN-en-20261019-TRIFECTA-perspective_79fa76c2-2cb2-4d20-8de2-f696f3b6131e_large.jpg'
            alt='background' />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
            <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800'/>
        )}
        <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800'/>
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800'/>
        <button className='p-4 my-6 bg-red-600 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now.."}</p>
      </form>
    </div>
  )
}

export default Login
