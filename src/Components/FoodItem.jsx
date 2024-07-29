import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import { Context } from "../Context/Context";


const FoodItem = ({id , name , price , description , image}) =>{
    const {cartItems ,addToCart , removeFromCart } = useContext(Context)
    return(

        <div>
          <div>
            <img className="rounded-xl" src={image}></img>
            {  !cartItems[id]
            ? <img onClick={() => addToCart(id)} src={assets.add_icon_white}></img>
            :<div className="flex gap-x-3 m-2 cursor-pointer">
                <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red}/>
                <p className="text-xl">{cartItems[id]}</p>
                <img onClick={() => addToCart(id )} src={assets.add_icon_green}/>
            </div>
               
            }
          </div>
          <div className="shadow-2xl rounded-2xl py-4 px-2 my-3">
            <div className="flex justify-between">
                <p className="font-bold">{name}</p>
                <img src={assets.rating_starts}></img>
            </div>
            <p>{description}</p>
            <p className="text-[tomato] text-2xl font-semibold">${price}</p>
          </div>
        </div>
    )
}

export default FoodItem