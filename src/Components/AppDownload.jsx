import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='m-10' id='app-download'>
        <p className='text-center text-3xl my-5'>For Better Experience Download <br/> Tomato App</p>
        <div className='flex justify-center gap-10 flex-wrap'>
         <img className='hover:scale-110 transition-all duration-300' src={assets.play_store}/>
         <img className='hover:scale-110 transition-all duration-300' src={assets.app_store}/>
        </div>
    </div>
  )
}

export default AppDownload