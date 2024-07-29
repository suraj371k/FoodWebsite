import React, { useState } from 'react'
import { assets } from '../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currState , setCurrState] = useState('Sign up')
  return (
    <div className='absolute z-10 w-full h-full bg-[#00000090] grid'>
        <form className='place-self-center w-max-[23vw , 330px] text-[#808080] bg-white
        flex flex-col rounded-2xl gap-6 py-5 px-6 text-xl animation-fadeIn duration-500'>
            <div className='flex justify-between items-center text-black'>
                <h2>{currState}</h2>
                <img className='cursor-pointer' onClick={() => setShowLogin(false)} src={assets.cross_icon}></img>
            </div>
            <div className='flex flex-col gap-5'>
                {currState === "Login"?<></>:<input className='border-2 py-2 px-4 rounded-2xl' type='text' placeholder='Your Name' required></input>                }
                <input className='border-2 py-2 px-4 rounded-2xl' type='email' placeholder='Your Email' required/>
                <input className='border-2 py-2 px-4 rounded-2xl' type='password' placeholder='Password' required/>
            </div>
            <button className='bg-[tomato] text-white py-2 px-4 rounded-lg'>{currState === "Sign up"?"Create Account":"Login"}</button>
            <div className='flex gap-3'>
                <input className='cursor-pointer' type='checkbox' required/>
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            {
                currState === "Login"?
             <p>Create a new account?<span className='text-blue-700 cursor-pointer' onClick={() => setCurrState("Sign up")}>Click here</span></p>:
             <p>Already have an account?<span className='text-blue-700 cursor-pointer' onClick={() => setCurrState("Login")}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup