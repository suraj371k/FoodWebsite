import { useContext } from "react"
import { Context } from "../../Context/Context"
import {useNavigate} from "react-router-dom"
const Cart = () =>{

    const {cartItems , food_list , removeFromCart ,getTotalCartAmount} = useContext(Context)
    const navigate = useNavigate()

    return(
        <div className="mt-24">
           <div>
            <div className='flex justify-evenly text-[grey]'>
                <p className="ml-10">Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p className="mr-5">Total</p>
                <p>Remove</p>
            </div>
            <br/>
            <hr/>
            {food_list.map((item) =>{
                if(cartItems[item._id] > 0){
                    return(
                     <div>
                           <div className="m-5 flex justify-evenly mr-8">
                            <img className="" src={item.image} width={40}/>
                            <p className="w-5">{item.name}</p>
                            <p className="w-5">${item.price}</p>
                            <p className="w-5">{cartItems[item._id]}</p>
                            <p className="w-5">${item.price * cartItems[item._id]}</p>
                            <p className="w-5 cursor-pointer" onClick={() => removeFromCart(item._id)}>X</p>
                        </div>
                        <hr/>
                     </div>
                         
                    )
                }
            })}
           </div>
        <div className="mt-[80px] flex justify-between gap-4">
            <div className="flex-1 flex flex-col gap-7  ">
            <h2 className="text-3xl font-semibold ml-20">Cart Totals</h2>
            <div className="ml-20">
                <div className="flex justify-between text-[#555] w-[50%] py-8">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr className="w-[50%]"/>
                <div className="flex justify-between text-[#555] w-[50%] py-8">
                    <p>Delivery Fee</p>
                    <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                </div>
                <hr className="w-[50%]"/>
                <div className="flex justify-between text-[#555] w-[50%] py-8">
                    <b>Total</b>
                    <b>${getTotalCartAmount() === 0? 0: getTotalCartAmount() + 2}</b>
                </div>
                <button onClick={() => navigate('/order')} className="px-6 py-3 rounded-lg bg-[tomato] text-white mb-4">Proceed to checkout</button>
            </div>
        </div>
        <div className="flex-1">
            <div>
                <p className="text-lg p-5">
                    If you have a promo code, Enter it here
                </p>
                <div className="p-5">
                    <input className="py-2 px-4 border-2 rounded-xl" type="text" placeholder='promo code'/>
                    <button className="mx-5 bg-[tomato] text-white px-5 py-2 rounded-lg">Submit</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Cart