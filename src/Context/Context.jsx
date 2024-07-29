import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Context = createContext(null)

const ContextProvider = (props) =>{
  const [cartItems , setCartItems] = useState({});
  
  const addToCart = (itemId) =>{
    if(!cartItems[itemId]){
        setCartItems((prev) => ({...prev , [itemId]: 1}))
    }
    else{
        setCartItems((prev) => ({...prev , [itemId]:prev[itemId] + 1}))
    }
  }
   
  const removeFromCart = (itemId) =>{
  setCartItems((prev) => ({...prev , [itemId]:prev[itemId] - 1}))
  }

   const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for (const item in cartItems){
     if(cartItems[item] > 0){
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
     }
    }
    return totalAmount;
   }

    const contextValue = {
       food_list,
       cartItems,
       removeFromCart,
       addToCart,
       setCartItems,
       getTotalCartAmount
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;