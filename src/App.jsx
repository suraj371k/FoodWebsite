import Navbar from "./Components/Navbar"
import {Routes , Route} from 'react-router-dom'
import Home from "./Components/pages/Home"
import Cart from "./Components/pages/Cart"
import PlaceOrder from "./Components/pages/PlaceOrder"
import Footer from "./Components/Footer"
import LoginPopup from "./Components/LoginPopup"
import { useState } from "react"

function App(){
  const [showLoginn , setShowLogin] = useState(false)
  return(
    <>
    {showLoginn?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div>

      <Navbar setShowLogin = {setShowLogin}/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/order" element={<PlaceOrder/>}/>
     </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App