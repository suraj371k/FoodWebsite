import { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'


const Navbar = ({setShowLogin}) => {
    const [menu , setMenu] = useState("home")

    return(
       <div className='flex justify-around m-14 flex-wrap'>
        <Link to='/'><img className='logo' src={assets.logo}></img></Link>
        <ul className="flex flex-col lg:flex-row gap-x-8 mt-3 text-xl cursor-pointer lg:gap-x-12 xl:gap-x-16">
        <Link className='bg-[tomato] mb-4 transition-all duration-300 text-white
        px-6 py-3 rounded-xl' to="/" onClick={() => setMenu("home")}>home</Link>
        <a className='bg-[tomato] mb-4  transition-all duration-300 text-white px-6
        py-3 rounded-xl hover:opacity-90' href='#explore-menu' onClick={() => setMenu("menu")}>menu</a>
        <a className='bg-[tomato] mb-4  transition-all duration-300 text-white px-6
        py-3 rounded-xl hover:opacity-90' href='#app-download' onClick={() => setMenu("mobile-app")}>mobile-app</a>
        <a className='bg-[tomato] mb-4  transition-all duration-300 text-white px-6
        py-3 rounded-xl hover:opacity-90' href='#footer' onClick={() => setMenu("contact us")}> contact us</a>
      </ul>
        <div className='flex gap-x-8'>
            <div className=' mt-3 relative'>

            <img src={assets.search_icon}></img>
            </div>
            <div className='mt-3'>
                <Link to='/cart'><img src={assets.basket_icon}></img></Link>
            </div>
            <div>
                <button onClick={() => setShowLogin(true)} className='px-6 py-3 rounded-3xl border-2 transition duration-300 hover:bg-orange-500'>sign in</button>
            </div>
        </div>
       </div>
    )
}

export default Navbar