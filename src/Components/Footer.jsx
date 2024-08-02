
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-wrap flex-col items-center gap-[20px]
    px-[8vw] py-[20px] pt-[80px]'>
        <div className='grid w-[100%] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            <div className='flex flex-col items-start gap-10 '>
              <img src={assets.logo}></img>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem repellendus
               voluptas, et architecto nulla cupiditate illo praesentium deleniti eligendi veritatis.</p>
               <div className='flex gap-5 cursor-pointer flex-wrap'>
                <img src={assets.facebook_icon}></img>
                <img src={assets.twitter_icon}></img>
                <img src={assets.linkedin_icon}></img>
               </div>
            </div>
            <div className='flex flex-col items-start gap-10' id='footer'>
               <h2 className='text-3xl font-bold text-white'>COMPANY</h2>
               <ul className='cursor-pointer'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
               </ul>
            </div>
            <div className='flex flex-col items-start gap-10'>
               <h2 className='text-3xl font-bold text-white'>GET IN TOUCH</h2>
               <ul className='cursor-pointer'>
                <li>91-630-7624-976</li>
                <li>surajkushwaha371@gmail.com</li>
               </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer